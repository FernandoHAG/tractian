function convertToHHMMSS(num) {
  const hours = Math.floor(num / 3600);
  const minutes = Math.floor((num % 3600) / 60);
  const seconds = Math.floor(num % 60);

  let hhmmss = "";
  if (hours > 0) {
    hhmmss += hours + "h";
  }
  if (minutes > 0) {
    hhmmss += " " + minutes + "m";
  }
  if (seconds > 0) {
    hhmmss += " " + seconds + "s";
  }
  return hhmmss.trim();
}

export default convertToHHMMSS;
