<template>
  <div>
  <span id="typedMessage" class="typed">{{ typed }}</span>
  <img src="/pic.jpg">
</div>
</template>

<script>
import Typed from 'typed.js';


export default {
 name: '',
 data() {
    return {
       typed: ''
    };
 },
 mounted() {
    this.typed = new Typed('#typedMessage', {
       strings: ['I am Daniel Swersky.', 'I am an educator.', 'I am a father.', 'I am a husband.', 'I am an environmentalist.', 'I am Daniel Swersky.'],
       typeSpeed: 50,
    });
 }
}
</script>