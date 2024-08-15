document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    if (event.target !== dropdown) {
      const dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.style.display = "none";
    }
  });
  