import { ViApsPartMasterProps } from '@/interface/aps.interface';
import { ViApsPartMaster } from '@/service/aps.service';
import React, { useEffect, useState } from 'react'

function ApsScr() {
    let schemas: string[] = ['Start Time', 'Plan'];
    const [maininout, setMaininout] = useState<ViApsPartMasterProps[]>([]);
    useEffect(() => {
        initData();
    }, [])

    const initData = async () => {
        let api = await ViApsPartMaster();
        setMaininout(api);
    }
    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='border text-center' rowSpan={3}>Line</td>
                        <td className='border text-center' rowSpan={3}>MODEL</td>
                        <td className='border text-center' rowSpan={3}>W/C</td>
                        <td className='border text-center' rowSpan={3}>PART NO</td>
                        <td className='border text-center' rowSpan={3}>CM</td>
                        <td className='border text-center' colSpan={7}>IN</td>
                        <td className='border text-center' colSpan={3}>OUT</td>
                        <td className='border text-center' rowSpan={3}>Current Stock Main</td>
                    </tr>
                    <tr>
                        <td className='border text-center' colSpan={3}>Day</td>
                        <td className='border text-center' colSpan={3}>Night</td>
                        <td className='border text-center' colSpan={2}>Other</td>
                        <td className='border text-center' rowSpan={2}>Gas Tight</td>
                        <td className='border text-center'>Other</td>
                    </tr>
                    <tr>
                        <td className='border text-center'>PLAN</td>
                        <td className='border text-center'>ACT.</td>
                        <td className='border text-center'>ALL</td>
                        <td className='border text-center'>PLAN</td>
                        <td className='border text-center'>ACT.</td>
                        <td className='border text-center'>ALL</td>
                        <td className='border text-center'>REWORK</td>
                        <td className='border text-center'>NG</td>
                        <td className='border text-center'>SAMPING</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        maininout.map((item: ViApsPartMasterProps, index: number) => {
                            return <tr key={index}>
                                <td className='border text-center'>{item.model}</td>
                                <td className='border text-center'>{item.partCode}</td>
                                <td className='border text-center'>{item.wcno}</td>
                                <td className='border text-center'>{item.partno}</td>
                                <td className='border text-center'>{item.cm}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApsScr