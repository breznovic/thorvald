import { ReactNode } from "react";

export type FighterType = {
  id: string | number;
  name: string;
  fullHP: number;
  maxHP: number;
  armor: number;
  strength: number;
  XP: number;
  avatar: string;
  level: number;
  isDead: boolean;
};

export interface Thorvald extends FighterType {
  levelsScore: number;
}

export type TitleType = {
  title: string;
  children?: ReactNode;
};
