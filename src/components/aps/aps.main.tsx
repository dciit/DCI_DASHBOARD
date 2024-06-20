import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ApsMainProps } from '@/interface/aps.interface';
import { CircularProgress } from '@mui/material';
import { ApsMainGetData } from '@/service/aps.service';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import moment from 'moment';
function ApsMain() {
    let dateformat = 'DD/MM/YYYY';
    const [dataMain, setDataMain] = useState<ApsMainProps[]>([]);
    const [dataFinal, setDataFinal] = useState<ApsMainProps[]>([]);
    const [load, setLoad] = useState<boolean>(true);
    const [date, setDate] = useState<string>(moment().format(dateformat));
    useEffect(() => {
        init();
    }, [])
    const init = async () => {
        try {
            setLoad(true)
            await fetchData();
            setLoad(false)
        } catch (error: any) {
            alert(error.message)
        }
    }

    const fetchData = async () => {
        try {
            setLoad(true);
            const res = await ApsMainGetData(moment(date, dateformat).format('YYYYMMDD'));
            setDataMain(res.filter((o: ApsMainProps) => o.subline == 'ASSEMBLY LINE4 (SCR)'))
            setDataFinal(res.filter((o: ApsMainProps) => o.subline == 'FINAL-ASSEMBLY LINE4 (SCR)'))
            setLoad(false);
        } catch (error: any) {
            alert(error.message)
        }
    }
    useEffect(() => {
        fetchData();
    }, [date])
    return (
        <div className='p-3' id='aps'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='border text-center' colSpan={14}>
                            <div className='flex items-center justify-center'>
                                <span>Scroll</span>
                                <div className='flex justify-center py-2 cursor-pointer select-none'>
                                    <div onClick={() => setDate((prev) => moment(prev, dateformat).add('days', -1).format(dateformat))}><ChevronLeftIcon className='hover:scale-110 transition-all duration-300' /></div>
                                    <div>{date}</div>
                                    <div onClick={() => setDate((prev) => moment(prev, dateformat).add('days', 1).format(dateformat))}> <ChevronRightIcon className='hover:scale-110 transition-all duration-300' /></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='border text-center py-2' colSpan={7}>Main</td>
                        <td className='border text-center py-2' colSpan={7}>Final</td>
                    </tr>
                    <tr>
                        <td className='border text-center py-2'>SEQUENCE</td>
                        <td className='border text-center py-2'>WCNO</td>
                        <td className='border text-center py-2'>MODEL CODE	</td>
                        <td className='border text-center py-2'>PartNo</td>
                        <td className='border text-center py-2'>Plan</td>
                        <td className='border text-center py-2'>Actual</td>
                        <td className='border text-center py-2'> Remark</td>
                        <td className='border text-center py-2'>SEQUENCE</td>
                        <td className='border text-center py-2'>WCNO</td>
                        <td className='border text-center py-2'>MODEL CODE	</td>
                        <td className='border text-center py-2'>PartNo</td>
                        <td className='border text-center py-2'>Plan</td>
                        <td className='border text-center py-2'>Actual</td>
                        <td className='border text-center py-2'> Remark</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        load ? <tr><td className='border' colSpan={14}><div className='flex flex-col justify-center items-center py-3'>
                            <CircularProgress />
                            <span>กำลังโหลดข้อมูล</span>
                        </div></td></tr> : [...Array(dataMain.length > dataFinal.length ? dataMain.length : dataFinal.length)].map((_: any, index: number) => {
                            return <>
                                <tr key={index}>
                                    {
                                        typeof dataMain[index] !== 'undefined' ? <>
                                            <td className='border text-center'>{index + 1}</td>
                                            <td className='border text-center'>{dataMain[index].p_wcno}</td>
                                            <td className='border text-center'>{dataMain[index].p_modelcode}</td>
                                            <td className='border text-center'>{dataMain[index].p_model}</td>
                                            <td className='border text-center'>{dataMain[index].p_planqty}</td>
                                            <td className='border text-center'>-</td>
                                            <td className='border text-center'>
                                                <div className='flex justify-center bg-red-50 border border-red-300 w-fit rounded-md px-3 text-red-500 cursor-pointer select-none shadow-md'>
                                                    <EditOutlinedIcon />
                                                </div>
                                            </td>
                                        </> : <>
                                            <td colSpan={7} className='border '></td>
                                        </>
                                    }
                                    {
                                        typeof dataFinal[index] !== 'undefined' && <>
                                            <td className='border text-center'>{index + 1}</td>
                                            <td className='border text-center'>{dataFinal[index].p_wcno}</td>
                                            <td className='border text-center'>{dataFinal[index].p_modelcode}</td>
                                            <td className='border text-center'>{dataFinal[index].p_model}</td>
                                            <td className='border text-center'>{dataFinal[index].p_planqty}</td>
                                            <td className='border text-center'>-</td>
                                            <td className='border text-center'>
                                                <div className='flex justify-center bg-red-50 border border-red-300 w-fit rounded-md px-3 text-red-500 cursor-pointer select-none shadow-md'>
                                                    <EditOutlinedIcon />
                                                </div>
                                            </td>
                                        </>
                                    }
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApsMain