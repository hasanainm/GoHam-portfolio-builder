const userFile = document.getElementById("user-file");
const uploadButton = document.getElementById("custom-button");
const fileName = document.getElementById("custom-text");


uploadButton.addEventListener("click", function () {
  userFile.click();
});

userFile.addEventListener("change", function () {
  
  if (userFile.value) {
    fileName.innerHTML = userFile.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  }
  else {
    fileName.innerHTML = "No file chosen, yet.";
  }
});
