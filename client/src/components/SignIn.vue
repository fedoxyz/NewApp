<script setup>
  import {ref, reactive, watch } from "vue";

  const signInData = reactive({
  username: "",
  password: "",
  });

  const info = reactive({
  isMessage: false,
  isError: false,
  message: "",
  });

async function signIn(){
try {
const requestOptions = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({email: signInData.email, password: signInData.password }),
};

const response = await fetch(
`${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/user`,
requestOptions);

const jsonResponse = await response.json();

if (response.ok){
info.isMessage = true;
info.isError = false;
info.message = "Successfully Signed In"

document.cookie = "token=" + response.headers.get("Authorization") + ";path=/";
}

} catch (error) {
info.isMessage = true;
info.isError = true;
info.message = "Failed to Sign In"

console.error(error);
}

}

</script>

<template>
  <div class="sign-in-container">
  <div id="sign-in">
    <h2>Sign In</h2>
    <input placeholder="Username" id="input" v-model="signInData.username" />
    <input placeholder="Password" id="input" v-model="signInData.password" />
    <button @click="signIn()">Sign In</button>
    <router-link to="/sign-up">
    <button>Sign Up</button>
    </router-link>
  </div>
  </div>

</template>
