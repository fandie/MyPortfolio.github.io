const player = new Plyr('#myAudio');


var typed = new Typed(".multiple-text", {
    strings: ["Frontend Web Developer", "Data Scientist", "Social Media Specialist"],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 500,
    loop: true,
  });

// Perpindahaan nav tab skill
$(document).ready(function(){
  $('#myTabs a').click(function(e){
      e.preventDefault();
      $(this).tab('show');
  });
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
    
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
 

  var timeString = hours + ":" + minutes;

  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
