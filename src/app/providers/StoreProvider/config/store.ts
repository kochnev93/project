import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { settingsReducer } from 'entities/Settings';
import { userReducer } from 'entities/User';
import { StateType } from './types';

export function createReduxStore(initialState?: StateType) {
    const rootReducers: ReducersMapObject<StateType> = {
        settings: settingsReducer,
        user: userReducer,
    };

    return configureStore<StateType>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
