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
    const [menu, setmenu] = useState<MenuProps[]>([
        { key: '1', text: 'Manpower', icon: <Groups3OutlinedIcon />, component: <Manpower />, disable: false },
        { key: '2', text: 'APS', icon: <LeaderboardOutlinedIcon />, component: <Aps />, disable: false },
        { key: '3', text: 'Line Effciency', icon: <SsidChartOutlinedIcon />, component: <Effciency />, disable: false },
        { key: '4', text: 'Machine Status', icon: <SpeedOutlinedIcon />, component: <Result />, disable: true },
        { key: '5', text: 'Line-Out', icon: <SyncAltOutlinedIcon />, component: <Result />, disable: true },
        { key: '86', text: 'Problem', icon: <WindPowerOutlinedIcon />, component: <Result />, disable: true },
    ])
    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setOnce(false);
    //     setValue(newValue);
    // };
    useEffect(() => {
        if (once == false) {
            setValue(value);
            setOpenDrawer(true);
        }
    }, [once, value])
    const handleChangeMenu = (menuIndex: number) => {
        setOpenDrawer(true);
        setValue(menuIndex);
    }
    return (
        <div id="dashboard" className="flex flex-col overflow-x-hidden h-[100%]">
            <div className=" grow h-[95%]  bg-green-50 flex items-center justify-center border">
                <div className='h-full w-[95%] bg-blue-200  flex justify-center'>
                    <svg viewBox={`0 0 ${layout.width} ${layout.height}`} preserveAspectRatio="xMidYMid meet">
                        <circle cx="46" cy="45" r="40"></circle>
                    </svg>
                </div>
            </div>
            <div className={`flex-none ${openDrawer == true && ' h-[500px]'} flex flex-col border-r transition-all duration-300`} >
                <div className="flex ">
                    <nav className="flex-1 flex  gap-3 px-6">
                        {
                            menu.map((item, index) => {
                                // return <Tab disabled={item.disable} key={index} label={item.text} iconPosition="start" icon={item.icon} />
                                return <div className={`cursor-pointer select-none py-3 ${value == index ? 'text-[#5c5fc8]' : ''}`} onClick={() => handleChangeMenu(index)}>{item.text}</div>
                            })
                        }
                        <div className={`flex-none flex items-centerpx-[12px] ${openDrawer == true ? '' : 'hidden'}`}>
                            <IconButton onClick={() => {
                                setOpenDrawer(!openDrawer);
                                setOnce(true);
                            }}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </nav>
                </div>
                <div id="content" className={`border-t border-[#eee] p-[14px] h-[100%] ${openDrawer == true ? '' : 'hidden'}`}>
                    {menu[value].component}
                </div>
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