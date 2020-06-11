(function () {
  let counterValue = 0;
  const buttons = document.querySelectorAll(".counterBtn");
  const counter = document.getElementById("counter");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const value = event.target;
      console.log(value);

      if (value.classList.contains("prevBtn")) {
        counterValue -= 1;
      } else if (value.classList.contains("nextBtn")) {
        counterValue += 1;
      }
      counter.textContent = counterValue;

      if (counterValue < 0) {
        counter.style.color = "red";
      } else if (counterValue == 0) {
        counter.style.color = "#333";
      } else {
        counter.style.color = "green";
      }
    });
  });
})();
