const changeTimeFormat = (date) => (date < 10) ? `0${date}` : String(date);

const formatTime = (date) => {
  const hours = changeTimeFormat(date.getHours() % 12);
  const minutes = changeTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export {
  formatTime
}
