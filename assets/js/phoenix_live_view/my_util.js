import sha256 from "js-sha256"

export function sha256JSON(obj){
  const str = JSON.stringify( obj);
  const bytes = new TextEncoder().encode( str)  // Uint8Array of UTF-8
  return sha256(bytes)  // js-sha256 accepts Uint8Array input
}// util.js

export function formatDate(date) {
  date = new Date( date);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
