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
  var seconds = now.getSeconds();

  // Menambahkan 0 di depan angka jika kurang dari 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
 

  var timeString = hours + ":" + minutes;

  document.getElementById("clock").textContent = timeString;
}

// Memanggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);

// Memanggil updateClock untuk pertama kali saat halaman dimuat
updateClock();
