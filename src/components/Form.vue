<script setup>
import { ref } from 'vue'

let errorMessage = ref('')
</script>

<template>
  <div class="form-wrapper">
    <div>
      <h1>Enter Details</h1>
      <p>
        You'll be able to access your estimate, instantly, on the next screen
        but we do ask that you provide us with some contacts details.
      </p>

      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>

    <form name="enter-details" method="POST" data-netlify="true">
      <p>
        <label
          >Your Name:<br />
          <input type="text" name="name"
        /></label>
      </p>

      <p>
        <label
          >Phone Number:<br />
          <input type="text" name="name"
        /></label>
      </p>
      <p>
        <label
          >Your Email:<br />
          <input type="email" name="email"
        /></label>
      </p>

      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/main.scss' as a;

.form-wrapper {
  display: flex;
  flex-direction: column;

  & > * {
    flex-basis: 100%;
  }

  @include a.mq('medium') {
    flex-direction: row;
    gap: a.rem(50);
  }

  p {
    font-size: a.rem(22);
  }

  form {
    background-color: #e6e6e6;
    padding: 30px;
    border-radius: 30px;

    input[type='email'],
    input[type='text'] {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }

    p {
      font-size: a.rem(16);
    }
  }
}
</style>
