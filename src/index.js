import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import projectsReducer from './store/reducers/projectsReducer';
import newsReducer from './store/reducers/newsReducer';
import languageReducer from './store/reducers/lenguageReducer';
import {BrowserRouter} from "react-router-dom";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    projects: projectsReducer,
    news: newsReducer,
    language: languageReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <Suspense fallback={(<div>loading...</div>)}>
        {app}
    </Suspense>,
    document.getElementById('root'));


serviceWorker.unregister();
