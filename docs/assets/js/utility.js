var Data = {};
const locationURL = window.location.href
var Devmode = false

function containsOnlySubstring(str, substring) {
  // Escape special characters in the substring to avoid issues in the regular expression
  const escapedSubstring = substring.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Create a regular expression to match the entire string against the substring pattern
  const regex = new RegExp(`^(${escapedSubstring})*$`);
  
  // Check if the string matches the regular expression
  return regex.test(str);
}

function redirect(url) {
    window.location.href = url;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}