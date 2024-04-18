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
        <div id="app">
          <div v-for="category in categories" :key="category.id" class="category-item">
            <div class="category-name">{{ category.name }}</div>
            <button @click="toggleSubscription(category.id)">
            {{ isSubscribed(category.id) ? 'Unsubscribe' : 'Subscribe' }}
            </button>
    </div>
  </div>


      </div>
    </div>
  </template>

<script>
export default {
  name: 'UserSubscriptions',

  data() {
    return {
      websiteName: "Dis.integrate",
      categories: [],
      subscribedCategories: []
    };
  },

  created() {
    // Fetch categories and subscribed categories
    this.fetchCategories();
    this.fetchSubscribedCategories();
  },

  methods: {
    fetchCategories() {
      // Fetch categories from API
      fetch('http://localhost:5000/api/categories')
        .then(response => response.json())
        .then(data => {
          this.categories = data.category_list.categories;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },

    fetchSubscribedCategories() {
      // Fetch subscribed categories for the user
      const userId = localStorage.getItem('id');
      fetch('http://localhost:5000/api/user/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
      })
      .then(response => response.json())
      .then(data => {
        this.subscribedCategories = data.categories;
      })
      .catch(error => {
        console.error('Error fetching subscribed categories:', error);
      });
    },

    isSubscribed(categoryId) {
      // Check if categoryId is subscribed
      return this.subscribedCategories.some(cat => cat.cid === categoryId);
    },

    toggleSubscription(category) {
      // Get user ID from localStorage
      const userId = localStorage.getItem('id');
      // Send API call to toggle subscription
      fetch('http://localhost:5000/api/user/togglesub', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          category: category
        })
      })
      .then(response => response.json())
      .then(data => {
        // Refresh subscribed categories after toggle
        alert(data.message)
        this.fetchSubscribedCategories();

      })
      .catch(error => {
        console.error('Error toggling subscription:', error);
      });
    }
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
  margin-top: 40px;
  /* Adjusted to match the width of the sidebar */
  padding: 20px;
  /* display: flex; Ensure left and right sides are displayed side by side */
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
  .category-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.category-name {
  flex: 1;
}
  </style>