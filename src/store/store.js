import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import articleReducer from "./reducers/articleReducer";
import loginReducer from "./reducers/loginReducer";
import trendingTopicsReducer from "./reducers/trendingTopicsReducer";
import trendingArticlesReducer from "./reducers/trendingArticlesReducer";
import modalsReducer from "./reducers/modalsReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
  articleReducer,
  loginReducer,
  trendingTopicsReducer,
  trendingArticlesReducer,
  modalsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["articleReducer", "modalsReducer"],
  stateReconciler: autoMergeLevel2, // optional state reconciler
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
