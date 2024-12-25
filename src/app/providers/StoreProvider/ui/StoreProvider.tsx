import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateType } from '../config/types';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateType;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { initialState, children } = props;

    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
