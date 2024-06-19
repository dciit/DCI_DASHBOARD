import ApsMain from '@/components/aps/aps.main';
import ApsScr from '@/components/aps/aps.scr';
import { useState } from 'react';
function Aps() {
  const [line, setLine] = useState<number>(0)
  return (
    <div>
      <div className='flex  gap-2'>
        <div>FAC 1</div>
        <div>FAC 2</div>
        <div>FAC 3</div>
      </div>
      <div className='flex gap-2'>
        <div onClick={() => setLine(0)} className={`${line == 0 && 'text-[#5c5fc8]'}`}>Sub-Line</div>
        <div onClick={() => setLine(1)} className={`${line == 1 && 'text-[#5c5fc8]'}`}>Scroll</div>
        <div onClick={() => setLine(2)} className={`${line == 2 && 'text-[#5c5fc8]'}`}>Main + Final</div>
      </div>
      {
        line == 0 && <ApsScr />
      }
      {
        line == 1 && <>not found</>
      }
      {
        line == 2 && <ApsMain />
      }
    </div>
  )
}

export default Aps