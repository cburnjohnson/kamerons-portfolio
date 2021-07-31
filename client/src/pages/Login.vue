<template>
  <div class="login">
    <form class="login__form" @submit="onLogin">
      <div class="form-group">
        <input
          class="form-group__input"
          type="text"
          name="username"
          id="username"
          placeholder=" "
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
        />
        <label for="password" class="form-group__label">Password</label>
      </div>
      <input type="submit" value="Login" class="form-group__btn" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin(e) {
      e.preventDefault();
      console.log("yo");
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
