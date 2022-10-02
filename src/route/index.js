import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import Quotation from "../views/Quotation.vue";
import ReadMore from "../views/ReadMore.vue";
import Training from "../views/Training.vue";
import Services from "../views/Services.vue";
import blogReadMore from "../views/blogReadMore.vue";
import NotFound from "../views/NotFound.vue";

import DefaultLayout from "../components/DefaultLayout.vue";

import store from "../store"

// admin
import adminDashBoard from "../views/admin/adminDashBoard.vue";
import Adminlogin from "../views/admin/AdminLogin.vue";
import AdminSignUp from "../views/admin/AdminSignUp.vue";


import Adminhome from "../views/admin/Adminhome.vue";
import Adminabout from "../views/admin/Adminabout.vue";
import Adminservices from "../views/admin/Adminservices.vue";


const routes = [{
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    name: "DefaultLayout",
    children: [{
            path: '/home',
            component: Index,
            name: "Index",
        }, {
            path: '/about',
            component: About,
            name: "About",
        }, {
            path: '/contact',
            component: Contact,
            name: "Contact",
        }, {
            path: '/blog',
            component: Blog,
            name: "Blog",
        }, {
            path: '/projects/:id',
            component: Projects,
            name: "Projects",
        }, {
            path: '/quotation',
            component: Quotation,
            name: "Quotation",
        }, {
            path: '/training',
            component: Training,
            name: "Training",
        },
        {
            path: '/services',
            component: Services,
            name: "Services",
        }, {
            path: '/readmore',
            component: ReadMore,
            name: "ReadMore",
        },

        {
            path: '/blogReadMore/:id',
            component: blogReadMore,
            name: "blogReadMore",
            props: true
        },

        {
            path: '/:catchAll(.*)',
            component: NotFound,
            name: "NotFound"
        },
        // Admin

        {
            path: '/admin-dashboard',
            component: adminDashBoard,
            name: "adminDashBoard",
            meta: { requiresAuth: true },
        },

        {
            path: '/Admin/login',
            component: Adminlogin,
            name: "Adminlogin",

        },

        {
            path: '/Admin/SignUp',
            component: AdminSignUp,
            name: "AdminSignUp",

        },
        {
            path: '/Adminhome',
            component: Adminhome,
            name: "Adminhome",
            meta: { requiresAuth: true },
        },

        {
            path: '/Adminabout',
            component: Adminabout,
            name: "Adminabout",
            meta: { requiresAuth: true },
        },

        {
            path: '/Adminservices',
            component: Adminservices,
            name: "Adminservices",
            meta: { requiresAuth: true },
        }
    ]
}];



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        return { top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Adminlogin" });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: "adminDashboard" });
    } else {
        next();
    }
});


router.beforeEach((to, from) => {

    document.title = `DealDrive | ${to.name}`;
    } )
export default router;