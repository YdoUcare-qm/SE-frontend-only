<template>
    <div class="navbar" style="margin-bottom: 60px;">
      <div class="website-name">{{ websiteName }}</div>
      <button @click="logoutUser" class="logout-button">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavStaff",
    data() {
      return {
        websiteName: "Disntegrate"
      };
    },
    methods: {
      logoutUser() {
        console.log("Logout clicked");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles for navigation bar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 40px; /* Adjusted margin to create space between navbar and sidebar */
  }
  
  .website-name {
    font-size: 20px;
  }
  
  .logout-button {
    background-color: #ff6f61;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .logout-button:hover {
    background-color: #e65346;
  }
  </style>