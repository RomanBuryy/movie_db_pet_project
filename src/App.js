import {Route, Routes, Navigate} from 'react-router-dom'

import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Layout from "./pages/Layout/Layout";
import GenresPage from "./pages/GenresPage/GenresPage";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";

function App() {

    return (
        <>
           <Routes>
               <Route path={'/'} element={<Layout/>}>
                   <Route index element={<Navigate to={'movies'}/>} />
                   <Route path={'movies'} element={<MoviesPage/>} />
                   <Route path={'/movies/:id'} element={<SingleMoviePage/>} />
                   <Route path={'genres'} element={<GenresPage/>} />
               </Route>
           </Routes>
        </>
    );
}

export default App;
