import { configureStore } from '@reduxjs/toolkit';
import { StateType } from './types';

export function createReduxStore(initialState?: StateType) {
    return configureStore<StateType>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
