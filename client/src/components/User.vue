<script setup>
import { onMounted, ref, reactive } from "vue";
import checkLogin from "@/utils/checkLogin";
import { onClickOutside } from "@vueuse/core";

const isSignedIn = ref(false);
const isSigningIn = ref(false);
const clickTarget = ref(null);

const signInData = reactive({
  username: "",
  password: "",
});

const info = reactive({
  isMessage: false,
  isError: false,
  message: "",
});

function showSignIn() {
  isSigningIn.value = true;
}

onClickOutside(clickTarget, (event) => (isSigningIn.value = false));

async function signIn() {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInData.username,
        password: signInData.password,
      }),
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_HOST}:${
        import.meta.env.VITE_API_PORT
      }/api/sign-in`,
      requestOptions
    );

    if (response.ok) {
      document.cookie =
        "token=" + response.headers.get("Authorization") + ";path=/";
      isSignedIn.value = true;
    }
  } catch (error) {
    info.isMessage = true;
    info.isError = true;
    info.message = "Failed to Sign In";

    console.error(error);
  }
}

function logOut() {
  document.cookie = "token=" + "none";
  isSignedIn.value = false;
  isSigningIn.value = false;
}

onMounted(async () => {
  isSignedIn.value = await checkLogin();
});
</script>

<template>
  <div v-if="isSignedIn">
    Signed In
    <li>
      <router-link to="/my-account">
        <a>My Profile</a>
      </router-link>
      <a @click="logOut()">Log Out</a>
    </li>
  </div>
  <div v-else>
    <button @click.stop="showSignIn()" v-if="!isSigningIn">Sign In</button>
    <div id="sign-in" ref="clickTarget" v-if="isSigningIn">
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
