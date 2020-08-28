import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as TypeTask from '../constans/tasks'
import { getListTask, addTask , updateTask, deleteTask} from '../apis/tasks'
import { STATUS_CODE, STATUSES } from '../constans/index'
import * as actiontask from '../actions/tasks'
import * as actionUi from '../actions/ui'

/*
    b1: thuc thi action lay danh sach
    b2: goi api
    b3: kiem tr status code 
    neu thanh cong thif lam .....
    neu that bai thi lam .....

*/
function* watchFetchListTaskAction() {
    while (true) {
        let action = yield take(TypeTask.FETCH_TASK);
        let { params } = action.payload;
        yield put(actionUi.actShowLoading());
        const response = yield call(getListTask, params);
        const { status, data } = response;
        
        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListTaskSuccess
            yield put(actiontask.actFetchListTaskSuccess(data));
            // yield put(actionUi.actHideLoading());
        } else {
            // dispatch action fetchListTaskFailed
            yield put(actiontask.actFetchListTaskFailed(data));
            // yield put(actionUi.actHideLoading());
        }
        yield delay(800);
        yield put(actionUi.actHideLoading());
    }
}
function* watchCreateTaskAction() {
}

function* filterTaskSaga({ payload }) {
    yield delay(500);
    const {keyword} =  payload;
    // lay state tu store
    
    // const list =  yield select(state=> state.tasks.listTask);
    // console.log(list);
    // const filteredTask = list.filter(task => 
    //     task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
    yield put(actiontask.actFetchListTask({
        q: keyword
    }));
    //yield put(actiontask.atcFilterTaskSuccess(list));
}

function* addTaskSaga({ payload }) {
    let {title, description } = payload;
    yield put(actionUi.actShowLoading());
    let res = yield call(addTask,{
        title,
        description,
        status: STATUSES[0].value
    } );
   
    let {data, status} = res;
    if (status === STATUS_CODE.CREATE) {
        yield put(actiontask.atcAddTaskSuccess(data))
    }else {
        yield put(actiontask.atcAddTaskFailed(data));
    }   
    yield delay(500);
    yield put(actionUi.actHideLoading());
}
function* updateTaskSaga({ payload }) {
    let {title, description, status } = payload;
    let taskEditting = yield select(state => state.tasks.taskEditting);
    yield put(actionUi.actShowLoading());
    let res = yield call(updateTask,{title, description, status }, taskEditting.id);
    let {data, status: statusCode} = res;
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(actiontask.atcUpdateTaskSuccess(data))
    }else {
        yield put(actiontask.atcUpdateTaskFailed(data));
    }   
    yield delay(500);
    yield put(actionUi.actHideLoading());
}
function* deleteTaskSaga({ payload }) {
    let {id } = payload;
    yield put(actionUi.actShowLoading());
    let res = yield call(deleteTask, id);
    let {data, status: statusCode} = res;
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(actiontask.actDeleteTaskSuccess(id))
    }else {
        yield put(actiontask.actDeleteTaskFailed(data));
    }   
    yield delay(500);
    yield put(actionUi.actHideLoading());
}



function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    // khi lang nghe duoc action tu type thi saga se nhan dc action do
    yield takeLatest(TypeTask.FILTER_TASK, filterTaskSaga);
    yield takeEvery(TypeTask.ADD_TASK, addTaskSaga);
    yield takeLatest(TypeTask.UPDATE_TASK_API, updateTaskSaga);
    yield takeLatest(TypeTask.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;