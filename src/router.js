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
                component:resolve=>require(['./singel'],resolve),
                children:[
                    {
                        path:'bindCard',
                        component:resolve => require(['./homePage/bindCard'],resolve)
                    },
                    {
                        path:'medicalRecord',
                        component:resolve => require(['./mine/medicalRecord'],resolve)
                    },
                    {
                        path:'doctorsSchedule',
                        component:resolve => require(['./homePage/doctorsSchedule'],resolve)
                    },
                    {
                        path:'departmentNO',
                        component:resolve => require(['./homePage/departmentNO'],resolve)
                    },
                    {
                        path:'hospitalizationFee',
                        component:resolve => require(['./homePage/hospitalizationFee'],resolve)
                    },
                    {
                        path:"commonPatient",
                        component:resolve => require(['./homePage/commonPatient'],resolve)
                    },
                    {
                        path:'lisreport',
                        component:resolve => require(['./homePage/lisreport'],resolve)
                    },
                    {
                        path:'risreport',
                        component:resolve => require(['./homePage/risreport'],resolve)
                    },
                    {
                        path:'patientAppointmentInfo',
                        component:resolve => require(['./homePage/patientAppointmentInfo'],resolve)
                    },
                    {
                        path:'userInfo',
                        component:resolve => require(['./mine/myselfInfo'],resolve)
                    },
                    {
                        path:'getPrescription',
                        component:resolve => require(['./homePage/getPrescription'],resolve)
                    },
                    {
                        path:'getTreatSpend',
                        component:resolve => require(['./mine/treatSpend'],resolve)
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