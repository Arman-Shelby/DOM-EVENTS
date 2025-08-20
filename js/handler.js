// console.log('handler file added');

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);
    pageTitleElement.innerText = "updated page title text";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  const userInfoEl = document.getElementById("user-info");
  userInfoEl.innerText = "User Logged In Successfully";
});
