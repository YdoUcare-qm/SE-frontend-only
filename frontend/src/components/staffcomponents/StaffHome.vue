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
          
  
          <div class="staff-home">
      <div class="category-card" v-for="category in allottedCategories" :key="category.id">
        <router-link :to="`/staffcategorytopics/${category.id}`">
          <div class="card-content">
            <div class="category-name">{{ category.name }}</div>
            <div class="category-description">{{ category.description }}</div>
            
          </div>
        </router-link>
      </div>
    </div>
          
            
          
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StaffHome',
  
    data() {
      return {
        websiteName: "Dis.integrate",
        categories: [],
        allottedCategories: []
      };
    },
  
    async created() {
      // Fetch categories and subscribed categories
      await this.fetchCategories();
      await this.fetchAllottedCategories();
    },
  
    methods: {
      async fetchCategories() {
        // Fetch categories from API
        await fetch('http://localhost:5000/api/categories')
          .then(response => response.json())
          .then(data => {
            this.categories = data.category_list.categories;
            console.log(this.categories)
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      },
  
      async fetchAllottedCategories() {
        // Fetch subscribed categories for the user
        const userId = localStorage.getItem('id');
        await fetch('http://localhost:5000/api/staff/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_id: userId })
        })
        .then(response => response.json())
        .then(data => {
          // Filter categories array to include only subscribed categories
          if (this.categories.length > 0) {
            // Filter categories array to include only subscribed categories
            this.allottedCategories = this.categories.filter(category =>
              data.categories.some(allotted => allotted.cid === category.id)
            );
            console.log(this.allottedCategories);
          }
        })
        .catch(error => {
          console.error('Error fetching allotted categories:', error);
        });
      }
    }
  }
  </script>
  
  
  <style scoped>
  /* Left-side navigation bar styles */
  .staff-home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .category-card {
    width: 300px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .category-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .category-description {
    margin-bottom: 10px;
  }
  
  .subscription-status {
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
  