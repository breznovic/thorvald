import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FighterType, Thorvald } from "../common/types/types";

export const getEnemiesForFight = createAsyncThunk<FighterType[], void>(
  "enemies/getEnemiesForFight",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/api/enemies/");
    const data = await response.json();
    return data;
  }
);

export const getThorvald = createAsyncThunk<Thorvald, void>(
  "enemies/getThorvald",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/api/thorvald/");
    const data = await response.json();
    return data;
  }
);

const initialState: {
  enemiesForFight: FighterType[];
  battleEnemy: FighterType | null;
  thorvald: Thorvald | null;
} = {
  enemiesForFight: [],
  battleEnemy: null,
  thorvald: null,
};

const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitEnemy: (state) => {
      const enemy = state.battleEnemy;
      const thorvald = state.thorvald;

      if (thorvald && enemy) {
        const enemyArmor = enemy.armor;
        let enemyHP = enemy.fullHP;
        const thorvaldStrength = thorvald.strength - enemyArmor;
        enemyHP -= thorvaldStrength;
        enemy.fullHP = enemyHP;

        if (enemyHP <= 0) {
          enemy.isDead = true;
          thorvald.XP += enemy.XP;
          enemy.fullHP = enemy.maxHP;
          enemy.level += 1;
          enemy.armor += 1;

          if (enemy.level > 5) {
            const currentIndex = state.enemiesForFight.findIndex(
              (e) => e.id === enemy.id
            );
            const nextIndex = currentIndex + 1;
            state.battleEnemy = state.enemiesForFight[nextIndex];
          }
        }

        if (state.thorvald && state.thorvald.XP >= state.thorvald.levelsScore) {
          const remainingXP = state.thorvald.XP - state.thorvald.levelsScore;
          state.thorvald.levelsScore += 10;
          state.thorvald.XP = remainingXP;
          state.thorvald.strength += 1;
          state.thorvald.level += 1;
        }
      }
    },
    clickOnDeadEnemy: (state) => {
      if (state.battleEnemy) {
        state.battleEnemy.isDead = false;
      }
    },
    resetEnemy: (state) => {
      if (state.battleEnemy) {
        state.battleEnemy = state.enemiesForFight[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEnemiesForFight.fulfilled, (state, action) => {
      state.enemiesForFight = action.payload;
      state.battleEnemy = state.enemiesForFight[0];
    }),
      builder.addCase(getThorvald.fulfilled, (state, action) => {
        state.thorvald = action.payload;
      });
  },
});

export const { hitEnemy, clickOnDeadEnemy, resetEnemy } = fightSlice.actions;

export default fightSlice.reducer;
