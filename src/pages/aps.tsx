import ApsMain from '@/components/aps/aps.main';
import ApsMainExcel from '@/components/aps/aps.main.excel';
import ApsScr from '@/components/aps/aps.scr';
import { Divider } from '@mui/material';
import { useState } from 'react';
function Aps() {
  const [line, setLine] = useState<number>(0)
  return (
    <div className='flex flex-col gap-3'>
      {/* <div className='flex  bg-white w-fit rounded-xl shadow-lg px-3'>
        <div onClick={() => setLine(0)} className={` flex flex-row items-center gap-2 ${line == 0 ? 'text-[#5c5fc8] font-semibold outline-b-2 outline-[#5c5fc8]' : 'opacity-40'} cursor-pointer select-none py-3 px-3`}>
          <span>MACHINE</span>
        </div>
        <Divider />
        <div onClick={() => setLine(1)} className={` flex flex-row items-center gap-2  ${line == 1 ? 'text-[#5c5fc8] font-semibold outline-b-2 outline-[#5c5fc8]' : 'opacity-40'} cursor-pointer select-none py-3 px-3`}>
          {
            line == 1 && <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5fc8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5c5fc8]"></span>
            </span>
          }
          <span>SCROLL</span>
        </div>
        <div onClick={() => setLine(2)} className={` flex flex-row items-center gap-2  ${line == 2 ? 'text-[#5c5fc8] font-semibold outline-b-2 outline-[#5c5fc8]' : 'opacity-40'} cursor-pointer select-none py-3 px-3`}>
          {
            line == 2 && <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5fc8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5c5fc8]"></span>
            </span>
          }
          <span>SCROLL EXCEL</span>
        </div>
      </div> */}
      <div className='bg-white shadow-lg rounded-md p-3 overflow-x-auto'>
        {/* {
          line == 0 && <ApsScr />
        }
        {
          line == 1 && <ApsMain />
        }
        {
          line == 2 && <ApsMainExcel />
        } */}
        <ApsMainExcel />
      </div>
    </div>
  )
}

export default Aps