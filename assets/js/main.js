const toggleOpen = document.getElementById("toggleOpen");
const toggleClose = document.getElementById("toggleClose");
const sidebar = document.querySelectorAll(".sidebar");
const navLink = document.querySelectorAll(".nav-link");

toggleOpen.addEventListener("click", () => {
  sidebar.forEach((e) => {
    e.classList.add("open");
  });
});

toggleClose.addEventListener("click", () => {
  sidebar.forEach((e) => {
    e.classList.remove("open");
  });
});

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    removeNavActive();
    e.classList.add("active");
  });
});

function removeNavActive() {
  navLink.forEach((e) => {
    e.classList.remove("active");
  });
}

// explore section

document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("exploreSection").scrollIntoView({
    behavior: "smooth",
  });
});

// waveform
const waveform = document.getElementById("waveform");
const heights = [
  8, 16, 12, 20, 28, 24, 32, 28, 20, 24, 16, 12, 20, 24, 28, 32, 24, 20, 16, 12,
  20, 16, 24, 20, 12, 16, 20, 24, 16, 12,
];

heights.forEach((height, index) => {
  const bar = document.createElement("div");
  bar.className = "audio-card__wave-bar";
  bar.style.height = `${height}px`;
  if (index < 12) {
    bar.classList.add("audio-card__wave-bar--active");
  }
  waveform.appendChild(bar);
});
