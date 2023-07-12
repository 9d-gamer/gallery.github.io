var Data = {};

var Devmode = true

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
