import { Box, Tabs, Tab } from "@mui/material"
import { useState } from "react";
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import Result from "@/components/result";
export interface MenuProps {
    key: string;
    text: string;
    icon: any;
    component: any;
}
function Home() {
    const [value, setValue] = useState<number>(0);
    const [valueFac, setValueFac] = useState<number>(0)
    const [valueProcess, setValueProcess] = useState<number>(0)
    const [menu, setmenu] = useState<MenuProps[]>([
        { key: '1', text: 'Result', icon: <LeaderboardOutlinedIcon />, component: 'Result' },
        { key: '2', text: 'Line Effciency', icon: <SsidChartOutlinedIcon />, component: <Result /> },
        { key: '3', text: 'Productivity', icon: <TrendingUpOutlinedIcon />, component: <Result /> },
        { key: '4', text: 'Machine Status', icon: <SpeedOutlinedIcon />, component: <Result /> },
        { key: '5', text: 'Manpower', icon: <Groups3OutlinedIcon />, component: <Result /> },
        { key: '6', text: 'Check-In', icon: <CheckBoxOutlinedIcon />, component: <Result /> },
        { key: '7', text: 'Line-Out', icon: <SyncAltOutlinedIcon />, component: <Result /> },
        { key: '8', text: 'Problem', icon: <WindPowerOutlinedIcon />, component: <Result /> },
    ])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeFac = (event: React.SyntheticEvent, newValue: number) => {
        setValueFac(newValue);
    };
    const handleChangeProcess = (event: React.SyntheticEvent, newValue: number) => {
        setValueProcess(newValue);
    }
    return (
        <div className="flex flex-col gap-2 h-full">
            <div className="min-h-[350px] rounded-md border flex-none">
                <div id="tabFactory" className="flex gap-3">
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
            <div className={`border-t border-x grow overflow-y-auto`}>
                <div className="sticky top-0 bg-white">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {/* <Tab label="Result" />
                        <Tab label="Line Effciency" />
                        <Tab label="Productivity (%)" />
                        <Tab label="Machine Status" />
                        <Tab label="Manpower" />
                        <Tab label="Check-In" />
                        <Tab label="Line-Out" />
                        <Tab label="Problem" />
                        <Tab label="Energy" /> */}
                        {
                            menu.map((item, index) => {
                                return <Tab key={index} label={item.text} iconPosition="start" icon={item.icon} />
                            })
                        }
                    </Tabs>
                </div>
                <div id="content" className="bg-[#f5f5f5] h-[100%]">
                    {menu[value].component}
                </div>
            </div>
        </div>
    )
}

export default Home