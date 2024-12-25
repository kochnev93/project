import { StateType } from 'app/providers/StoreProvider';

export const getStatusNavbar = (state: StateType) => state.settings.navbarIsOpen;
