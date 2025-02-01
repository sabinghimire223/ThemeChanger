const button = document.querySelectorAll("span.button");
button.forEach(function (button) {
  button.addEventListener("click", function () {
    const color = button.id;
    document.body.style.backgroundColor = color;
    if (color == "grey" || color == "blue") {
      document.body.style.color = "White";
    }
    if (color == "white" || color == "yellow") {
      document.body.style.color = "black";
    }
  });
});
