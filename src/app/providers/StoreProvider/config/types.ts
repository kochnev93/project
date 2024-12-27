import { SettingsType } from 'entities/Settings';
import { UserStateType } from 'entities/User';
import { AxiosInstance } from 'axios';

export type StateType = {
    settings: SettingsType;
    user: UserStateType;
    // [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
};

export interface ThunkExtraArgType {
    api: AxiosInstance;
}
