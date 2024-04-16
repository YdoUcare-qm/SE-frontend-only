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
          <li><a href="#">Your Tickets</a></li>
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
          <router-link to="/"><button @click="logoutUser" class="logout-button">Logout</button></router-link>
        </div>

        <!-- Main user information section -->
        <div class="main-user-info">
          <!-- User details including photo, name, and email -->
          <div class="user-details">
            <!-- Large user photo -->
            <div class="user-photo">
              <!-- Hardcoded user photo -->
              <img src="../profile.jpg" alt="User Photo" class="rounded-photo">
            </div>
            <!-- Name and email -->
            <div class="name-email">
              <h2>{{ user.name }}</h2>
              <p>Email: {{ user.email }}</p>
            </div>
          </div>

          <!-- User stats -->
          <div class="user-stats">
            <div class="stat">
              <span class="stat-label">Replies:</span>
              <span class="stat-value">{{ userStats.replies }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Upvotes:</span>
              <span class="stat-value">{{ userStats.upvotes }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Escalations:</span>
              <span class="stat-value">{{ userStats.escalations }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Reported:</span>
              <span class="stat-value">{{ userStats.reported }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Warnings:</span>
              <span class="stat-value">{{ userStats.warnings }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  data() {
    return {
      user: {
        name: "John Doe",
        // Hardcoded user photo path
        photo: "../user-photo.jpg", // Example URL for user photo
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus elit eu convallis eleifend.",
        email: "john.doe@example.com"
      },
      userStats: {
        replies: 20,
        upvotes: 15,
        escalations: 5,
        reported: 3,
        warnings: 2
      },
      websiteName: "Disntegrate" // Website name to be displayed in the navbar
    };
  },
  methods: {
    logoutUser() {
      // Your logout logic here
      console.log("Logout clicked");
    },
    editProfile() {
      // Your edit profile logic here
      console.log("Edit Profile clicked");
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

/* Main user info layout */
.main-user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-details {
  display: flex;
  align-items: center;
}

.user-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.rounded-photo {
  width: 100%;
  height: auto;
}

.name-email {
  text-align: center;
}

.name-email h2 {
  margin-top: 0;
}

.name-email p {
  margin-bottom: 10px;
}

/* User stats layout */
.user-stats {
  margin-top: 20px;
}

.stat {
  margin-bottom: 10px;
}

.stat-label {
  font-weight: bold;
}

.stat-value {
  margin-left: 10px;
}
</style>
