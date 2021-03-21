import { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { getMovies } from '../api/moviesApi'
import { ErrorResponse } from '../models/error'
import { FetchMoviesState } from '../models/fetchMoviesState'

export const useFetchMovies = () => {
    const [state, setState] = useState<FetchMoviesState>({
        loading: false,
        data: null,
        error: null,
    })
    const [timer, setTimer] = useState(null)

    const fetchMovies = useCallback(async title => {
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
            const response = await getMovies(title)
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
    }, [timer])

    const effectFetchMovies = useCallback(
        (title: string) => {
            clearTimeout(timer)
            setTimer(setTimeout(() => fetchMovies(title), 500))
        },
        [fetchMovies, timer],
    )

    return { state, effectFetchMovies }
}
