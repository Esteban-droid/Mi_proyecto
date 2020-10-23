<template>
  <div id="login-component">
    <br />
    <form method="POST" action="#" v-on:submit.prevent="onFormSend">
      <input type="email" placeholder="Email" v-model="email" />
      <br />
      <br />
      <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          v-model="password"
      />
      <br />
      <br />
      <button type="submit">Entrar</button>
    </form>

    <br />
    <br />
    <br />
    {{ credenciales.email }}
    {{ credenciales.password }}
  </div>
</template>

<script>
export default {
  name: "login-component",
  data() {
    return {
      credenciales: {
        email: "email@email.cl",
        password: "pass123",
      },
      email: "",
      password: "",
    };
  },
  methods: {
    onFormSend() {
      console.log(this.email, this.password);
      console.log(this.credenciales.email, this.credenciales.password);
      if (this.email == this.credenciales.email) {
        if (this.password == this.credenciales.password) {
          alert("Bienvenido " + this.email);
          setTimeout(() => {
            window.location.href = '/principal'
          }, 3000);
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("correo no valido");
      }
    },
  },
};
</script>

<style>
</style>