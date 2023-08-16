<template>


  <div class="w-full h-screen grid grid-rows-2 md:grid-cols-[2fr_1fr]">
    <div class="md:mt-96 md:ml-24 text-7xl z-20 ">
      <span id="typedMessage" class="typed">{{ typed }}</span>
    </div>
    <div class="md:absolute md:top-64 md:right-20 z-20">
      <img class="rounded-full h-96 shadow-2xl" src="/pic.jpg" alt="Image of Daniel Swersky"/>
    </div>
    <div class="h-full w-full bg-gradient-to-b from-slate-800 to-transparent fixed z-10 top-0 left-0"></div>
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
                            speed: 3,
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
    <div class="fixed bottom-5 left-1/2 transform -translate-x-50% z-50">
        <a href="https://www.linkedin.com/in/danielswersky/" target="_blank" rel="noopener noreferrer" aria-label="Daniel Swersky's LinkedIn">
            <img src="/LI.png" alt="LinkedIn to Daniel Swersky's profile" class="w-14"/>
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
      typed: "",
    };
  },
  methods: {
    async particlesInit(engine) {
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
        "Hi, I am an eco-activist.",
        "Hi, I am leadership advisor.",
        "Hi, I am a systems thinker.",
        "Hi, I am a project manager.",
        "Hi, I am a proud #girldad.",
        "Hi, I am a brother, son and husband.",
        "Hi, I am Daniel Swersky.",
      ],
      typeSpeed: 50,
    });

  },
};
</script>
