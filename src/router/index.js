import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/news',
    name: 'News',
    props: { target: 'news' },
    component: () => import('@/views/Lists.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    props: { target: 'research' },
    component: () => import('@/views/Lists.vue'),
  },
  {
    path: '/news/:title',
    name: 'NewsContents',
    props: { target: 'news' },
    component: () => import('@/views/Contents.vue'),
  },
  {
    path: '/research/:title',
    name: 'ResearchContents',
    props: { target: 'research' },
    component: () => import('@/views/Contents.vue'),
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/People.vue'),
  },
  {
    path: '/people/:name',
    name: 'PeopleInfo',
    component: () => import('@/views/PeopleInfo.vue'),
  },
  {
    path: '/lecture',
    name: 'Lecture',
    props: { target: 'lecture' },
    component: () => import('@/views/Lists.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
