particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
