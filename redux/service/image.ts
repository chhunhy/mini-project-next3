import { ecommerceApi } from "../api";

export const imageApi = ecommerceApi.injectEndpoints({
    endpoints: (builder) => ({
        	                   
        getIcons: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page = 1, pageSize = 10 }) =>({
                url: `api/file/icon/?page=${page}&page_size=${pageSize}`,
                method: "GET",
                
            })
            
        }),
		getImages: builder.query<any, { page: number; pageSize: number }>({
			query: ({ page = 1, pageSize = 10 }) => ({
				url: `api/file/product/?page=${page}&page_size=${pageSize}`,
				method: "GET",
			}),
		}),
		uploadImage: builder.mutation<any, { data: object}>({
			query: ({ data }) => ({
				url: `api/file/product/`,
				method: "POST",
				body: data,
			}),
		}),
	})
})

export const {
	useGetIconsQuery,
	useGetImagesQuery,
	useUploadImageMutation
} = imageApi;