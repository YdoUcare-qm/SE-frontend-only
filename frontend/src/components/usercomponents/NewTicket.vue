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
      
      <div class="navbar">
            <div class="website-name">{{ websiteName }}</div>
            <router-link to="/"><button @click="logoutUser" class="logout-button">Logout</button></router-link>
            </div>

      <!-- Main content area -->
      <div class="main-content">
        <!-- Main user information section -->
        
          <!-- Navigation bar -->
          
          
            <div class="new-ticket">
    <!-- Left side -->
    <div class="left-side">
      <h2>Create New Ticket</h2>
      <form @submit.prevent="submitTicket">
        <div class="form-group">
          <label for="category">Category:</label>
          <select v-model="selectedCategory" @change="fetchRecommendations" required>
            <option value="" disabled>Select category</option>
            <option v-for="category in Categories" :value="category.id" :key="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="tags">Tags:</label>
          <input type="text" v-model="tags" id="tags" required>
        </div>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" v-model="title" id="title" required minlength="20">
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" required minlength="20"></textarea>
        </div>
        <button type="submit" :disabled="!formIsValid">Submit</button>
      </form>
    </div>
  </div>
    <!-- Right side -->
    <!-- Placeholder for now -->
    <div class="right-content">
      <h2>Recommended Topics</h2>
      <div class="topics-container">
        <router-link v-for="topic in topics" :key="topic.id" :to="`/topicposts/${topic.id}`">
          <div class="topic-tile">
            <div class="topic-title">{{ topic.title }}</div>
          </div>
        </router-link>
      </div>
    </div>
  
    
        </div>   
      </div>
    
  </template>
  
  <script>
export default {
  name: 'NewTicket',

  data() {
    return {
      Categories: [], // Array to store subscribed categories
      selectedCategory: '', // Currently selected category
      tags: '',
      title: '',
      description: '',
      topics:[],
      websiteName:'Dis.integrate'
    };
  },

  created() {
    // Fetch subscribed categories when component is created
    this.fetchCategories();
  },

  methods: {
    async fetchCategories() {
      // Fetch subscribed categories from API
      try {
        const response = await fetch('http://localhost:5000/api/categories');
        const data = await response.json();
        this.Categories = data.category_list.categories;
        console.log(data)
      } catch (error) {
        console.error('Error fetching subscribed categories:', error);
      }
    },

    async fetchRecommendations() {
      // Fetch recommendations based on selected category
      try {
        const response = await fetch('http://localhost:5000/api/topics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: this.selectedCategory })
        });
        const data = await response.json();
        
        this.topics=data.topic_list.topics
        console.log(this.topics)
        // Handle recommendations data
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    },

    async submitTicket() {
      try {
        // Validate form fields
        if (!this.title || !this.description || !this.selectedCategory || !this.tags) {
          alert('Please fill in all fields');
          return;
        }
        if (this.title.length < 20 || this.description.length < 20) {
          alert('Title and description must be at least 20 characters long');
          return;
        }

        // Disable submit button during API call
        this.submitting = true;

        // Make API call to submit new ticket
        const response = await fetch('http://localhost:5000/api/user/newticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.title,
            description: this.description,
            category: this.selectedCategory,
            creator: localStorage.getItem('id'),
            tags: this.tags
          })
        });
        const data = await response.json();
        alert(data.message);

        // Redirect to /mytickets after successful submission
        this.$router.push('/mytickets');
      } catch (error) {
        console.error('Error submitting ticket:', error);
        alert('Failed to submit ticket. Please try again later.');
      } finally {
        // Re-enable submit button after API call completes
        this.submitting = false;
      }
    }
  },

  computed: {
    formIsValid() {
      // Check if all form fields are filled and title/description meet minimum character requirement
      return this.selectedCategory && this.tags && this.title.length >= 20 && this.description.length >= 20;
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
  margin-left: 250px; /* Adjusted to match the width of the sidebar */
  padding: 20px;
  display: flex; /* Ensure left and right sides are displayed side by side */
}
/* Left side styles */
.left-side {
  flex: 1; /* Take up the entire left half */
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Right side styles */
.right-content {
  flex: 1; /* Take up the entire right half */
  padding: 20px;
  max-height: 500px; /* Adjust height as needed */
  overflow-y: auto; /* Enable vertical scrolling */
}

.topics-container {
  display: flex;
  flex-wrap: wrap;
}

.topic-tile {
  width: 100%; /* Display only one tile in a row */
  margin: 10px 0; /* Adjust margin for spacing */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.topic-title {
  font-weight: bold;
  margin-bottom: 5px;
}

</style>
  