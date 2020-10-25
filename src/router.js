/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                redirect: '/app/dashboard'
              },
              {
                path: '/app/dashboard',
                name: 'dashboard',
                component: () => import('./views/pages/app/home/Dashboard.vue')
              },
              {
                path: '/app/contractors',
                name: 'contractors',
                component: () => import('./views/pages/app/contractors/ContractorsList.vue'),
                meta: {
                  pageTitle: 'Contractors',
                }
              },
              {
                path: '/app/projects',
                name: 'projects',
                component: () => import('./views/pages/app/projects/ProjectsList.vue'),
                meta: {
                  pageTitle: 'Projects',
                }
              },
              {
                path: '/app/labels',
                name: 'labels',
                component: () => import('./views/pages/app/labels/LabelList.vue'),
                meta: {
                  pageTitle: 'Labels',
                }
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/auth/login',
                name: 'page-login',
                component: () => import('@/views/pages/auth/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
