import { SettingsType } from 'entities/Settings';
import { UserStateType } from 'entities/User';

export type StateType = {
    settings: SettingsType;
    user: UserStateType;
};
