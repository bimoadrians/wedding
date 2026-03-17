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
var d = new Date(new Date("Oct 18, 2026 13:00:00").getTime());

simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds() + 1,
    enableUtc: false
});

// Set and Get Cookies

function formatNumber(number){
  return new Intl.NumberFormat().format(number);
}// default function

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  //console.log(document.cookie);
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Check if the page was accessed by a reload or simply navigated to
function checkPageLoadType() {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
        const navType = navEntries[0].type;
        // If the type is 'reload', redirect to the first page
        if (navType === 'reload') {
            localStorage.setItem('id_log', '');
            localStorage.setItem('usr_log', '');
            window.location.replace("cover.html");
        }
    }
}

// Run the function when the page loads
window.onload = checkPageLoadType;

$('#btn-login').click(function(e){
  e.preventDefault;

  let id_log = $("#id_log").html();
  let usr_log = $("#usr_log").html();

  // setCookie("id_log", id_log, 30);
  localStorage.setItem('id_log', id_log);
  localStorage.setItem('usr_log', usr_log);

  location.replace("main.html");
});

var id_log = localStorage.getItem('id_log');
var usr_log = localStorage.getItem('usr_log');
console.log(id_log);
console.log(usr_log);

//set param
const setUrlParam = (section, data_id = '', defect_type = 'N', defect_data = '0#0') => {
  let part_n = $(this).attr('data-bs-part');
  let urlParam = "";
  if (section == 1) {
    urlParam = new URLSearchParams({
      id: id_log,
      usr: usr_log,
      // line: $("#line").val(),
    });
  }
  // else if (section == 2) {
  //   urlParam = new URLSearchParams({
  //     part_num: part_n,
  //   });
  // }
  return urlParam;
}

//fetch data
const fetchData = async (section, urlParam) => {
  try {
    let apiSection = "";
    if(section == 'view-wish'){
      apiSection = "wedding.php?section=1&" + urlParam;
    } else if(section == 'add-wish'){
      apiSection = "wedding.php?section=2";
    }

    let res = '';
    if (section == 'add-wish') {
      res = await fetch("api/"+ apiSection, {
        method : "POST",
        body : urlParam
      });
    } else {
      res = await fetch("api/"+ apiSection, {
        method : "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const output = await res.json();
    // console.log(output.auth);
    
    if (section == 'view-wish') {           
      setList(output);
    } else if (section == 'add-wish'){
      if (output[0].actx == 'FALSE'){
        alert("Error or duplicate data.");
        return;
      } else if (output[0].actx == 'EMPTY'){
        alert("Please input Your Name First.");
        return;
      } else {
        $('#modalDialog').modal('hide');
        fetchData('view-wish', setUrlParam(1));
      }
    }
  } catch (error) {
    console.log(error);
  }
}