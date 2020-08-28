import * as TypesTask from '../constans/tasks'
import {STATUSES} from '../constans/index'
//import * as taskApi from '../apis/tasks';

/*
    b1: fetchListTaskRequest();
    b2: Reset : state tasks : [] => dispatch(actFetchListTask());
    b3: dispatch(actFetchListTaskSuccess()) => lay data = response
*/
// export const fetchListTaskRequest = () => {
//     return (dispatch) => {
//         dispatch(actFetchListTask());
//         taskApi.getListTask().then((res) => {
//             dispatch(actFetchListTaskSuccess(res.data))
//         }).catch((err) => {
//             dispatch(actFetchListTaskFailed(err))
//         });
//     }
// }

export const actFetchListTask = (params = {}) => ({
    type: TypesTask.FETCH_TASK,
    payload: {
        params
    }
})

export const actFetchListTaskSuccess = data => ({
    type: TypesTask.FETCH_TASK_SUCCESS,
    payload: {
        data
    }
})
export const actFetchListTaskFailed = error => ({
    type: TypesTask.FETCH_TASK_FAILED,
    payload: {
        error
    }
})

export const actFilterTask = (keyword) => ({
    type: TypesTask.FILTER_TASK,
    payload: {
        keyword
    }
})
export const atcFilterTaskSuccess = (data) => ({
    type: TypesTask.FETCH_TASK_SUCCESS,
    payload: {
        data
    }
})
export const atcAddTask = (title, description) => ({
    type: TypesTask.ADD_TASK,
    payload: {
        title,
        description
    }
})
export const atcAddTaskSuccess = (data) => ({
    type: TypesTask.ADD_TASK_SUCCESS,
    payload: {
        data
    }
})
export const atcAddTaskFailed = (error) => ({
    type: TypesTask.ADD_TASK_FAILED,
    payload: {
        error
    }
})

export const atcUpdateTask = (task) => ({
    type: TypesTask.UPDATE_TASK,
    payload: {
        task
    }
})
export const updateTask = (title, description, status = STATUSES[0].value) => {
    return {
      type: TypesTask.UPDATE_TASK_API,
      payload: {
        title,
        description,
        status,
      },
    };
  };
export const atcUpdateTaskSuccess = (data) => ({
    type: TypesTask.UPDATE_TASK_SUCCESS,
    payload: {
        data
    }
})
export const atcUpdateTaskFailed = (error) => ({
    type: TypesTask.UPDATE_TASK_FAILED,
    payload: {
        error
    }
})

export const actDeleteTask = (id) => {
    return {
      type: TypesTask.DELETE_TASK,
      payload: {
        id
      },
    };
  };
export const actDeleteTaskSuccess = (data) => ({
    type: TypesTask.DELETE_TASK_SUCCESS,
    payload: {
        data
    }
})
export const actDeleteTaskFailed = (error) => ({
    type: TypesTask.DELETE_TASK_FAILED,
    payload: {
        error
    }
})