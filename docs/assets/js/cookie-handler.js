var cookies = document.cookie.split(";");

var DarkMode = false;
var toggleSwitch = document.getElementById('toggleSwitch');
var isToggling = false;

for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i].trim();
  if (cookie.startsWith("DarkMode=")) {
    var cookieValue = cookie.substring("DarkMode=".length);
    DarkMode = cookieValue === 'True';
    toggleSwitch.checked = DarkMode;
    break;
  }
}

toggleSwitch.addEventListener('change', function() {
  if (!isToggling) {
    isToggling = true;
    toggleSwitch.disabled = true;
    
    var darkModeValue = toggleSwitch.checked ? "True" : "False";
    if (DarkMode.toString() !== darkModeValue) {
      document.cookie = "DarkMode=" + darkModeValue;
      DarkMode = toggleSwitch.checked;
      handleDarkMode();
    }
    
    setTimeout(function() {
      isToggling = false;
      toggleSwitch.disabled = false;
    }, 200);
  }
});

