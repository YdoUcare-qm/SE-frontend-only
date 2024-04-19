<template>
    <component :is="appropriateComponent"></component>
</template>
  

<script>
import { mapGetters } from "vuex";
import UserHome from './usercomponents/UserHome.vue';
import AdminDashboard from './admincomponents/AdminDashboard.vue';
import StaffHome from './staffcomponents/StaffHome.vue';
import DashboardManagerComponent from './extracomponents/DashboardManager.vue';

export default {
  name: 'dash_board',
  components: {
    UserHome: UserHome,
    AdminDashboard: AdminDashboard,
    StaffHome: StaffHome,
    DashboardManager: DashboardManagerComponent
  },
  computed: {
    ...mapGetters(["role"]),
    appropriateComponent() {
    switch(this.$store.state.role){ 
        case 1:
            return "UserHome"
        case 2: 
            return "StaffHome"
        case 3: 
            return "AdminDashboard"
        case 4:
            return "DashboardManager"
    }
    return null
    }
  },
};
</script>