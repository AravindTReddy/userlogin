<!-- src/views/UserHome.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p>Welcome, user!</p>
    <button @click="signout">Sign Out</button>
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  methods: {
    signout() {
      this.$router.push('/');
    }
  }
};
</script>
