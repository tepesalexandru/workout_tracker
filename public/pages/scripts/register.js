/// DOM Registration

const __r_email = document.querySelector("#r-email");
const __r_username = document.querySelector("#r-username");
const __r_password = document.querySelector("#r-password");
const __r_submit = document.querySelector("#r-submit");

console.log(__r_email);

__r_submit.addEventListener("click", e => {
  //e.preventDefault();
  console.log(__r_email.value, __r_username.value, __r_password.value);
});
