<template>
    <!-- Left-side navigation bar -->
    <div class="sidebar">
     
     
      <!-- Navigation links -->
      <div class="navigation-links">
        <ul>
            <li><a href="/userprofile">Profile</a></li>
            <li><a href="/userhome">Home</a></li>
            <li><a href="/mytickets">My Tickets</a></li>
            <li><a href="/newticket">New Ticket</a></li>
            <li><a href="/subscriptions">Subscriptions</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/usersettings">Settings</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar">
          <div class="website-name">{{ websiteName }}</div>
          <button @click="logoutUser" class="logout-button">Logout</button>
        </div>
    <!-- Main content area -->
    <div class="main-content">
      <!-- Main user information section -->
      <div class="profile">
        <!-- Navigation bar -->
        
      </div>
  
      <!-- Settings container -->
      <div class="settings-container">
        <div class="settings-header">Settings/Notifications</div>
        <div class="toggle-buttons">
          <div class="toggle-button">
            <input type="checkbox" id="notification" v-model="notification">
            <label for="notification">Notification</label>
          </div>
          <div class="toggle-button">
            <input type="checkbox" id="gmail" v-model="gmail">
            <label for="gmail">Gmail</label>
          </div>
          <div class="toggle-button">
            <input type="checkbox" id="gchat" v-model="gchat">
            <label for="gchat">GChat</label>
          </div>
          <div class="toggle-button">
            <input type="checkbox" id="discourse" v-model="discourse">
            <label for="discourse">Discourse</label>
          </div>
        </div>
        <div class="tags-header">TAGS</div>
        <div class="search-container">
          <input type="text" v-model="search" placeholder="Search...">
        </div>
        <div class="edit-preferences-button">Edit Preferences</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SettingsComponent",
    data() {
      return {
        websiteName: "Dis.integrate",
        
      
      };
    },
    methods: {
      logoutUser() {
        console.log("Logout clicked");
      },
      editProfile() {
        console.log("Edit Profile clicked");
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    position: absolute;
    top: 60px; /* Adjusted to match the height of the navbar */
    left: 250px; /* Adjusted to match the width of the sidebar */
    right: 0;
    bottom: 0;
    border: 1px solid #ccc;
    overflow: auto; /* Added overflow to enable scrolling if content exceeds container */
  }
  
  .settings-container {
    padding: 20px;
  }
  
  .settings-header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .toggle-buttons {
    display: flex;
    flex-direction: column;
  }
  
  .toggle-buttons label {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  .tags-header {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .search-container {
    margin-top: 10px;
  }
  
  .search-container input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .dummy-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  
  .dummy-button:hover {
    background-color: #45a049;
  }
  /* Left-side navigation bar styles */
  .sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 75px;
  left: 0;
  background-color: #333;
  color: #fff;
  padding-top: 20px;
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


/* Styles for navigation bar */
.navbar {
  position: fixed;
  top:0;
  right:0;
  left:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.website-name {
  font-size: 50px;
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
  margin-left: 250px;
  margin-top: 85px;
  /* Adjusted to match the width of the sidebar */
  padding: 20px;
  display: flex; /* Ensure left and right sides are displayed side by side */
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
  