import { Who } from "./domain";

export function getTurnMessage(date: Date): string {
  const day = date.getDate();
  const who = day % 4 === 0 ? Who.MOM : Who.DAD;
  return `Oggi tocca a... ${who}!`;
}
