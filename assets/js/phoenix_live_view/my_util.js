import sha256 from "js-sha256"

export function sha256JSON(obj){
  let str = JSON.stringify(obj)
  return sha256(str)   // returns a 64-char hex string
}// util.js

export function formatDate(date) {
  date = new Date( date);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
