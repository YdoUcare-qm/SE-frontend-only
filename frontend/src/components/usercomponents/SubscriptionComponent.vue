<template>
    <!-- Left-side navigation bar -->
    <div class="sidebar">
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
        <!-- Email -->
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
          <li><a href="#">Chat With Admins</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>

    <!-- Main content area -->
    <div class="main-content">
      <!-- Main user information section -->
      <div class="profile">
        <!-- Navigation bar -->
        <div class="navbar">
          <div class="website-name">{{ websiteName }}</div>
          <button @click="logoutUser" class="logout-button">Logout</button>
        </div>

        </div>
      </div>

    <div>
      <div class="main-content">
        <div class="subscriptions">
          <h2>Your Subscriptions</h2>
          <div class="subscription-box">
            <button class="box-top" @click="dummyFunctionality">Dummy Functionality</button>
            <div class="box-bottom">SPG-1</div>
          </div>
          <div class="subscription-box">
            <button class="box-top" @click="dummyFunctionality">Dummy Functionality</button>
            <div class="box-bottom">SPG-1 Operational</div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'SubscriptionComponent',
    components: {
    },
    data() {
      return {
        user: {
          name: "John Doe",
          // Hardcoded user photo path
          photo: "../user-photo.jpg", // Example URL for user photo
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus elit eu convallis eleifend.",
          email: "john.doe@example.com"
        }
      };
    },
    methods: {
      dummyFunctionality() {
        console.log('Dummy functionality clicked');
      }
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

/* Main content area styles */
.main-content {
  margin-left: 250px; /* Adjusted to match the width of the sidebar */
  padding: 20px;
}

/* Styles for navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
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

  .main-content {
    margin-left: 250px; /* Adjusted to match the width of the sidebar */
    padding: 20px;
    margin-top: 60px; /* Adjusted to create space below the navbar */
    margin-bottom: 60px; /* Adjusted to create space above the subscription content */
  }

  .subscriptions {
    margin: 20px;
  }

  .subscription-box {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
  }

  .box-top {
    cursor: pointer;
    width: 100%;
  }

  .box-bottom {
    text-align: center;
  }
  </style>