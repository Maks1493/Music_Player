const fileInput = document.getElementById('file');
const submitButton = document.getElementById('btnplay');

fileInput.addEventListener('change', () => {
  if (fileInput.value) {
    submitButton.style.display = 'block';
  } else {
    submitButton.style.display = 'none';
  }
});

function showFileName() {
  var input = document.getElementById("file");
  var fileName = document.getElementById("file-name");
  var playButton = document.getElementById("btnplay");

  if (input.files.length > 0) {
    fileName.innerHTML = input.files[0].name;
    fileName.style.display = "inline-block";
    playButton.style.display = "inline-block";
    document.getElementById("file-label").style.display = "none";
    document.getElementById("file").style.display = "none";
  }
}