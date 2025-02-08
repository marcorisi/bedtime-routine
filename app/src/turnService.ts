export function getTurn(date: Date): string {
  const day = date.getDate();
  console.log(day)
  return day % 2 === 0 ? "Today it's mommy turn" : "Today it's daddy turn";
}
