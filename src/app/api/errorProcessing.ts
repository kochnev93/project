import { BaseQueryApi, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
// import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const errorProcessing = (error: FetchBaseQueryError, api: BaseQueryApi): void => {
    const { status } = error;
    console.error('Error', status);
};
