export const calculTimeEvent = (seconds: number): string => {
  let timeEvent = "";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (!hours && minutes) {
    timeEvent = `${minutes} min`;
  } else if (hours && !minutes) {
    timeEvent = `${hours} h`;
  } else {
    timeEvent = `${hours}h ${minutes} min`;
  }

  return timeEvent;
};

export const convertSecondsToHour = (seconds: number): string => {
  const date = new Date(seconds * 1000).toISOString().substr(11, 5);

  const timeHour =
    parseInt(date.substr(0, 2)) >= 12 ? `${date} PM` : `${date} AM`;

  return timeHour;
};
