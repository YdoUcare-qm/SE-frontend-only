<template>
      <div>
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

      <div class="notification-container">
        <div class="search-box">
          <input type="text" placeholder="Search here" class="search-input" v-model="searchText">
          <button class="filter-button">Filter</button>
        </div>
        <div class="notification-text">Frequently Asked Questions</div>

      <!-- Loop through rows -->
      <div class="notification-row" v-for="(row, index) in rows" :key="index">
        <!-- Loop through columns -->
        <button class="notification-button" v-for="(column, colIndex) in row" :key="colIndex">
          <button class="inner-button" v-text="column"></button>
        </button>
      </div>
      </div>
    </div>

  </template>

  <script>

  export default {
    name: "ThreadMangementComponent",
    components: {
    },
    data() {
      return {
        user: {
          name: "John Doe",
          // Hardcoded user photo path
          photo: "./profile.jpg", // Example URL for user photo
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus elit eu convallis eleifend.",
          email: "john.doe@example.com"
        },
        searchText: '',
        rows: [
        ["How to add calendar schedule?", "→"],
        ["How to report a user?", "→"],
        ["How to login to seek portal?", "→"],
        ["How to turn on camera?", "→"],
        ["How to drop a subject?", "→"]
      ]
      };
    }
  };
  </script>

  <style scoped>
  .notification-container {
    padding: 20px;
    background-color: #f0f0f0;
    margin-left: 250px; /* Adjusted to match the width of the sidebar */
  }

  .search-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .search-input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  .filter-button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }

  .notification-text {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .notification-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.notification-button .inner-button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.notification-button .inner-button.text {
  flex: 1;
}

.notification-button .inner-button.arrow {
  margin: 0 10px;
}

.notification-button .inner-button.date {
  font-size: 12px;
}
.notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #ddd;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.header-column {
    flex: 1;
    text-align: center;
}

.notification-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.notification-row .notification-button {
    width: 100%;
}
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

/* Chat interface styles */
.chat-interface {
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

.chat-header {
  text-align: center;
  margin-bottom: 20px;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.message {
  margin-bottom: 10px;
}

.message.sent {
  text-align: right;
}

.chat-input {
  display: flex;
}

.chat-input textarea {
  flex: 1;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.chat-input button {
  padding: 10px 20px;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.chat-input button:hover {
  background-color: #0056b3;
}
  </style>