import * as TypeTask from '../constans/tasks'
import { toastError, toastSuccess } from '../commons/helpers/toastHelper'
const initialState = {
    listTask: [],
    taskEditting: null
};

const taskRducer = (state = initialState, action) => {
    switch (action.type) {
        case TypeTask.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            }
        }
        case TypeTask.FETCH_TASK_SUCCESS: {
            let { data } = action.payload;
            return {
                ...state,
                listTask: data
            }
        }
        case TypeTask.FETCH_TASK_FAILED: {
            let { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: []
            }
        }
        case TypeTask.ADD_TASK: {
            return {
                ...state
            }
        }
        case TypeTask.ADD_TASK_SUCCESS: {
            let { data } = action.payload;
            toastSuccess('thêm công việc thành công');
            return {
                ...state,
                listTask: [data].concat(state.listTask)
            }
        }
        case TypeTask.ADD_TASK_FAILED: {
            let { error } = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: []
            }
        }
        case TypeTask.FILTER_TASK_SUCCESS: {
            let { data } = action.payload;
            return {
                ...state,
                listTask: data
            }
        }
        case TypeTask.UPDATE_TASK: {
            let {task} = action.payload;
            return {
                ...state,
                taskEditting: task
            }
        }
        case TypeTask.UPDATE_TASK_SUCCESS: {
            let { data } = action.payload;
            toastSuccess('Thay đổi công việc thành công');
            let { listTask } = state;
            let index = listTask.findIndex(e => e.id === data.id);
            if (index !== -1) {
                let newListTask = [
                    ...listTask.slice(0, index),
                    data,
                    ...listTask.slice(index + 1)
                ];
                return {
                    ...state,
                    listTask: newListTask
                }
            } else {
                return {
                    ...state,
                }
            }
        }
        case TypeTask.UPDATE_TASK_FAILED: {
            let { error} = action.payload;
            toastError(error);
            return {
                ...state,
            }
        }
        case TypeTask.DELETE_TASK: {
            return {
                ...state,
            }
        }
        case TypeTask.DELETE_TASK_SUCCESS: {
            let { data } = action.payload;
            toastSuccess('Xóa công việc thành công');
            return {
                ...state,
                listTask: state.listTask.filter(e => e.id !== data)
            }
        }
        case TypeTask.DELETE_TASK_FAILED: {
            let { error} = action.payload;
            toastError(error);
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
export default taskRducer;