import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientDashboardView from '@/views/PatientDashboardView.vue'
import DoctorDashboardView from '@/views/DoctorDashboardView.vue'
import layout from '../components/layaouts/LayaoutForAllUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { 
        layout: layout, 
        public: true,
        includeLayout: true,
      },
    },
    {
      path: '/patients-dashboard',
      name: 'patients-dashboard',
      component: PatientDashboardView,
      meta: { 
        title: 'Patients-Dashboard',
        includeLayout: false, 
      }
    },
    {
      path: '/doctors-dashboard',
      name: 'doctors-dashboard',
      component: DoctorDashboardView,
      meta: { 
        title: 'Doctors-Dashboard',
        includeLayout: false, 
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  const title = to.meta.title

 // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})

export default router
