
<script setup>
  import {ref, reactive, watch } from "vue";

  const signUpData = reactive({
  email: "",
  username: "",
  password: "",
  });

  const info = reactive({
  isMessage: false,
  isError: false,
  message: "",
  });

async function signUp(){
try {
const requestOptions = {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({
  email: signUpData.email,
  username: signUpData.username,
  password: signUpData.password
}),
};

const response = await fetch(`${import.meta.env.VITE_API_HOST}:${
import.meta.env.VITE_API_PORT}/api/sign-up`, 
requestOptions
);

if (response.ok) {
info.isMessage = true;
info.isError = false;
info.message = "User created, You may now Sign In"
} else {
info.isMessage = true;
info.isError = true;
info.message = "Try different username/email";
}
return await response.json();

} catch(error) {
  info.isMessage = true;
  info.isError = true;
  info.message = "Failed to Sign Up"
}
}

</script>

<template>
  <div class="sign-up-container">
  <div id="sign-up">
    <h2>Sign Up</h2>
    <input placeholder="E-mail" id="input" v-model="signUpData.email" />
    <input placeholder="Username" id="input" v-model="signUpData.username" />
    <input placeholder="Password" id="input" v-model="signUpData.password" />
    <button @click="signUp()">Sign Up</button>
  </div>
  </div>

</template>
