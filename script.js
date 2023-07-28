function showButtons() {
  document.getElementById("select-btn").style.display = "none";
  document.getElementById("button1").style.display = "inline-block";
  document.getElementById("button2").style.display = "inline-block";
  document.getElementById("button3").style.display = "inline-block";
  document.getElementById("chosefile").style.width = "45%";
  document.getElementById("chosefile").style.height = "45%";
}
function redirectToPage1() {
  window.location.href = "music1.html";
}
function redirectToPage2() {
  window.location.href = "music2.html";
}
function redirectToPage3() {
  window.location.href = "music3.html";
}

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml13 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
}).add({
    targets: '.ml13 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
});
