import ApsMain from '@/components/aps/aps.main';
import ApsScr from '@/components/aps/aps.scr';
import { useState } from 'react';
function Aps() {
  const [line, setLine] = useState<number>(0)
  return (
    <div>
      <div className='flex gap-2'>
        <div onClick={() => setLine(0)} className={`${line == 0 && 'text-[#5c5fc8]'}`}>Machine</div>
        <div onClick={() => setLine(1)} className={`${line == 1 && 'text-[#5c5fc8]'}`}>Scroll</div>
      </div>
      {
        line == 0 && <ApsScr />
      }
      {
        line == 1 && <ApsMain />
      }
    </div>
  )
}

export default Aps