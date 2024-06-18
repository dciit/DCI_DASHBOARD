import { API_MPCK_GET_TEST } from '@/service/manpower.service';
import React, { useEffect, useState } from 'react'

function Manpower() {
    const [once, setOnce] = useState<boolean>(true);
    const [message,setMessage] = useState<string>('');
    useEffect(() => {
        if (once) {
            initData();
        }
    }, [once]);
    const initData = async () => {
        let api = await API_MPCK_GET_TEST();
        setMessage(api);
        setOnce(false);
    }
    return (
        <div>
            <p>Manpower</p>
            <p className='text-red-400'>api message : {message}</p>
            {
                [...Array(50)].map((_, i) => <p key={i}>{i}</p>)
            }
        </div>
    )
}

export default Manpower