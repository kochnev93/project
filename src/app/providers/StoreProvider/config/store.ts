import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from 'entities/Settings';
import { userReducer } from 'entities/User';
import { baseApi, api } from 'app/api';
import { StateType, ThunkExtraArgType } from './types';

export function createReduxStore(initialState?: StateType) {
    // const rootReducers: ReducersMapObject<StateType> = {
    //     settings: settingsReducer,
    //     user: userReducer,
    //     api: baseApi.reducer,
    // };

    const extraArg: ThunkExtraArgType = {
        api,
    };

    return configureStore({
        reducer: {
            settings: settingsReducer,
            user: userReducer,
            [baseApi.reducerPath]: baseApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
