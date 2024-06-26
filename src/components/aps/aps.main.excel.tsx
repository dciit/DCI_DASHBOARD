import { ApsMainInterActiveProps, ApsMainProps, ApsMainSequenceProps, ApsProductionPlanProps, GasTightProps } from '@/interface/aps.interface';
import { API_APS_PRODUCTION_PLAN, API_GET_GASTIGHT, ApsMainGetData } from '@/service/aps.service';
import { CircularProgress } from '@mui/material';
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ApsDialogNotice from './aps.dialog.notice';
import ApsDialogAddSequence from './aps.dialog.add.sequence';
function ApsMainExcel() {
    let dtNow: any = moment();
    let hour: number = dtNow.hour();
    const [modelUse, setModelUse] = useState<string>('');
    let dateformat = 'DD/MM/YYYY';
    const [load, setLoad] = useState<boolean>(true);
    const [date, setDate] = useState<string>(moment().format(dateformat));
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [planSelected, setPlanSelected] = useState<ApsProductionPlanProps>({});
    const [openDialogNotice, setOpenDialogNotice] = useState<boolean>(false);
    const [openDialogAddSequence, setOpenDialogAddSequence] = useState<boolean>(false);
    const [sequence, setSequence] = useState<ApsMainSequenceProps[]>([]);
    const [apsProductionPlan, setApsProductionPlan] = useState<ApsProductionPlanProps[]>([]);
    const [gasTight, setGasTight] = useState<GasTightProps[]>([]);
    let dateLoop: string = '';
    useEffect(() => {
        init();
    }, [])
    useEffect(() => {
        console.log(modelUse)
    }, [modelUse])
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
            const resApsProductionPlan = await API_APS_PRODUCTION_PLAN();
            setApsProductionPlan(resApsProductionPlan);
            const resGasTight = await API_GET_GASTIGHT(dtNow.format('YYYYMMDD'));
            setGasTight(resGasTight);
            setLoad(false);
        } catch (error: any) {
            alert(error.message)
        }
    }
    useEffect(() => {
        if (openDialogNotice == false) {
            setPlanSelected({})
        }
    }, [openDialogNotice])
    // useEffect(() => {
    //     if (apsProductionPlan.length) {
    //         setModelUse(apsProductionPlan[apsProductionPlan.length - 1].partNo);
    //     }
    // }, [apsProductionPlan])
    useEffect(() => {
        if (gasTight.length) {
            let copyGasTight = Array.from(gasTight);
            setModelUse(copyGasTight.pop()?.modelName);
        }
    }, [gasTight])
    useEffect(() => {
        fetchData();
    }, [date])
    useEffect(() => {
        if (Object.keys(planSelected).length > 0) {
            setOpenDialogNotice(true);
        }
    }, [planSelected])
    return (
        <div className=' gap-6 grid sm:grid-cols-1 md:grid-cols-5 p-3'>
            <div className='sm:col-span-1 md:col-span-2 text-[12px] flex flex-col gap-2'>
                <div className='font-semibold text-[18px]'>
                    Main Scroll Monitor
                </div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <td className='border text-center bg-[#5c5fc8] text-white py-3' colSpan={6}>Sequence Main Assy</td>
                        </tr>
                        <tr>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>ลำดับ</td>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>Model</td>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>วันที่</td>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>APS Plan</td>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>PD Plan</td>
                            <td className='border text-center py-2 bg-[#5c5fc8] text-white'>#</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            load ? <tr><td className='border' colSpan={27}><div className='flex flex-col justify-center items-center py-3'>
                                <CircularProgress />
                                <span>กำลังโหลดข้อมูล</span>
                            </div></td></tr>
                                : <>

                                    {
                                        apsProductionPlan.map((o: ApsProductionPlanProps, i: number) => {
                                            let groupModelIsUse = apsProductionPlan.map((o: ApsProductionPlanProps) => o.partNo);
                                            groupModelIsUse = [...new Set(groupModelIsUse)];
                                            // let bg: string = modelUse == o.partNo ? 'bg-yellow-300' : (groupModelIsUse.includes(o.partNo) ? 'bg-green-400' : '')
                                            let header: boolean = false;
                                            if (dateLoop == '' || dateLoop != moment(o.apsPlanDate).format('DD/MM/YYYY')) {
                                                header = true;
                                                dateLoop = moment(o.apsPlanDate).format('DD/MM/YYYY');
                                            }
                                            let dtNow = moment().format('DD/MM/YYYY');
                                            let event = dateLoop == dtNow ? true : false;
                                            let rowInProcess = ((o.partNo.includes(modelUse)) && event) ? true : false;
                                            return <>
                                                {
                                                    header && <tr>
                                                        <td colSpan={6} className={`border px-3 py-2 font-semibold ${dateLoop == dtNow ? 'bg-yellow-100' : 'bg-[#5c5fc810]'}`}>
                                                            <div className='flex gap-2 items-center'>
                                                                {
                                                                    dateLoop == dtNow && <span className="relative flex h-3 w-3">
                                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5fc8] opacity-75"></span>
                                                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5c5fc8]"></span>
                                                                    </span>
                                                                }
                                                                <span>{dateLoop}</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                }
                                                <tr key={i} className={`cursor-pointer select-none ${dateLoop != dtNow && 'opacity-60'} ${rowInProcess && 'bg-yellow-50'}`} onClick={() => event ? setPlanSelected(o) : false}>
                                                    <td className={`border text-center ${rowInProcess && 'bg-yellow-400  font-semibold '}`} >{o.prdSeq}</td>
                                                    <td className={`border pl-3 ${rowInProcess && 'bg-yellow-300'} font-bold`}>{o.partNo}</td>
                                                    <td className='border text-center  font-semibold'>{moment(o.apsPlanDate).format('DD/MM/YYYY')}</td>
                                                    <td className='border text-center p-2'>
                                                        <div className='px-[8px] pt-[3px] pb-[2px]  rounded-lg font-semibold '>{o.apsPlanQty}</div>
                                                    </td>
                                                    <td className='border text-center p-2'>
                                                        <div className={`px-[8px] pt-[3px] pb-[2px]  rounded-lg border-dashed font-semibold  border-2 border-[#4caf50] text-[#3f9642]  bg-[#4caf5030]`}>{o.prdPlanQty}</div>
                                                    </td>
                                                    <td className='border text-center'></td>
                                                </tr>
                                            </>
                                        })
                                    }
                                    <tr >
                                        <td className='border text-center p-3 bg-[#5c5fc850]' colSpan={6} onClick={() => setOpenDialogAddSequence(true)}>
                                            <div className='bg-white border-2 border-dashed rounded-lg border-[#5c5fc8] p-3 text-[#5c5fc8] flex justify-center select-none cursor-pointer items-center gap-3'>
                                                <AddCircleOutlineOutlinedIcon />
                                                <div>เพิ่ม Sequence</div>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                        }
                    </tbody>
                </table>
            </div>
            <div className='w-[65%]'>
                <table className='w-full text-[14px]'>
                    <thead>
                        <tr>
                            <td className='border w-[75%] pl-3' colSpan={23}>ข้อมูลเมื่อ : {dtNow.format('DD MMM YYYY')}</td>
                        </tr>
                        <tr>
                            <td className='border text-center' rowSpan={2}>Model no</td>
                            <td className='border text-center' rowSpan={2}>Model</td>
                            <td className='border text-center' rowSpan={2}>Result</td>
                            <td className='border text-center' rowSpan={2}>Time</td>
                            <td className='border text-center' colSpan={2}>Stator</td>
                            <td className='border text-center' colSpan={2}>Rotor</td>
                            <td className='border text-center' colSpan={2}>Housing</td>
                            <td className='border text-center' colSpan={2}>Crank Shaft</td>
                            <td className='border text-center' colSpan={2}>FS/OS</td>
                            <td className='border text-center' colSpan={2}>Lower</td>
                            <td className='border text-center' colSpan={2}>Pipe</td>
                            <td className='border text-center' colSpan={2}>Top</td>
                            <td className='border text-center' colSpan={2}>Bottom</td>
                        </tr>
                        <tr>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>Motor</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>Motor</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>M/C</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>M/C</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>M/C</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>M/C</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>Casing</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>Casing</td>
                            <td className='border text-center py-2'>Main</td>
                            <td className='border text-center py-2'>Casing</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            load ? <tr><td className='border' colSpan={27}><div className='flex flex-col justify-center items-center py-3'>
                                <CircularProgress />
                                <span>กำลังโหลดข้อมูล</span>
                            </div></td></tr>
                                : gasTight.map((o: GasTightProps, i: number) => {
                                    // 'JT16KBVDYR@TF'
                                    let bg: string = i == (gasTight.length - 1) ? 'bg-yellow-400' : 'bg-green-400';
                                    // let bg: string = modelUse == o.modelCode ? 'bg-yellow-300' : (o.hour < hour ? 'bg-green-400' : 'bg-white')
                                    return <tr key={i}>
                                        <td className={`border text-center ${bg}`}>{o.modelCode}</td>
                                        <td className={`border text-center ${bg}`}>{o.modelName}</td>
                                        <td className={`border text-center ${bg}`}>{o.cnt}</td>
                                        <td className={`border text-center ${bg}`}>{moment(o.hour, 'HH').format('HH:mm')}</td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                        <td className={`border text-center `} ></td>
                                    </tr>
                                })
                        }
                    </tbody>
                </table>
            </div>
            <ApsDialogNotice open={openDialogNotice} setOpen={setOpenDialogNotice} data={planSelected} setData={setPlanSelected} plan={apsProductionPlan} setPlan={setApsProductionPlan} />
            <ApsDialogAddSequence open={openDialogAddSequence} close={setOpenDialogAddSequence} />
        </div >
    )
}

export default ApsMainExcel