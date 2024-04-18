<template>
  <div>
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
    <!-- Navigation bar -->
    <div class="navbar">
          <div class="website-name">{{ websiteName }}</div>
          <router-link to="/"><button @click="logoutUser" class="logout-button">Logout</button></router-link>
          </div>
    <!-- Main content area -->
    <div class="main-content">
      <!-- Main user information section -->
      
        
          <div class="topic-posts">
  <h1>Your Tickets</h1>
  <ul class="tickets-list">
      <li v-for="ticket in tickets" :key="ticket.id" class="ticket-item">
        <router-link :to="`/ticket/${ticket.id}`">
        <div class="ticket-title">{{ ticket.title }}</div>
        <div class="ticket-description">{{ ticket.description }}</div>
        <div class="ticket-category">Category: {{ ticket.category }}</div>
        <div class="ticket-tags">Category: {{ ticket.tags }}</div>
        <div class="ticket-date">Date: {{ formatDate(ticket.date) }}</div>
        </router-link>
      </li>
    </ul>
</div>
  
      </div>   
    </div>
  
</template>

<script>
export default {
  name: 'MyTickets',

  data() {
    return {
      websiteName:'Dis.integrate',
      tickets: []
    };
  },

  created() {
    // Fetch user tickets
    this.fetchTickets();
  },

  methods: {
    async fetchTickets() {
  try {
    // Fetch user ID from localStorage
    const userId = localStorage.getItem('id');
    
    // Fetch user tickets from the API
    const response = await fetch('http://localhost:5000/api/user/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: userId })
    });
    
    const data = await response.json();
    this.tickets = data.data;
    console.log(data)
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
},
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
/* Left-side navigation bar styles */


.my-tickets {
  padding: 20px;
}

.tickets-list {
  list-style-type: none;
  padding: 0;
}

.ticket-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ticket-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.ticket-description {
  margin-bottom: 5px;
}

.ticket-status {
  font-style: italic;
}

.ticket-date {
  font-style: italic;
}



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

</style>
