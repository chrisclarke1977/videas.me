import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postsReducer from "../reducers/posts";
import authReducer from "../reducers/auth";
import usersReducer from "../reducers/users";

let composeEnhancers = compose;

if (typeof window !== "undefined") {
  // Client-side-only code
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  auth: authReducer
});

const persistConfig = {
  blacklist: ['form'], //if you don't want to store in local storage
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = applyMiddleware(thunk);
const enhancer = composeEnhancers(middleware);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
