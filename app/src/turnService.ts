import { Who } from "./domain";

function getNumberOfDaysFromStartOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWho(date: Date): Who {
  const days = getNumberOfDaysFromStartOfYear(date);
  const who = days % 2 === 0 ? Who.MOM : Who.DAD;
  return who;
}

export { getNumberOfDaysFromStartOfYear, getWho };
