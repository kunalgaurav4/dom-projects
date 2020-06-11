(function () {
  document
    .getElementById("message-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const message = document.getElementById("message");
      const value = message.value;

      //   For empty value
      if (value === "") {
        document.body.style.backgroundColor = "red";
        const feedback = document.querySelector(".feedback");
        feedback.classList.add("show");
        setTimeout(function () {
          feedback.classList.remove("show");
        }, 2000);
      }else{
          document.body.style.backgroundColor = 'green'
           // Change of value
      document.querySelector(".message-content").textContent = value;
      message.value = "";

      }

     
    });
})();
