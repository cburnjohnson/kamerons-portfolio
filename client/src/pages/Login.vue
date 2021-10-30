<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onLogin">
      <div class="form-group">
        <input
          class="form-group__input"
          type="text"
          name="email"
          id="email"
          placeholder=" "
          v-model="email"
        />
        <label for="email" class="form-group__label">email</label>
      </div>
      <div class="form-group">
        <input
          class="form-group__input"
          type="password"
          name="password"
          id="password"
          placeholder=" "
          v-model="password"
        />
        <label for="password" class="form-group__label">Password</label>
      </div>
      <input type="submit" value="Login" class="form-group__btn" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async onLogin() {
      try {
        const data = await axios.post("/api/auth", {
          email: this.email,
          password: this.password
        });
        const localStorage = window.localStorage;
        localStorage.setItem("userToken", data.data.token);
        this.$router.push({ name: "Admin" });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 6rem;
  background-color: $pink;
  width: 100%;
  padding: 2.75rem 2rem;

  @media (min-width: 400px) {
    width: 400px;
    margin: 6rem auto;
    border-radius: 1rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
