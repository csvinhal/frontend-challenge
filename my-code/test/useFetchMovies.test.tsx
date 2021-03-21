import { act, renderHook } from '@testing-library/react-hooks'
import { AxiosResponse } from 'axios'
import * as moviesApi from '../api/moviesApi'
import { useFetchMovies } from '../hooks/useFetchMovies'
import moviesJson from './pages/__mocks__/movies.json'

const axiosResponse: AxiosResponse = {
    data: moviesJson,
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
}

describe('useFetchMovies hook', () => {
    it('should initial data state not loading, data and error null', () => {
        const { result } = renderHook(() => useFetchMovies())

        expect(result.current.state).toStrictEqual({
            loading: false,
            data: null,
            error: null,
        })
    })

    test('data is fetched and loading is complete', async () => {
        jest.spyOn(moviesApi, 'getMovies').mockImplementation(() => {
            return Promise.resolve(axiosResponse)
        })

        const { result, waitForNextUpdate } = renderHook(() => useFetchMovies())

        act(() => {
            result.current.effectFetchMovies('What')
        })

        await waitForNextUpdate()

        expect(result.current.state).toStrictEqual({
            loading: false,
            data: moviesJson,
            error: null,
        })
    })
})
