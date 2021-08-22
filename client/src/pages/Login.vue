<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onLogin">
      <div class="form-group">
        <input
          class="form-group__input"
          type="text"
          name="username"
          id="username"
          placeholder=" "
          v-model="username"
        />
        <label for="username" class="form-group__label">Username</label>
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
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onLogin() {
      if (
        process.env.VUE_APP_USERNAME === this.username &&
        process.env.VUE_APP_PASSWORD === this.password
      ) {
        const localStorage = window.localStorage;
        localStorage.setItem("userAuthenticated", true);
        this.$router.push({ name: "Admin" });
      } else {
        console.log("error");
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
