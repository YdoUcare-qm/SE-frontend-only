<template>
  <div>
    <!-- Left-side navigation bar -->
    <div class="sidebar">
      <!-- User information -->
      <div class="user-info">
        <!-- Small user photo -->
        <div class="small-user-photo">
          <img src="/profile.jpg" alt="User Photo" class="small-rounded-photo">
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
          <li><a href="#">Your Tickets</a></li>
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

        <!-- Search section -->
        <div class="search-section">
          <input type="text" v-model="searchQuery" placeholder="Search FAQ" class="search-input">
          <button @click="search" class="search-button">Search</button>
        </div>

        <!-- FAQ section -->
        <div class="faq-section">
          <h2 class="faq-heading">Frequently Asked Questions</h2>
          <div v-for="(faq, index) in faqs" :key="index" class="faq-box">
            <div class="faq">
              <h3 class="faq-question">{{ faq.question }}</h3>
              <p class="faq-answer">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrequentlyComponent",
  data() {
    return {
      user: {
        name: "John Doe",
        photo: "../user-photo.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus elit eu convallis eleifend.",
        email: "john.doe@example.com"
      },
      websiteName: "Disntegrate",
      searchQuery: '',
      faqs: [
        { question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.' },
        { question: 'How do I update my profile information?', answer: 'To update your profile information, go to the settings page and click on the "Edit Profile" button. Make the necessary changes and save them.' },
        { question: 'What are the supported payment methods?', answer: 'We support various payment methods including credit/debit cards, PayPal, and bank transfers. You can choose your preferred payment method during checkout.' }
        // Add more FAQs as needed
      ]
    };
  },
  methods: {
    logoutUser() {
      console.log("Logout clicked");
    },
    editProfile() {
      console.log("Edit Profile clicked");
    },
    search() {
      console.log("Search clicked with query:", this.searchQuery);
      // Your search logic here
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

/* Search section styles */
.search-section {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 400px; /* Adjust width as needed */
}

.search-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

/* FAQ section styles */
.faq-section {
  margin-top: 20px;
}

.faq-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.faq {
  margin-bottom: 20px;
}

.faq h3 {
  margin-bottom: 10px;
}

.faq-heading {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.faq-question {
  font-size: 20px;
  color: #555;
}

.faq-answer {
  color: #666;
}
</style>
