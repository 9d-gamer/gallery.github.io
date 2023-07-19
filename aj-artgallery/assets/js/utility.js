var Data = {};
const locationURL = window.location.href
var Devmode = true

function containsOnlySubstring(str, substring) {
  // Escape special characters in the substring to avoid issues in the regular expression
  const escapedSubstring = substring.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Create a regular expression to match the entire string against the substring pattern
  const regex = new RegExp(`^(${escapedSubstring})*$`);
  
  // Check if the string matches the regular expression
  return regex.test(str);
}

if (locationURL.includes('index.html') || locationURL.includes('painting.html') || containsOnlySubstring(locationURL,'http://127.0.0.1:5500/')) {
  if (!Devmode) {
    fetch("data/version.json")
      .then((response) => response.json())
      .then((res) => {
        const cachedData = localStorage.getItem(res.version);
        if (cachedData) {
          Data = JSON.parse(cachedData);
          HandlePage()
        } else {
          DeleteOldCache(res)
          fetchDataAndCache(res)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    fetchDataAndCache()
  }
}

function DeleteOldCache(data) {
  const oldData = localStorage.getItem(data.old_version);
  if (oldData) {
    localStorage.removeItem(data.old_version);
  }
}

function fetchDataAndCache(res) {
  if (res) {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        Data = data;
        localStorage.setItem(res.version, JSON.stringify(data));
        HandlePage()
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        Data = data;
        HandlePage()
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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