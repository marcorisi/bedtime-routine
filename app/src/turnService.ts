import { Who } from "./domain";

function getNumberOfDaysFromStartOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWho(date: Date, isReversed: boolean = false): Who {
  const days = getNumberOfDaysFromStartOfYear(date);
  let who = days % 2 === 0 ? Who.MOM : Who.DAD;
  if (isReversed) {
    who = who === Who.MOM ? Who.DAD : Who.MOM;
  }
  return who;
}

export { getNumberOfDaysFromStartOfYear, getWho };
