<template>

  <div
    class="h-screen w-screen flex flex-col-2  flex justify-start p-8"
  >
  <div class="mt-96 ml-24 text-6xl">
    <span id="typedMessage" class="typed">{{ typed }}</span>
    </div>
  </div>
  <div class="absolute top-64 right-20 ">
      <img class="rounded-full h-96" src="/pic.jpg" />
    </div>

</template>

<script>
import Typed from "typed.js";

export default {
  name: "",
  data() {
    return {
      typed: "",
    };
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
