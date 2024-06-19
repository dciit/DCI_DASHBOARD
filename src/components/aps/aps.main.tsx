import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ApsMainProps } from '@/interface/aps.interface';
import { CircularProgress } from '@mui/material';
import { ApsMainGetData } from '@/service/aps.service';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function ApsMain() {
    const [main, setMain] = useState<ApsMainProps[]>([]);
    const [load, setLoad] = useState<boolean>(true);
    useEffect(() => {
        init();
    }, [])
    const init = async () => {
        try {
            setLoad(true)
            const res = await ApsMainGetData();
            console.log(res)
            setMain(res);
            setLoad(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='flex justify-center py-2 cursor-pointer select-none'>
                <ChevronLeftIcon className='hover:scale-110 transition-all duration-300' />
                <ChevronRightIcon className='hover:scale-110 transition-all duration-300' />
            </div>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <td className='border text-center ' colSpan={7} >MAIN</td>
                            </tr>
                            <tr>
                                <td className='border text-center'>SEQUENCE</td>
                                <td className='border text-center'>WCNO</td>
                                <td className='border text-center'>MODEL CODE	</td>
                                <td className='border text-center'>PartNo</td>
                                <td className='border text-center'>Plan</td>
                                <td className='border text-center'>Actual</td>
                                <td className='border text-center'> Remark</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                load ? <tr><td className='border' colSpan={14}><div className='flex flex-col justify-center items-center py-3'>
                                    <CircularProgress />
                                    <span>กำลังโหลดข้อมูล</span>
                                </div></td></tr> :
                                    (
                                        main.filter((o: ApsMainProps) => o.subline == 'ASSEMBLY LINE4 (SCR)').length == 0 ? <div>ไม่พบข้อมูล</div> :
                                            main.filter((o: ApsMainProps) => o.subline == 'ASSEMBLY LINE4 (SCR)').map((item: ApsMainProps, index: number) => {
                                                return <tr key={index}>
                                                    <td className='border text-center'>{index + 1}</td>
                                                    <td className='border text-center'>{item.p_wcno}</td>
                                                    <td className='border text-center'>{item.p_modelcode}</td>
                                                    <td className='border text-center'>{item.p_model}</td>
                                                    <td className='border text-center'>{item.p_planqty}</td>
                                                    <td className='border text-center'>-</td>
                                                    <td className='border text-center'>
                                                        <div className='flex justify-center bg-red-50 border border-red-300 w-fit rounded-md px-3 text-red-500 cursor-pointer select-none shadow-md'>
                                                            <EditOutlinedIcon />
                                                            <div>หมายเหตุ</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                    )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-span-1'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <td className='border text-center ' colSpan={7} >FINAL</td>
                            </tr>
                            <tr>
                                <td className='border text-center'>SEQUENCE</td>
                                <td className='border text-center'>WCNO</td>
                                <td className='border text-center'>MODEL CODE	</td>
                                <td className='border text-center'>PartNo</td>
                                <td className='border text-center'>Plan</td>
                                <td className='border text-center'>Actual</td>
                                <td className='border text-center'> Remark</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                load ? <tr><td className='border' colSpan={14}><div className='flex flex-col justify-center items-center py-3'>
                                    <CircularProgress />
                                    <span>กำลังโหลดข้อมูล</span>
                                </div></td></tr> :
                                    (
                                        main.filter((o: ApsMainProps) => o.subline == 'FINAL-ASSEMBLY LINE4 (SCR)').length == 0 ? <div>ไม่พบข้อมูล</div> :
                                            main.filter((o: ApsMainProps) => o.subline == 'FINAL-ASSEMBLY LINE4 (SCR)').map((item: ApsMainProps, index: number) => {
                                                return <tr key={index}>
                                                    <td className='border text-center'>{index + 1}</td>
                                                    <td className='border text-center'>{item.p_wcno}</td>
                                                    <td className='border text-center'>{item.p_modelcode}</td>
                                                    <td className='border text-center'>{item.p_model}</td>
                                                    <td className='border text-center'>{item.p_planqty}</td>
                                                    <td className='border text-center'>-</td>
                                                    <td className='border text-center'>
                                                        <div className='flex justify-center bg-red-50 border border-red-300 w-fit rounded-md px-3 text-red-500 cursor-pointer select-none shadow-md'>
                                                            <EditOutlinedIcon />
                                                            <div>หมายเหตุ</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApsMain