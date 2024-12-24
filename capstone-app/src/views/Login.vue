<template>
    <div id="login" class="d-flex justify-content-center align-items-center">
      <div class="card p-4 w-100" style="max-width: 400px;">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <!--Email-->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="email" class="form-control" required />
          </div>
          
          <!--Password-->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="password-container position-relative">
              <input
                :type="passwordVisible ? 'text' : 'password'"
                id="password"
                v-model="password"
                class="form-control"
                required
              />
              <button type="button" @click="togglePasswordVisibility" class="btn btn-link position-absolute end-0 top-50 translate-middle-y">
                <span v-if="passwordVisible">👁️</span>
                <span v-else>👁️</span>
              </button>
            </div>
          </div>
          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-success w-100 login-btn">Login</button>
          </div>
        </form>
        <p class="text-center">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
        <p v-if="error" class="text-danger text-center mt-2">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
        passwordVisible: false, // To toggle visibility
      };
    },
    mounted() {
    // Auto-fill email and password from localStorage if available
    const savedEmail = localStorage.getItem('autoLoginEmail');
    const savedPassword = localStorage.getItem('autoLoginPassword');
    if (savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
    }
  },
  methods: {
  async handleLogin() {
    try {
      const response = await axios.post('http://localhost:5000/users/login', {
        email: this.email,
        password: this.password,
      });

      // Log token and user for debugging
      console.log('Login successful, token:', response.data.token);
      console.log('User data:', response.data.user);

      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to dashboard
      this.$router.push('/dashboard');
    } catch (error) {
      this.error = error.response?.data?.error || 'Login failed. Please try again.';
    }
  },


      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  #login {
    min-height: 100vh;
  }
  
  .password-container {
    position: relative;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.7;
  }
  
  button:focus {
    outline: none;
  }
  
  button:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  /* Styles specifically for the login button */
  .login-btn {
    background-color: #28a745; /* Bootstrap success green */
    color: white;
    font-weight: bold;
  }
  
  .login-btn:hover {
    background-color: #218838; /* Darker green on hover */
  }
  </style>
  