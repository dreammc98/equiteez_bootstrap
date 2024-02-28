window.addEventListener("DOMContentLoaded", () => {
  const btnSub1 = document.getElementById("btnSub1");
  const myForm = document.getElementById("myForm");
  const myForm2 = document.getElementById("myForm2");

  btnSub1.addEventListener("click", () => {
    const myForm1 = document.getElementById("myForm1");
    sendForm(myForm1);
  });

  const sendForm = (nameForm) => {
    nameForm.addEventListener("submit", (e) => {
      e.preventDefault();

      new bootstrap.Modal(document.getElementById("exampleModal1")).show();
      nameForm.querySelectorAll(".noFocus").forEach((e) => {
        e.style.background = "rgb(245, 252, 199)";
        e.setAttribute("disabled", "disabled");
      });
      setTimeout(() => {
        if (location.hash) {
          location.hash = "";
          location.href = location.href.slice(0, -1);
        }
      }, 1000);

      setTimeout(() => {
        location.reload();
      }, 1500);
    });
  };

  sendForm(myForm);
  sendForm(myForm2);
});
