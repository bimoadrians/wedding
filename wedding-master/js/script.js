// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }
// window.onload = function () {
//     window.scrollTo(0, 0);
//     // window.location.href = "cover";
// };

document.addEventListener('keydown', function(e) {
  // Block F12 (keyCode 123)
  // if (e.key === 'F12') {
  //   e.preventDefault();
  // }
  // Block Command+Option+I (keyCode 73)
  if (e.metaKey && e.altKey && e.key === 'i') {
    e.preventDefault();
  }
  // Block Command+Option+I (keyCode 73)
  if (e.metaKey && e.altKey && e.key === 'I') {
    e.preventDefault();
  }
  // Block Ctrl+Shift+I (keyCode 73)
  if (e.ctrlKey && e.shiftKey && e.key === 'i') {
    e.preventDefault();
  }
  // Block Ctrl+Shift+I (keyCode 73)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  // Block Ctrl+Shift+J (keyCode 74)
   if (e.ctrlKey && e.shiftKey && e.key === 'j') {
    e.preventDefault();
  }
  // Block Ctrl+Shift+J (keyCode 74)
   if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
  }
  // Block Ctrl+U (keyCode 85)
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
  // Block Ctrl+U (keyCode 85)
  if (e.ctrlKey && e.key === 'U') {
    e.preventDefault();
  }
}, false);

// Check if the page was accessed by a reload or simply navigated to
function checkPageLoadType() {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
        const navType = navEntries[0].type;
        // If the type is 'reload', redirect to the first page
        if (navType === 'reload') {
            window.location.replace("cover.html");
        }
    }
}

// Run the function when the page loads
window.onload = checkPageLoadType;

function playing() {
    document.getElementById('btn_stop').style.display ="none";
    document.getElementById('btn_play').style.display ="block";
    let sound = document.getElementById('audio');
    sound.play();
}
function pause() {
    document.getElementById('btn_stop').style.display ="block";
    document.getElementById('btn_play').style.display ="none";
    let sound = document.getElementById('audio');
    sound.pause();
}
var d = new Date(new Date("Oct 25, 2026 13:00:00").getTime());

simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds() + 1,
    enableUtc: false
});