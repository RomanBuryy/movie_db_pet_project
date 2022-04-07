import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";


export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAll();
            return movies
        } catch (e) {
            console.log(e.message)
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        singleMovie: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action)=>{
            state.status = 'loading'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action)=>{
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action)=>{

        },
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;