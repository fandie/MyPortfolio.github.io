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


//Fungsi Jam digital
setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  time.textContent = hours + ":" + minutes;
}, 1000);

function redirectToSurvey() {
  window.location.href = "https://l6qacye6rq6.typeform.com/to/ygUll2WD";
}
