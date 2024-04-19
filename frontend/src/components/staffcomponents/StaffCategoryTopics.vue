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
        
          <!-- Navigation bar -->
          
          <div class="staff-category-topics">
            <h1>Latest Topics in this Category</h1>
            <ul class="topics-list">
            <router-link v-for="topic in topics" :key="topic.id" :to="`/stafftopicposts/${topic.id}`" class="topic-link">
            <li class="topic-item">
            <div class="topic-title">{{ topic.title }}</div>
            <div class="topic-description">{{ topic.description }}</div>
        </li>
      </router-link>
    </ul>
  </div>
          
          
            
          
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StaffCategoryTopics',
  
    data() {
      return {
        websiteName: "Dis.integrate",
        categoryId: null,
        topics: []
      };
    },
  
    async created() {
        this.categoryId = this.$route.params.id;
        this.fetchTopics();
    },
  
    methods: {
        async fetchTopics() {
      try {
        // Fetch topics for the category
        const response = await fetch('http://localhost:5000/api/topics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: this.categoryId })
        });
        console.log(this.categoryId)
        const data = await response.json();
        console.log(data)
        this.topics = data.topic_list.topics;
        console.log(this.topics)
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    }
  }
}
  </script>
  
  
  <style scoped>
  /* Left-side navigation bar styles */
  /* .staff-category-topics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  } */
  
  
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
  