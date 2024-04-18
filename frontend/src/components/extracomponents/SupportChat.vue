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
        <!-- Chat interface -->
        <div class="chat-interface">
          <!-- Chat header -->
          <div class="chat-header">
            <h3>Support Chat</h3>
          </div>

          <!-- Chat messages -->
          <div class="chat-messages">
            <!-- Chat messages will be displayed here -->
            <div class="message">Admin: Hello, how can I help you?</div>
            <div class="message sent">You: I'm having trouble with my account.</div>
            <!-- Sample chat messages -->
          </div>

          <!-- Chat input -->
          <div class="chat-input">
            <textarea placeholder="Type your message..."></textarea>
            <button @click="sendMessage">Send</button>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportChat",
  data() {
    return {
      user: {
        name: "John Doe",
        // Hardcoded user photo path
        photo: "../user-photo.jpg", // Example URL for user photo
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus elit eu convallis eleifend.",
        email: "john.doe@example.com",
        tags: ["Tag1", "Tag2", "Tag3"] // Example tags
      },
      SupportStats: {
        responses: 20,
        likes: 15,
        dislikes: 5
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
    },
    sendMessage() {
      // Send message logic here
      console.log("Message sent");
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

