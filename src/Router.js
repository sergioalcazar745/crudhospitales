import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import HospitalesComponent from './components/Hospitales.vue';
import CreateHospital from './components/CreateHospital.vue';
import DetailHospital from './components/DetailHospital.vue';

const routes = [
    {
        path: "/", component: HomeComponent
    },

    {
        path: "/hospitales", component: HospitalesComponent
    },

    {
        path: "/crear", component: CreateHospital
    },

    {
        path: "/detail/:id", component: DetailHospital
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;