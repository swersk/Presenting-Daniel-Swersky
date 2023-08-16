<template>
  <div class="particle-container h-screen w-screen flex flex-col-2 flex justify-start p-8">
    <div class="mt-96 ml-24 text-6xl">
      <span id="typedMessage" class="typed">{{ typed }}</span>
    </div>
    <div class="absolute top-64 right-20">
      <img class="rounded-full h-96" src="/pic.jpg" />
    </div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#F25278'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 3,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: true
            }
          }
        },
        detectRetina: true
      }"
    />
  </div>
  <div class="content-on-top">
    <span>TESTTT!!!!</span>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "Intro",
  data() {
    return {
      typed: "",
    };
  },
  methods: {
    particlesInit(particles) {
      console.log('particles init', particles);
    },
    particlesLoaded(particles) {
      console.log('particles loaded', particles);
    }
  },
  mounted() {
    this.typed = new Typed("#typedMessage", {
      strings: [
        "Hi, I am Daniel Swersky.",
        "Hi, I am an educator.",
        "Hi, I am a father.",
        "Hi, I am a husband.",
        "Hi, I am an eco-activist.",
        "Hi, I am Daniel Swersky.",
      ],
      typeSpeed: 50,
    });
  },
};
</script>
