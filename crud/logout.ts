const logoutBtn = document.querySelector(".logout-btn") as HTMLButtonElement;

logoutBtn.addEventListener("click", () => {
    window.location.replace("login.html");
});
