<script setup>

  import {onMounted, ref, reactive} from "vue";
  import checkLogin from "@/utils/checkLogin";
  import SignIn from "./SignIn.vue";


  const isSignedIn = ref(false);


onMounted( async () => {
isSignedIn.value  = await checkLogin()
})

</script>

<template>

  <div v-if="isSignedIn">
  Signed In
  </div>
  <div v-else>
    <SignIn/>
  </div>

</template>
