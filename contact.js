const scriptURL =
  "https://script.google.com/macros/s/AKfycbyad00DgYNCVwwBKhBcIgB5BZbOdktol_9_WviksSDtR2zTRfcC6M4BskNv3XR3uzid/exec";
const form = document.forms["contact-form"];
const submitBtn = document.getElementById("submitBtn");
const submitText = submitBtn.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitText.textContent = "Loading Message...";
  submitBtn.classList.add("opacity-70", "cursor-not-allowed");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("message has been sent");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      alert("message has not been sent");
      console.error("Error!", error.message);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitText.textContent = "Kirim Pesan";
      submitBtn.classList.remove("opacity-70", "cursor-not-allowed");
    });
});
