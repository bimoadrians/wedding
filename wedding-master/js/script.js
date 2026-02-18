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
            // window.location.replace("cover.html");
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

// //set param
// const setUrlParam = (section, data_id = '', defect_type = 'N', defect_data = '0#0') => {
//   let part_n = $(this).attr('data-bs-part');
//   let urlParam = "";
//   if (section == 1) {
//     urlParam = new URLSearchParams({
//       date: $("#date-his").val(),
//       unit: $("#unit").val(),
//       line: $("#line").val(),
//     });
//   }
//   // else if (section == 2) {
//   //   urlParam = new URLSearchParams({
//   //     part_num: part_n,
//   //   });
//   // }
//   return urlParam;
// }

// //fetch data
// const fetchData = async (section, urlParam) => {
//   try {
//     let apiSection = "";
//     if(section == 'view-list'){
//       apiSection = "fo.php?section=6&" + urlParam; 
//     } else if(section == 'view-list-det'){
//       apiSection = "fo.php?section=7&" + urlParam; 
//     } else if(section == 'add-list'){
//       apiSection = "fo.php?section=8";
//     } else if(section == 'upd-list-det'){
//       apiSection = "fo.php?section=9";           
//     }

//     let res = '';
//     if (section == 'add-list' || section == 'upd-list-det' || section == 'del-list') {
//       res = await fetch("api/"+ apiSection, {
//         method : "POST",
//         body : urlParam
//       });
//     } else {
//       res = await fetch("api/"+ apiSection, {
//         method : "GET",
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });
//     }

//     const output = await res.json();
//     // console.log(output.auth);
    
//     if (section == 'view-list') {           
//       setList(output);
//     } else if (section == 'view-list-det') {           
//       setListDet(output);
//     } else if (section == 'updlist-det'){
//       console.log(output);
//     } else if (section == 'add-list'){
//       if (output[0].actx == 'FALSE'){
//         $('#tr-msg-add').removeClass('d-none');
//         $('#td-msg-add').empty();
//         $('#td-msg-add').append('Error or duplicate data.');
//         return;
//       } else if (output[0].actx == 'EMPTY'){
//         const pisAddlink = 'http://192.168.10.100/dev/pis-add.html';
//         const pisAddtext = 'ADD PIS';
//         const alink = document.createElement('a');
//         alink.setAttribute('href', pisAddlink);
//         alink.innerHTML = pisAddtext;
//         $('#tr-msg-add').removeClass('d-none');
//         $('#td-msg-add').empty();
//         $('#td-msg-add').append('Please input PIS first at '); //+ alink
//         $('#td-msg-add').append(alink);
//         return;
//       } else {
//         $('#modalDialog').modal('hide');
//         fetchData('view-list', setUrlParam(1));
//       }
//     } else if(section == 'del-list'){
//       if (output[0]['actx'] == 'TRUE') {
//         $('#row-data-' + output[0]['idx']).remove();
//       }
//     } else if (section == 'view-part-list'){
//       setPartList(output);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }