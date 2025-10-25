function toggleAbout() {
  const shortVersion = document.getElementById("about-short");
  const fullVersion = document.getElementById("about-full");

  if (shortVersion.classList.contains("hidden")) {
    shortVersion.classList.remove("hidden");
    fullVersion.classList.add("hidden");
  } else {
    shortVersion.classList.add("hidden");
    fullVersion.classList.remove("hidden");
  }
}
