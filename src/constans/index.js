import AdminHomePage from '../container/AdminHomePage/index'
import TaskBoard from '../container/taskBoard/TaskBoard'


export const API_ENDPOINT = 'http://localhost:3000/';



export const STATUSES = [

    {
        value: 0,
        label: 'READY'
    },
    {
        value: 1,
        label: 'IN PROGRESS'
    },
    {
        value: 2,
        label: 'COMPLETED'
    }
];
export const STATUS_CODE = {
    SUCCESS: 200,
    CREATE: 201,
    UPDATE: 202
}

export const ADMIN_ROUTES = [
    {
      name: 'Admin',
      path: '/',
      exact: true,
      component: AdminHomePage,
    },
    {
      name: 'Task management',
      path: '/task-board',
      component: TaskBoard,
    },
  ];