<template>
  <div>
    <!-- Left-side navigation bar -->
    <div class="sidebar">
      
          
      <!-- Navigation links -->
      <div class="navigation-links">
        <ul>
          <li><a href="/staffprofile">Profile</a></li>
            <li><a href="/staffhome">Home</a></li>
            <li><a href="/managetickets">Manage Tickets</a></li>
            <li><a href="/staffsettings">Settings</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar">
          <div class="website-name">{{ websiteName }}</div>
          <router-link to="/"><button @click="logoutUser" class="logout-button">Logout</button></router-link>
        </div>
    <!-- Main content area -->
    <div class="main-content">
      <!-- Main user information section -->
      <div class="profile">
        <!-- Navigation bar -->
        

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
              
              <h2>{{ user.username }}</h2>
              <p>Staff</p>
              <p>Email: {{ user.email }}</p>
              
              <p>Name: {{ user.name }}</p>
            </div>
          </div>

          <!-- User stats -->
          <!-- <div class="user-stats">
            <div class="stat">
              <span class="stat-label">Replies:</span>
              <span class="stat-value">{{  }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Upvotes:</span>
              <span class="stat-value">{{  }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Escalations:</span>
              <span class="stat-value">{{  }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Reported:</span>
              <span class="stat-value">{{  }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Warnings:</span>
              <span class="stat-value">{{ }}</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,// Initialize userProfile as null
      websiteName: "Dis.integrate" 
    };
  },
  created() {
    // Get user ID from localStorage
    const userId = localStorage.getItem('id');
    if (!userId) {
      console.error('User ID not found in localStorage');
      alert('Not authorized to view this page')
      return;
    }
    const requestData = {
    user_id: userId
    };
    // Make API call to fetch user profile data
    fetch('http://localhost:5000/api/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      // Set userProfile data received from the backend to the data object
      this.user = data.data;
    })
    .catch(error => {
      console.error('Error fetching user details:', error.message);
      // Handle error, show message to user, etc.
    });
  }
}
</script>



<style scoped>
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
