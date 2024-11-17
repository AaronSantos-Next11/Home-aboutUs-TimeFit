// Importamos las funciones createRouter y createWebHistory desde vue router
import { createRouter, createWebHistory } from "vue-router";

const router= createRouter ({
    history: createWebHistory(),
    // Ahora creamos los enlaces a cada sección de la landign (el home y el about us)
    routes: [
        {path: "/", component: () => import("../components/Home.vue")},
        {path: "/About-us", component: () => import("../components/AboutUs.vue")},
    ]
});

//Ahora nombramos que el nombre por defecto para llamar este archivo es "router"
export default router;

