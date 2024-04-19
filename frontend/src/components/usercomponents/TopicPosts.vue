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
          
            <div class="topic-posts">
    <h1>{{ this.data.title }}</h1>
    <ul class="posts-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-title">{{ post.username }}</div>
        <div class="post-content">{{ post.cooked }}</div>
        <div class="post-author">Author: {{ post.name }}</div>
        <div class="post-date">Date: {{ formatDate(post.created_at) }}</div>
      </li>
    </ul>
  </div>
  <div v-if="postID != 0" class="fixed-box">
          <h4>Resolution</h4>
          <div>{{ resolvedContent }}</div>
          
        </div>
        </div>   
      </div>
    
  </template>
  
  <script>
  export default {
    name: 'TopicPosts',
  
    data() {
    return {
      websiteName: "Dis.integrate",
      topicId: null,
      posts: [],
      data: null,
      postID: null,
      resolvedContent: '',
      isModalOpen: false,
      solution: '' 
    };
  },

  created() {
    // Extract topic ID from the route
    this.topicId = this.$route.params.id;
    // Fetch posts for the topic
    this.fetchPosts();
  },
  methods: {
  async fetchPosts() {
      try {
        // Fetch posts for the topic
        const response = await fetch('http://localhost:5000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: this.topicId })
        });
        this.data = await response.json();
        this.posts = this.data.post_stream.posts;
        // After fetching posts, check for topic resolution
        this.checkTopicResolution();
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },

    async checkTopicResolution() {
      try {
        // Fetch topic resolution status
        const resolutionResponse = await fetch(`http://localhost:5000/api/staff/topicresolution`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ topic_id: this.topicId })
        });
        const resolutionData = await resolutionResponse.json();
        console.log(resolutionData)
        this.postID = resolutionData.post_id
        console.log(this.postID)
        // Check if topic is resolved
        if (resolutionData.post_id > 0) {
          // If topic is resolved, find the resolved post in the fetched posts
          const resolvedPost = this.posts.find(post => post.id === resolutionData.post_id);
          if (resolvedPost) {
            // If topic is resolved, set the resolved content
            this.resolvedContent = resolvedPost.cooked;
          }
        }
      } catch (error) {
        console.error('Error checking topic resolution:', error);
      }
    },

    logoutUser() {
      // Logic to handle user logout
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  }
}
</script>
  
  <style scoped>
  /* Left-side navigation bar styles */
  .topic-posts {
  margin-bottom: 300px; /* Adjusted to match the height of the fixed navbar */
}

/* Fixed box for resolved topic */
.fixed-box {
  position: fixed;
  bottom: 0px;
  left: 250px;
  min-height: 130px;
  width: calc(100% - 40px); /* Adjusted to match padding */
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  