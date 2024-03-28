export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析',icon: 'BarChart', component: './AddChart' },
  { path: '/my_chart', name: '我的图表',icon: 'pieChart', component: './MyChart' },
  { path: '/add_chart_async', name: '智能分析（异步）', icon: 'barChart', component: './AddChartAsync' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
