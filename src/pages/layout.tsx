import Login from './login';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toolbar from '@/components/main/toolbar/toolbar';
import { ReduxInterface } from '@/interface/main.interface';
import BreadcrumbsComponent from '@/components/main/breadcrumbs';
function Layout() {
    const redux: ReduxInterface = useSelector((state: any) => state.reducer);
    const login = redux.login;
    return (
        login ? <div className=' h-[95%]'>
            <Toolbar />
            {/* <div className='py-3 px-6 bg-white h-full flex flex-col gap-2'>
                <BreadcrumbsComponent /> */}
                <div className='h-[95%] p-6 bg-white border rounded-md'>
                    <Outlet />
                </div>
            {/* </div> */}
        </div> : <Login />
    )
}

export default Layout