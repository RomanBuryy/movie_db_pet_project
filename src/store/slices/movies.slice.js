import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getAll();

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getMovieDetails = createAsyncThunk(
    'moviesSlice/getMovieDetails',
    async(id,{rejectWithValue}) =>{
        try {
            return await movieService.getById(id);
        }catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getAllGenres();

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getAllMoviesWithGenre = createAsyncThunk(
    'moviesSlice/getAllMoviesWithGenre',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getMoviesWithGenres(id);

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)





const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        singleMovie: [],
        genresList: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            // add error handlers
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.singleMovie = action.payload
            console.log(action.payload)
        },

        [getAllGenres.fulfilled]: (state, action) =>{
            state.genresList = action.payload
        },

        [getAllMoviesWithGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload.results
        }
    }
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;