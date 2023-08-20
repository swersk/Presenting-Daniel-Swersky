<template>
  <div class="w-full h-screen grid grid-rows-[1fr_2fr] md:grid-cols-[2fr_1fr]">
    <div
      class="flex justify-self-center w-52 h-52 mt-7 md:w-auto md:h-auto md:absolute md:top-64 md:right-20 z-20 "
    >
      <img
        class="rounded-full w-full h-full object-cover shadow-2xl md:h-96"
        src="/pic.jpg"
        alt="Image of Daniel Swersky"
      />
    </div>
    <div
      class="flex justify-center text-6xl md:block md:mt-96 md:ml-24 md:text-7xl  z-20 "
    >
      <div class="w-[90%] overflow-hidden">
        <span id="typedMessage" class="typed break-words">{{ typed }}</span>
      </div>
    </div>
    <div
      class="h-full w-full bg-gradient-to-b from-slate-800 to-transparent fixed z-10 top-0 left-0"
    ></div>
    <div>
      <Particles
        id="tsparticles-full"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
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
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }"
      />
    </div>
    <div
      class="flex justify-center p-1 fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <a
        href="https://www.linkedin.com/in/danielswersky/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel Swersky's LinkedIn"
      >
        <img
          src="/LI.png"
          alt="LinkedIn to Daniel Swersky's profile"
          class="w-14"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import { loadSlim } from "tsparticles-slim";

export default {
  name: "Intro",
  data() {
    return {
      typed: "Loading...",
    };
  },
  methods: {
    async particlesInit(engine) {
      await loadSlim(engine);
    },
  },
  mounted() {
    this.typed = new Typed("#typedMessage", {
      strings: [
        "Hi, I am Daniel Swersky.",
        "Hi, I am an educator.",
        "Hi, I am an eco-activist.",
        "Hi, I am a leadership advisor.",
        "Hi, I am a systems thinker.",
        "Hi, I am a project manager.",
        "Hi, I am a proud #girldad.",
        "Hi, I am a husband, son and brother.",
      ],
      typeSpeed: 50,
      loop: true,
    });
  },
};
</script>