import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FighterType, Thorvald } from "../common/types/types";
import { enemies } from "./../store/enemies";

const initialState: {
  enemiesForFight: FighterType;
  thorvald: Thorvald;
} = {
  enemiesForFight: enemies[0],
  thorvald: {
    id: "thorvald",
    name: "Thorvald",
    strength: 5,
    fullHP: 100,
    maxHP: 100,
    armor: 0,
    avatar:
      "https://i.pinimg.com/originals/31/46/1b/31461b321a171a627646a836b259d937.png",
    XP: 0,
    level: 1,
    isDead: false,
    levelsScore: 10,
  },
};

export const setEnemyForFight = createAsyncThunk(
  "fight/setEnemyForFight",
  async () => {
    const res = await Promise.resolve(enemies);
    let enemyForFight = res.find((e) => e.id === e.id);
    return enemyForFight;
  }
);

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitEnemy: (state) => {
      let enemy = state.enemiesForFight;
      const thorvald = state.thorvald;
      const enemyArmor = enemy.armor;
      let enemyHP = enemy.fullHP;
      let thorvaldStrength = thorvald.strength - enemyArmor;
      enemyHP -= thorvaldStrength;
      enemy.fullHP = enemyHP;

      if (enemyHP <= 0) {
        enemy.isDead = true;
        state.thorvald.XP += enemy.XP;
        enemy.fullHP = enemy.maxHP;
        enemy.level += 1;
        enemy.armor += 1;
      }

      if (thorvald.XP >= thorvald.levelsScore) {
        let remainingXP = thorvald.XP - thorvald.levelsScore;
        thorvald.levelsScore += 10;
        thorvald.XP = initialState.thorvald.XP + remainingXP;
        thorvald.strength += 1;
        thorvald.level += 1;
      }

      if (enemy.level > 5) {
        const currentIndex = enemies.findIndex((e) => e.id === enemy.id);
        const nextIndex = currentIndex + 1;
        state.enemiesForFight = enemies[nextIndex];
      }
    },
    clickOnDeadEnemy: (state) => {
      state.enemiesForFight.isDead = false;
    },
    resetEnemy: (state) => {
      state.enemiesForFight = enemies[0];
    },
  },
});

export const { hitEnemy, clickOnDeadEnemy, resetEnemy } = fightSlice.actions;

export default fightSlice.reducer;
