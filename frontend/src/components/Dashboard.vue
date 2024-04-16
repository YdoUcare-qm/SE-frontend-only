<template>
    <component :is="appropriateComponent"></component>
</template>
  

<script>
import { mapGetters } from "vuex";
import UserComponent from './usercomponents/UserComponent.vue';
import AdminDashboard from './admincomponents/AdminDashboard.vue';
import SupportProfile from './staffcomponents/SupportProfile.vue';
import DashboardManagerComponent from './extracomponents/DashboardManager.vue';

export default {
  name: 'dash_board',
  components: {
    UserComponent: UserComponent,
    AdminDashboard: AdminDashboard,
    SupportProfile: SupportProfile,
    DashboardManager: DashboardManagerComponent
  },
  computed: {
    ...mapGetters(["role"]),
    appropriateComponent() {
    switch(this.$store.state.role){ 
        case 1:
            return "UserComponent"
        case 2: 
            return "SupportProfile"
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