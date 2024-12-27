import { baseApi } from 'app/api';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<any[], void>({
            query: () => ({
                url: '/posts',
            }),
        }),
    }),
});

// export const { use } = userApi;
