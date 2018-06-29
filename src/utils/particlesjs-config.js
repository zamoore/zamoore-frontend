export default {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 4,
      random: false
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#fff',
      opacity: 0.1,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { resize: true }
  },
  retina_detect: true
};
