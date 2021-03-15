import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ErrorResponse } from '../models/error'
import { FetchMoviesState } from '../models/fetchMoviesState'
import { MovieResponse } from '../models/movie'

const api = axios.create({
    baseURL: process.env.BASE_URL,
})

export const fetchMovies = () => {
    const [state, setState] = useState<FetchMoviesState>({
        loading: false,
        data: null,
        error: null,
    })
    let timer = null

    const useFetchMovies = useCallback(async title => {
        if (!title) {
            setState({
                loading: false,
                data: null,
                error: null,
            })
            return
        }

        setState({
            loading: true,
            data: null,
            error: null,
        })
        try {
            const response = await api.get<MovieResponse>(`/api/movies`, {
                params: { title },
            })
            setState({
                loading: false,
                data: response.data,
                error: null,
            })
        } catch (e: unknown) {
            setState({
                loading: false,
                data: null,
                error: (<AxiosError<ErrorResponse>>e).response.data,
            })
        }
    }, [])

    useEffect(() => {
        return () => clearTimeout(timer)
    }, [])

    const effectFetchMovies = useCallback((title: string) => {
        clearTimeout(timer)
        timer = setTimeout(() => useFetchMovies(title), 500)
    }, [])

    return { state, effectFetchMovies }
}
