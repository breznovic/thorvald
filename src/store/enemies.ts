import { nanoid } from "@reduxjs/toolkit";
import { FighterType } from "../common/types/types";

export const enemies: FighterType[] = [
  {
    id: nanoid(8),
    name: "Guard",
    strength: 1,
    fullHP: 10,
    maxHP: 10,
    armor: 0,
    avatar:
      "https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg",
    XP: 5,
    level: 1,
    isDead: false,
  },

  {
    id: nanoid(8),
    name: "Archer",
    strength: 2,
    fullHP: 20,
    maxHP: 20,
    armor: 1,
    avatar:
      "https://i.pinimg.com/originals/69/5a/0c/695a0cdeea901966afdbbf931f848f7d.jpg",
    XP: 10,
    level: 1,
    isDead: false,
  },

  {
    id: nanoid(8),
    name: "Warrior",
    strength: 4,
    fullHP: 30,
    maxHP: 30,
    armor: 3,
    avatar: "https://wallpapersmug.com/large/ad2083/fantasy-warrior-art.jpg",
    XP: 15,
    level: 1,
    isDead: false,
  },

  {
    id: nanoid(8),
    name: "Knight",
    strength: 5,
    fullHP: 50,
    maxHP: 50,
    armor: 5,
    avatar:
      "https://steamuserimages-a.akamaihd.net/ugc/911296644864742654/0F8D9C3A40ABB6D62C3EFA6750F1AFD2372A251F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    XP: 20,
    level: 1,
    isDead: false,
  },

  {
    id: nanoid(8),
    name: "Guardsman",
    strength: 7,
    fullHP: 70,
    maxHP: 70,
    armor: 8,
    avatar:
      "https://i.pinimg.com/originals/63/fb/65/63fb656fcb22a817cefa67fa2ee27ad1.jpg",
    XP: 30,
    level: 1,
    isDead: false,
  },
  {
    id: nanoid(8),
    name: "Final",
    strength: 10,
    fullHP: 10,
    maxHP: 10,
    armor: 10,
    avatar: "",
    XP: 10,
    level: 1,
    isDead: false,
  },
];
