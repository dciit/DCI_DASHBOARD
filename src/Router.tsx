// import { ThemeContext } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound';
import Layout from './pages/layout';
import Login from './pages/login';
import Home from './pages/home';
import { base } from './constants';
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`${base}/*`} element={<NotFound />} />
                    <Route path={`${base}/home`} element={<Home />} />
                </Route>
                <Route path={`${base}`} element={<NotFound />} />
                <Route path={`${base}/login`} element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

