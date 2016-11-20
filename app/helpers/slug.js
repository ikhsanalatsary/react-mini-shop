export function slug(str) {
  return str.split(' ').join('-').toLowerCase();
}

export function normalString(str) {
  var normalStr = str.split('-').join(' ');
  return toTitleCase(normalStr);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
