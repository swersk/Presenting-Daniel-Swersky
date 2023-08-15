<template>
  <div>
    <span id="typedMessage" class="typed">{{ typed }}</span>
    <img src="/pic.jpg" />
    <vue-particles :options="particleOptions"></vue-particles>
  </div>
</template>

<script>
import Typed from "typed.js";


export default {
  data() {
    return {
      typed: "",
      particleOptions: {
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      },
    };
  },
  methods: {
    async particlesInit(engine) {
      await loadSlim(engine);
    },
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
  mounted() {
    this.typed = new Typed("#typedMessage", {
      strings: [
        "I am Daniel Swersky.",
        "I am an educator.",
        "I am a father.",
        "I am a husband.",
        "I am an environmentalist.",
        "I am Daniel Swersky.",
      ],
      typeSpeed: 50,
    });
  },
};
</script>

<style scoped>
</style>
