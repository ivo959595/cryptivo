import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders = {
        'x-rapidapi-key':'2a4daafa84msh16a2a6e42c6bc92p134800jsnbc2e5c155fea',
        'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
      }


const baseUrl = `https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist`

const createRequest = (url) => ({url, headers: cryptoNewsHeaders })

      export const cryptoNewsApi =  createApi({
        reducerPath: 'cryptoNewsApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => ({
            getCryptoNews: builder.query({
            query: () => 
                createRequest("")
            })
        })
    })


    export const { useGetCryptoNewsQuery } = cryptoNewsApi