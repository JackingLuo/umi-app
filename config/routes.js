export default [
    { exact: true, path: '/', component: '@/pages/index', title:'首页' },
    { exact: true, path: '/docs', component: '@/pages/docs', title:'docs' },
    { exact: true, path: '/detail/:id', component: '@/pages/$detail', title:'详情' },
    { exact: true, path: '/login', component: '@/pages/login', title:'登陆' }
];