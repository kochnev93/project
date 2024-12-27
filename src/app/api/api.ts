import {
    BaseQueryFn,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryMeta,
    QueryReturnValue,
} from '@reduxjs/toolkit/query/react';
import { API_URL } from 'shared/config/constants';
import axios, { AxiosRequestConfig } from 'axios';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { StateType } from 'app/providers/StoreProvider';
import { errorProcessing } from './errorProcessing';

export const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
    // paramsSerializer: (params) => {
    //     return queryString.stringify(params, { encode: false, arrayFormat: "repeat" });
    // },
});

interface CustomQueryArgs extends AxiosRequestConfig {
    onSuccess?: (
        dispatch: (action: any) => void,
        result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta>,
        state?: StateType,
    ) => Promise<void>;
}

export type CustomBaseQueryType = BaseQueryFn<CustomQueryArgs, unknown, unknown>;

const baseQueryWithStatus: CustomBaseQueryType = async ({ onSuccess, ...args }, api, extraOptions) => {
    // @ts-ignore todo разобраться почему ошибка с args
    const result = await baseQuery(args, api, extraOptions);

    if (result?.error) {
        errorProcessing(result.error, api);
    }

    if (onSuccess) {
        try {
            // @ts-ignore
            await onSuccess(api.dispatch, result, api.getState());
        } catch (e) {
            console.error('Error in onSuccess method: ', e);
            throw e;
        }
    }

    return result;
};
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithStatus,
    endpoints: (builder) => ({}),
});

export const api = axios.create({
    baseURL: API_URL,
});

// $api.interceptors.request.use((config) => {
//     if (config.headers) {
//         config.headers.Authorization =
//             localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
//     }
//     return config;
// });
