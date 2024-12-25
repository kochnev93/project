import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from 'entities/Settings';
import { StateType } from './types';

export function createReduxStore(initialState?: StateType) {
    return configureStore<StateType>({
        reducer: {
            settings: settingsReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
