import App from './app';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/list',
                component: resolve => require(['./page/list'], resolve),
            },
            {
                path: '*',
                redirect: '/list'
            }
        ]
        
    }
];