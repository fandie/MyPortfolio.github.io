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

//Music
