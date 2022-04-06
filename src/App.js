import {Route, Routes} from 'react-router-dom'

import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Layout from "./pages/Layout/Layout";
import GenresPage from "./pages/GenresPage/GenresPage";

function App() {

    return (
        <>
           <Routes>
               <Route path={'/'} element={<Layout/>}>
                   <Route index element={<MoviesPage/>} />
                   <Route path={'genres'} element={<GenresPage/>} />
               </Route>
           </Routes>
        </>
    );
}

export default App;
