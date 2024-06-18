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
export interface MenuProps {
    key: string;
    text: string;
    icon: any;
    component: any;
    disable: boolean;
}
function Home() {
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
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setOnce(false);
        setValue(newValue);
    };
    useEffect(() => {
        if (once == false) {
            setValue(value);
            setOpenDrawer(true);
        }
    }, [once, value])
    const handleChangeFac = (event: React.SyntheticEvent, newValue: number) => {
        setValueFac(newValue);
    };
    const handleChangeProcess = (event: React.SyntheticEvent, newValue: number) => {
        setValueProcess(newValue);
    }
    return (
        <div className="flex flex-col gap-2 h-[100%]">
            <div id="view" className="grow">

            </div>
            <div id="drawer" className={`${openDrawer == true ? 'h-[500px] ' : 'flex-none'} border-t`}>

                <div className=" bg-white flex items-center">
                    <div className="grow">
                        <Tabs
                            value={once == true ? null : value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {
                                menu.map((item, index) => {
                                    return <Tab disabled={item.disable} key={index} label={item.text} iconPosition="start" icon={item.icon} />
                                })
                            }
                        </Tabs>
                    </div>
                    <div className={`flex-none px-[12px] ${openDrawer == true ? '' : 'hidden'}`}>
                        <IconButton onClick={() => {
                            setOpenDrawer(!openDrawer);
                            setOnce(true);
                        }}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                <div id="content" className={`bg-[#f5f5f5] h-[100%] ${openDrawer == true ? '' : 'hidden'}`}>
                    {menu[value].component}
                </div>
            </div>
            {/* <div className="grow rounded-md border">
                <div id="tabFactory" className="flex gap-6">
                    <div className="flex flex-none">
                        <div className="flex-none flex bg-[#5c5fc8] text-[#f1f1f1] px-[14px] items-center justify-center ">Factory</div>
                        <Tabs
                            value={valueFac}
                            onChange={handleChangeFac}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {
                                ['1', '2', '3'].map((item, index) => {
                                    return <Tab key={index} label={`FAC ${item}`} />
                                })
                            }
                        </Tabs>
                    </div>
                    <div className="flex flex-none">
                        <div className="flex-none flex bg-[#5c5fc8] text-[#f1f1f1] px-[14px] items-center justify-center ">Process</div>
                        <Tabs
                            value={valueProcess}
                            onChange={handleChangeProcess}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {
                                ['MACHINE', 'MECHA', 'MAIN', 'FINAL'].map((item, index) => {
                                    return <Tab key={index} label={` ${item}`} />
                                })
                            }
                        </Tabs>
                    </div>

                </div>
                <div>
                    content
                </div>
            </div>
            <div className={`flex-none border-t border-x overflow-y-auto`}>
                <div className=" bg-white">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            menu.map((item, index) => {
                                return <Tab disabled={item.disable} key={index} label={item.text} iconPosition="start" icon={item.icon} />
                            })
                        }
                    </Tabs>
                </div>
                <div id="content" className="bg-[#f5f5f5] h-[100%]">
                    {menu[value].component}
                </div>
            </div> */}
        </div>
    )
}

export default Home