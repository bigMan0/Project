<template>
    <div class="signup d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4 w-100" style="max-width: 400px;">
        <h2 class="text-center mb-4">Sign Up</h2>
        
        <form @submit.prevent="handleSignup">
          <!-- Name -->
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" type="text" id="name" class="form-control" required />
          </div>
          
          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" id="email" class="form-control" required />
          </div>
          
          <!-- Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" required />
          </div>
          
          <!-- Role -->
          <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <select v-model="role" id="role" class="form-select" required>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          
          <!-- Submit Button -->
          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-success w-100">Sign Up</button>
          </div>
        </form>
  
        <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
  
        <!-- Success message -->
        <div v-if="signupSuccess" class="alert alert-success mt-4 text-center">
          Account created successfully! You will be redirected to login.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        role: 'student', // default to student
        signupSuccess: false, // Flag to show success message
      };
    },
    methods: {
      async handleSignup() {
        try {
          const response = await axios.post('http://localhost:5000/users', {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
          });
  
          // If signup is successful, show success message and store credentials
          if (response.status === 201) {
            this.signupSuccess = true;
  
            // Store email and password in localStorage for auto-login
            localStorage.setItem('autoLoginEmail', this.email);
            localStorage.setItem('autoLoginPassword', this.password);
  
            // Redirect to login page after 2 seconds
            setTimeout(() => {
              this.$router.push('/login'); // Redirect to login page
            }, 2000);
          } else {
            console.error('Signup failed:', response.data.error);
          }
        } catch (error) {
          console.error('Signup failed:', error.response ? error.response.data.error : error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup {
    min-height: 100vh;
    background-color: #f7f7f7;
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  h2 {
    color: #28a745;
  }
  
  button {
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  form {
    padding: 20px;
  }
  
  .alert {
    margin-top: 20px;
  }
  </style>
  