export default [
    { path: '/login', component: '@/pages/login', title:'登陆' },
    {
        path: '/',
        component: '@/layouts/layout',
        routes: [
            { exact: true, path: '/', component: '@/pages/index', title:'首页' },
            { exact: true, path: '/docs', component: '@/pages/docs', title:'docs' },
            { exact: true, path: '/detail/:id', component: '@/pages/$detail', title:'详情' }
        ]
    }
];