const app = () => {
  const loaderContainer = document.getElementById("loader-container");

  setTimeout(() => {
    loaderContainer.classList.add("quite");
  }, 4000);
};

document.addEventListener("DOMContentLoaded", app);
