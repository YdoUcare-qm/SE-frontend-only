import { createWebHistory, createRouter } from 'vue-router';
import ChangePasswordComponent from '../components/extracomponents/ChangePasswordComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
// import DashboardStudentComponent from '../components/DashboardStudentComponent.vue';
import dash_board from '../components/Dashboard.vue';
// import DashboardAdminComponent from '../components/DashboardAdminComponent.vue';
// import DashboardSupportAgentComponent from '../components/DashboardSupportAgentComponent.vue';
import AddTicketComponent from '../components/extracomponents/AddTicketComponent.vue';
import EditTicketComponent from '../components/extracomponents/EditTicketComponent.vue';
import AllTicketComponent from '../components/extracomponents/AllTicketComponent.vue';
import ResponseComponent from '../components/extracomponents/ResponseComponent.vue';
import ManageUsersComponent from '../components/extracomponents/ManageUsersComponent.vue';
import ManageFAQSuggestionsComponent from '../components/extracomponents/ManageFAQComponent.vue';
import ManageFlaggedPosts from '../components/extracomponents/ManageFlaggedPosts.vue';
import AddAdminsComponent from '../components/extracomponents/AddAdmins.vue';
import UserComponent from '../components/usercomponents/UserComponent.vue';
import SettingsComponent from '../components/generalcomponents/SettingsComponent.vue';
import SubscriptionComponent from '../components/usercomponents/SubscriptionComponent.vue';
import NotificationComponent from '../components/extracomponents/NotificationComponent.vue';
import ThreadComponent from '../components/staffcomponents/ThreadComponent.vue'
import FrequentlyComponent from '../components/generalcomponents/FrequentlyComponent.vue'
import ThreadMangementComponent from '../components/staffcomponents/ThreadMangementComponent.vue'
import SupportProfile from '../components/staffcomponents/SupportProfile.vue'
import SupportChat from '../components/extracomponents/SupportChat.vue'
import SupportStaffManagement from '../components/admincomponents/SupportStaffManagement.vue';
import UserManagement from '../components/admincomponents/UserManagement.vue';
import RaisedRequests from '../components/admincomponents/RaisedRequests.vue';
import RegistrationComponent from '../components/RegistrationComponent.vue';
import AdminDashboard from '../components/admincomponents/AdminDashboard.vue';
// import store from "../store";
const routes = [
    {
        path: "/",
        component: LoginComponent,
    },
    {
        path: "/AdminDashboard",
        component: AdminDashboard,
    },
    {
        path: "/register",
        component: RegistrationComponent,
    },
    {
        path: "/changePassword",
        component: ChangePasswordComponent,
    },
    {
        path: "/dashboard",
        component: dash_board,
    },
    {
        path: "/addTicket",
        component: AddTicketComponent,
    },
    {
        name: "editTicket",
        path: "/editTicket/:ticketId",
        component: EditTicketComponent,
        props: true
    },
    {
        path: "/allTicket",
        component: AllTicketComponent,
    },
    {
        path: "/response/:ticketId",
        component: ResponseComponent,
        name: "response",
        props: true
    },
    {
        path: "/manageUsers",
        component: ManageUsersComponent,
        name: "manageUsers"

    },
    {
        path: "/manageFAQ",
        component: ManageFAQSuggestionsComponent,
        name: "manageFAQ"
    },
    {
        path: "/manageFlaggedPosts",
        component: ManageFlaggedPosts,
        name: "manageFlaggedPosts"
    },
    {
        path: "/addAdmins",
        component: AddAdminsComponent,
        name: "AddAdmins"
    },
    {
        path: "/UserComponent",
        component: UserComponent,
    },
    {
        path: "/SettingsComponent",
        component: SettingsComponent,
    },
    {
        path: "/SubscriptionComponent",
        component: SubscriptionComponent,
    },
    {
        path: "/NotificationComponent",
        component: NotificationComponent,
    },
    {
        path: "/ThreadComponent",
        component: ThreadComponent,
    },
    {
        path: "/FrequentlyComponent",
        component: FrequentlyComponent,
    },
    {
        path: "/SupportProfile",
        component: SupportProfile,
    },
    {
        path: "/ThreadManagementComponent",
        component: ThreadMangementComponent,
    },
    {
        path: "/SupportChat",
        component: SupportChat,
    },
    {
        path: "/SupportStaffManagement",
        component: SupportStaffManagement,

    },

    {
        path: "/UserManagement",
        component: UserManagement,

    },

    {
        path: "/Requests",
        component: RaisedRequests,

    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
