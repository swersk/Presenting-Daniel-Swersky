<template>
  <div class="h-screen w-screen flex flex-col-2 flex justify-start p-8">
    <div class="mt-96 ml-24 text-6xl">
      <span id="typedMessage" class="typed">{{ typed }}</span>
    </div>
    <div class="absolute top-64 right-20">
      <img class="rounded-full h-96" src="/pic.jpg" />
    </div>
  </div>
  <div class="border-4 border-black">
      <Particles
        id="tsparticles-full"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
                    background: {
                        color: {
                            value: '#0d47a1'
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
                            outMode: 'bounce',
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
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
      />
    </div>
</template>

<script>
import Typed from "typed.js";
import { loadSlim } from "tsparticles-slim";


export default {
  name: "Intro",
  data() {
    return {
      typed: "",
    };
  },
  methods: {
    async particlesInit(engine) {
      console.log("particles init: ", engine);
      await loadSlim(engine);
    },
    particlesLoaded(particles) {
      console.log("particles loaded", particles);
    },
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
