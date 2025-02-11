import { Who } from "./domain";

export function getWho(date: Date): Who {
  const day = date.getDate();
  const who = day % 2 === 0 ? Who.MOM : Who.DAD;
  return who;
}
