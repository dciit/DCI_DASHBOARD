import { Box, Tabs, Tab, IconButton } from "@mui/material"
import { useEffect, useState } from "react";
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import Result from "@/components/result";
import Manpower from "./manpower";
import Aps from "./aps";
import Effciency from "./effciency";
import { LayoutProps } from "@/interface/home.interface";
export interface MenuProps {
    key: string;
    text: string;
    icon: any;
    component: any;
    disable: boolean;
}

function Home() {
    const [layout, setLayout] = useState<LayoutProps>({
        width: 1200, height: 400
    });
    const [once, setOnce] = useState<boolean>(true);
    const [value, setValue] = useState<number>(0);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const [valueFac, setValueFac] = useState<number>(0)
    const [valueProcess, setValueProcess] = useState<number>(0);
    const [openComponent, setOpenComponent] = useState<boolean>(false);
    const [componentSelected, setComponentSelected] = useState<number | null>(null);
    const [menu, setmenu] = useState<MenuProps[]>([
        { key: '1', text: 'Manpower', icon: <Groups3OutlinedIcon sx={{ fontSize: '18px' }} />, component: <Manpower />, disable: false },
        { key: '2', text: 'APS', icon: <LeaderboardOutlinedIcon sx={{ fontSize: '18px' }} />, component: <Aps />, disable: false },
        { key: '3', text: 'Line Effciency', icon: <SsidChartOutlinedIcon sx={{ fontSize: '18px' }} />, component: <Effciency />, disable: false },
        { key: '4', text: 'Machine Status', icon: <SpeedOutlinedIcon sx={{ fontSize: '18px' }} />, component: <Result />, disable: true },
        { key: '5', text: 'Line-Out', icon: <SyncAltOutlinedIcon sx={{ fontSize: '18px' }} />, component: <Result />, disable: true },
        { key: '86', text: 'Problem', icon: <WindPowerOutlinedIcon sx={{ fontSize: '18px' }} />, component: <Result />, disable: true },
    ])
    useEffect(() => {
        if (once == false) {
            setValue(value);
            setOpenDrawer(true);
        }
    }, [once, value])

    useEffect(()=>{
        if(openComponent == false){
            setComponentSelected(null);
        }
    },[openComponent])
    useEffect(() => {
        if (componentSelected != null) {
            setOpenComponent(true);
        } else {
            setOpenComponent(false);
        }
    }, [componentSelected])
    const handleChangeMenu = (menuIndex: number) => {
        setOpenDrawer(true);
        setValue(menuIndex);
    }

    return (
        <div id="dashboard" className="flex flex-col overflow-x-hidden h-[100%]">
            <div className=" grow h-[95%]  flex items-center justify-center border bg-gray-50 p-6  ">
                <div className='h-full w-[100%]   flex justify-center bg-[#ffffff] border  rounded-lg'>
                    <svg viewBox={`0 0 ${layout.width} ${layout.height}`} preserveAspectRatio="xMidYMid meet">
                        <circle cx="46" cy="45" r="40"></circle>
                    </svg>
                </div>
            </div>
            <div className={`flex-none ${openDrawer == true && ' h-[500px]'} bg-[#fffff] flex flex-col border-r transition-all duration-1000`} >
                <div className="flex ">
                    <nav className="flex-1 flex">
                        <div className="grow flex">
                            {
                                menu.map((item, index) => {
                                    // return <Tab disabled={item.disable} key={index} label={item.text} iconPosition="start" icon={item.icon} />
                                    return <div className={`flex items-center justify-center gap-2  cursor-pointer select-none py-3 min-w-[100px] text-center px-[14px] ${value == index ? 'text-[#5c5fc8] border-b-2 border-[#5c5fc8]   font-semibold' : 'text-[#5f5f5f]'} ${item.disable == true ? ' opacity-40 cursor-not-allowed' : ''}`} onClick={() => setComponentSelected(index)} key={index}>
                                        {item.icon}
                                        <div className=" text-[14px]">{item.text}</div>
                                    </div>
                                })
                            }
                        </div>
                        <div className={`flex-none flex min-w-[50px] justify-center items-centerpx-[12px] items-center cursor-pointer select-none hover:bg-[#ddd] ${openDrawer == true ? '' : 'hidden'}`} onClick={() => {
                            setOpenDrawer(!openDrawer);
                            setValue(0);
                            setOnce(true);
                        }}>
                            <CloseIcon />
                        </div>
                    </nav>
                </div>
                {/* <div id="content" className={`bg-gray-50 border-t border-[#eee] p-[14px] h-[100%] ${openDrawer == true ? '' : 'hidden'}`}>
                    {menu[value].component}
                </div> */}
                {/* <div id="content" className={`bg-gray-50 border-t border-[#eee] p-[14px] h-[100%]`}>
                    {menu[value].component}
                </div> */}
                {
                    (openComponent == true && componentSelected == 0) && <Manpower />
                }
                {
                    (openComponent == true && componentSelected == 1) && <Aps openComponent={openComponent} setOpenComponent={setOpenComponent} />
                }
                {
                    (openComponent == true && componentSelected == 1) && <Effciency />
                }
            </div>
        </div >
        // <div className="flex flex-col gap-2 h-[100%]">
        //     <div id="view" className={`grow flex items-center justify-center bg-blue-50`}>
        //         <div className="w-[80%] h-[80%]">
        //             <svg
        //                 id="svgContent"
        //                 className="bg-red-50"
        //                 viewBox={`0 0 ${layout.width} ${layout.height}`}
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 preserveAspectRatio="xMidYMid meet"
        //             >
        //                 <circle r="45" cx="50" cy="50" fill="red" />
        //             </svg>
        //         </div>
        //     </div>
        //     <div id="drawer" className={`${openDrawer == true ? 'h-[60%] ' : 'flex-none'} border-t`}>
        //         <div className=" bg-white flex items-center">
        //             <div className="grow">
        //                 <Tabs
        //                     value={once == true ? null : value}
        //                     onChange={handleChange}
        //                     variant="scrollable"
        //                     scrollButtons="auto"
        //                     aria-label="scrollable auto tabs example"
        //                 >
        //                     {
        //                         menu.map((item, index) => {
        //                             return <Tab disabled={item.disable} key={index} label={item.text} iconPosition="start" icon={item.icon} />
        //                         })
        //                     }
        //                 </Tabs>
        //             </div>
        //             <div className={`flex-none px-[12px] ${openDrawer == true ? '' : 'hidden'}`}>
        //                 <IconButton onClick={() => {
        //                     setOpenDrawer(!openDrawer);
        //                     setOnce(true);
        //                 }}>
        //                     <CloseIcon />
        //                 </IconButton>
        //             </div>
        //         </div>
        //         <div id="content" className={`border-t border-[#eee] p-[14px] h-[100%] ${openDrawer == true ? '' : 'hidden'}`}>
        //             {menu[value].component}
        //         </div>
        //     </div>

        // </div>
    )
}

export default Home