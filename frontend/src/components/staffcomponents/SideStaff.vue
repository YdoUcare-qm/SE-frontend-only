<template>
    <div class="sidebar" style="margin-top: 60px;">
      <!-- User information -->
      <div class="user-info">
        <!-- Small user photo -->
        <div class="small-user-photo">
          <img src="../profile.jpg" alt="User Photo" class="small-rounded-photo">
        </div>
        <!-- Username -->
        <div class="username">
          <p>{{ user.name }}</p>
        </div>
        <!-- Edit Profile button -->
        <button @click="editProfile" class="edit-profile-button">Edit Profile</button>
        <!-- Email
         -->
        <div class="user-email">
          <p>Email: {{ user.email }}</p>
        </div>
      </div>
      <!-- Navigation links -->
      <div class="navigation-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Ticket Management</a></li>
          <li><a href="#">Thread Management</a></li>
          <li><a href="#">Chat with admin</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SideStaff",
    props: {
      user: Object
    },
    methods: {
      editProfile() {
        console.log("Edit Profile clicked");
      },
    }
  };
  </script>
  
  <style scoped>
  /* Left-side navigation bar styles */
  .sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    color: #fff;
    padding-top: 20px;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
  }
  
  .small-user-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .small-rounded-photo {
    width: 100%;
    height: auto;
  }
  
  .username {
    margin-top: 10px;
    font-size: 18px;
  }
  
  .edit-profile-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }
  
  .edit-profile-button:hover {
    background-color: #45a049;
  }
  
  .user-email {
    margin-top: 10px;
    font-size: 14px;
  }
  
  .navigation-links ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation-links ul li {
    padding: 10px 20px;
  }
  
  .navigation-links ul li a {
    text-decoration: none;
    color: #fff;
  }
  
  .navigation-links ul li a:hover {
    text-decoration: underline;
  }
  .new-ticket-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }
  
  .new-ticket-button:hover {
    background-color: #45a049;
  }
  </style>