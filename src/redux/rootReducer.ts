import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import { persistReducer } from "redux-persist";
import PersistReducer from "./slice/persist";
// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const persistConfig = {
  key: "persist-config",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  persist: persistReducer(persistConfig, PersistReducer),
});

export { rootPersistConfig, rootReducer };
