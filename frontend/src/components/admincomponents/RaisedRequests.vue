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
        

      </div>
      <!-- Navigation links -->
      <div class="navigation-links">
        <ul>
          <li><router-link to='/dashboard'>Home</router-link>
          </li>
            <li><router-link to ='/SupportStaffManagement'>Support Staff Management</router-link>
</li>
            <li><router-link to='/UserManagement'>User Management</router-link>
</li>
            <li><router-link to ='/Requests'>Requests</router-link></li>
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
      <!-- Heading -->
      <h2>Requests</h2>

      <!-- Request Items -->
      <div class="request-list">
        <!-- Loop through request items and display each as a dialog box -->
        <div v-for="(request, index) in requests" :key="index" class="request-item">
          <div class="dialog-box">
            <!-- Request Name -->
            <p>{{ request.name }}</p>
            <!-- Date -->
            <p class="date">{{ formatDate(request.date) }}</p>
            <!-- Action Buttons (Approve, Reject) -->
            <div class="action-buttons">
              <button @click="approveRequest(request)" class="approve-button">Approve</button>
              <button @click="rejectRequest(request)" class="reject-button">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "RaisedRequests",
    data() {
      return {
        requests: [
          { id: 1, name: "Support staff 45 requests new tag", date: "2024-04-14" },
          { id: 2, name: "FaQ requests", date: "2024-04-15" },
          // Add more request items as needed
        ],user: {
        name: "John Doe",
      },websiteName: "Disntegrate"
      };
    },
    methods: {
      formatDate(date) {
        // Format date (e.g., "YYYY-MM-DD" to "DD/MM/YYYY")
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
      },
      approveRequest(request) {
        // Implement approve request logic
        console.log("Approving request:", request.name);
      },
      rejectRequest(request) {
        // Implement reject request logic
        console.log("Rejecting request:", request.name);
      }
    }
  };
  </script>

  <style scoped>
  /* Request List Styles */
  .request-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .request-item {
    margin-top: 20px;
  }

  /* Dialog Box Styles */
  .dialog-box {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .dialog-box p {
    margin: 0;
  }

  .date {
    font-size: 14px;
    color: #666;
  }

  .action-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .approve-button,
  .reject-button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .approve-button {
    background-color: #4caf50;
    color: #fff;
  }

  .reject-button {
    background-color: #f44336;
    color: #fff;
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

  </style>
