

  const btnOpen = document.getElementById("btnOpen");
  const closeBtn = document.getElementById("closeBtn");
  const menuOverlay = document.getElementById("menuOverlay");

  btnOpen.addEventListener("click", () => {
    menuOverlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });

  // Close when clicking outside the menu
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("active");
    }
  });
