import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export let store = createStore(persistedReducer)
export let persistor = persistStore(store)



// redux-persist 적용전 소스
/* let store = createStore(reducers, {}) */