export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [
        {
            path: '/',
            component: '../layout/index',
            routes: [
                {
                    path: '/',
                    component: './FirstPage'
                },
                {
                    path: '/dashboard',
                    routes: [
                        {
                            path: 'analyze',
                            component: './dashboard/Analyze'
                        },
                        {
                            path: 'monitor',
                            component: './dashboard/Monitor'
                        },
                        {
                            path: 'workplace',
                            component: './dashboard/Workplace'
                        }
                    ]
                },
                {
                    path: 'puzzlecards',
                    component: './PuzzleCardsPage'
                },
                {
                    path: 'mylist',
                    component: './MyList'
                }
            ]
        }
    ]
};