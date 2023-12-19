const player = new Plyr('#myAudio');

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Web Developer", "Data Scientist", "Social Media Specialist"],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 500,
    loop: true,
  });

  function toggleChatPopup() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
}

// Menangani penutupan popup chat dengan mengklik tombol close
document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatPopup").style.display = "none";
});