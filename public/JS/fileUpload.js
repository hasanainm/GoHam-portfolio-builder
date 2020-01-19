const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  console.log("clicked")
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  console.log("changed")
  if (realFileBtn.value) {
    console.log(realFileBtn.value)
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
    console.log(customTxt)
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
