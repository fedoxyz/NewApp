<script setup>
try {
const requestOptions = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({email: user.email, password: user.password }),
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
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
