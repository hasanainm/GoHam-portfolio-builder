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


// // We want to preview images, so we need to register the Image Preview plugin
// FilePond.registerPlugin(
//   FilePondPluginImagePreview
// );

// // Select the file input and use create() to turn it into a pond
// FilePond.create(
//   document.querySelector('input')
// );
