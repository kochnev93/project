import { createSlice } from '@reduxjs/toolkit';
import { SettingsType } from './types';

const initialState: SettingsType = {
    navbarIsOpen: true,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        openNavbar: (state) => {
            state.navbarIsOpen = true;
        },
        toggleNavbar: (state) => {
            state.navbarIsOpen = !state.navbarIsOpen;
        },
    },
});

export const { actions: settingsActions } = settingsSlice;
export const { reducer: settingsReducer } = settingsSlice;
