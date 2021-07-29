<template>
  <div class="login">
    <form class="login__form" @submit="onLogin">
      <div class="login__form-group">
        <input
          class="login__input"
          type="text"
          name="username"
          id="username"
          placeholder=" "
        />
        <label for="username" class="login__label">Username</label>
      </div>
      <div class="login__form-group">
        <input
          class="login__input"
          type="password"
          name="password"
          id="password"
          placeholder=" "
        />
        <label for="password" class="login__label">Password</label>
      </div>
      <input type="submit" value="Login" class="login__btn" />
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
    &-group {
      display: flex;
      flex-direction: column;
      position: relative;

      &:first-child {
        margin-bottom: 2.5rem;
      }
    }
  }

  &__label {
    font-size: 0.8rem;
    position: absolute;
    top: -0.25rem;
    transition: top 0.3s;
    color: $white;
  }

  &__input {
    background-color: $pink;
    border: none;
    border-bottom: 3px solid $green;
    outline: none;
    color: $white;
    font-size: 1rem;

    &:focus,
    &:active,
    &:not(:placeholder-shown) {
      + .login__label {
        top: -1rem;
      }
    }
  }

  &__btn {
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.75rem 1.75rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 70%;
    margin: 1.75rem auto 0 auto;
    background-color: $pink;
    color: $white;
    border: 3px solid $green;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 0.5rem;

    &:hover {
      background-color: $green;
    }
  }
}
</style>
