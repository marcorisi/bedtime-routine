export function getTurnMessage(date: Date): string {
  const day = date.getDate();
  const who = day % 2 === 0 ? "mamma" : "papà";
  return `Oggi tocca a... ${who}!`;
}
