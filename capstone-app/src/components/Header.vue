<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">MyApp</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <button @click="logout" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('authToken'); // Check if authToken exists
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.$router.push('/login'); // Redirect to login after logout
    },
  },
};

</script>

<style scoped>
.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  font-size: 16px;
  margin-right: 10px;
}

.nav-link:hover {
  color: #28a745;
}
</style>
