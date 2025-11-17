// responsive nav and sidebar
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

// scroll ToView

document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("scrollToView").scrollIntoView({
    behavior: "smooth",
  });
});


// audio card clone and insert to  dom 12 times

const wrapper = document.querySelector('.card-wrapper');
const originalCard = document.querySelector('.audio-card');

for (let i = 0; i < 11; i++) {
  const clone = originalCard.cloneNode(true);
  wrapper.appendChild(clone);
}


// waveform
const waveforms = document.querySelectorAll(".waveform");

const heights = [
  8, 16, 12, 20, 28, 24, 32, 28, 20, 24, 16, 12,
  20, 24, 28, 32, 24, 20, 16, 12, 20, 16, 24,
  20, 12, 16, 20, 24, 16, 12,
];

// Loop through each waveform container
waveforms.forEach((waveform) => {
  heights.forEach((height, index) => {
    const bar = document.createElement("div");

    bar.className = "audio-card__wave-bar audio-card__wave-bar--w";
    bar.style.height = `${height}px`;

    if (index < 12) {
      bar.classList.add("audio-card__wave-bar--active");
    }

    waveform.appendChild(bar);
  });
});

// 
