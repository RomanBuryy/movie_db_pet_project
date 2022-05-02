import {Route, Routes, Navigate} from 'react-router-dom'

import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Layout from "./pages/Layout/Layout";
import GenresListPage from "./pages/GenresListPage/GenresListPage";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";


import CurrentGenreMoviesList from "./pages/CurrentGenreMoviesList/CurrentGenreMoviesList";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'/movies/:id'} element={<SingleMoviePage/>}/>
                    <Route path={'genres'} element={<GenresListPage/>}>
                        <Route path={':id'} element={<CurrentGenreMoviesList/>}>
                            <Route path={':id'} element={<SingleMoviePage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
