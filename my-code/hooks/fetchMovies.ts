import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const fetchMovies = () => {
    const [state, setState] = useState<{
        loading: boolean
        data: any
        error: any
    }>({
        loading: false,
        data: {},
        error: null,
    })
    let timer = null

    const useFetchMovies = useCallback(async title => {
        if (!title) {
            setState({
                loading: false,
                data: {},
                error: null,
            })
            return
        }

        setState({
            loading: true,
            data: {},
            error: null,
        })
        try {
            const response = await api.get(`/api/movies`, { params: { title } })
            setState({
                loading: false,
                data: response.data,
                error: null,
            })
        } catch (e) {
            setState({
                loading: false,
                data: {},
                error: e,
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
