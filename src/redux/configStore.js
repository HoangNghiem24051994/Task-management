import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const configStore = () => {
    const middleware = [thunk, sagaMiddleware];
    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(
        rootReducer,
        composeEnhancer(...enhancers)
    );
    sagaMiddleware.run(rootSaga);

    return store;
};


export default configStore;