import App from './app';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path:'/default',
                component:resolve=>require(['./default'],resolve),
                children:[
                    {
                        path: '/homePage',
                        component: resolve => require(['./homePage/homePage'],resolve),
                    },
                    {
                        path: '/askOnline',
                        component: resolve => require(['./askOnline/askOnline'],resolve)
                    },
                    {
                        path: '/mine',
                        component: resolve => require(['./mine/mine'],resolve),
                    },
                    {
                        path:'/',
                        component: resolve=>require(['./homePage/homePage'],resolve),   
                    },
                    {
                        path:'*',
                        redirect:'/'
                    }
                ]
            },
            {
                path:'/singel',
                component: App,
                children:[
                    {
                        path:'medicalRecord',
                        component:resolve => require(['./mine/medicalRecord'],resolve)
                    }
                ]
            },
            {
                path: '*',
                component: resolve => require(['./default'],resolve),
                redirect:'/default'
            }
        ]
        
    }
];