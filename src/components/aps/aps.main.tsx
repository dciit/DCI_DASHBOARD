import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ApsMainProps } from '@/interface/aps.interface';
import { CircularProgress } from '@mui/material';
import { ApsMainGetData } from '@/service/aps.service';

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
            <p>ApsMain</p>
            <div className='flex justify-center py-2 cursor-pointer select-none'>
                <ChevronLeftIcon className='hover:scale-110 transition-all duration-300' />
                <div>Date : {new Date().toLocaleDateString()}</div>
                <ChevronRightIcon className='hover:scale-110 transition-all duration-300' />
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='border'>SEQUENCE</th>
                        <th className='border'>WCNO</th>
                        <th className='border'>MODEL CODE	</th>
                        <th className='border'>PartNo</th>
                        <th className='border'>Plan</th>
                        <th className='border'>Actual</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        load ? <tr><td className='border' colSpan={6}><div className='flex flex-col justify-center items-center py-3'>
                            <CircularProgress />
                            <span>กำลังโหลดข้อมูล</span>
                        </div></td></tr> :
                            (
                                main.length == 0 ? <div>ไม่พบข้อมูล</div> :
                                    main.map((item, index) => (
                                        <tr key={index}>
                                            <td className='border'>{item.sequnce}</td>
                                            <td className='border'>{item.wcno}</td>
                                            <td className='border'>{item.model}</td>
                                            <td className='border'>{item.partno}</td>
                                            <td className='border'>{item.plan}</td>
                                            <td className='border'>{item.actual}</td>
                                        </tr>
                                    ))
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApsMain