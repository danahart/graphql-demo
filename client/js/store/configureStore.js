import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const IS_BROWSER = typeof window !== 'undefined';
const middleware = IS_BROWSER ? [thunk] : [thunk];

export default function configureStore(initialState = {}) {

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        IS_BROWSER && window.devToolsExtension ? window.devToolsExtension() : (f) => f
    ));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
