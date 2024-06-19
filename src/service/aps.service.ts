import { apsapi } from '@/constants';
import { ApsMainProps, ViApsPartMasterProps } from '@/interface/aps.interface';
import axios from 'axios';
const http = axios.create({
    baseURL: apsapi,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
    }
});

export function ViApsPartMaster() {
    return new Promise<ViApsPartMasterProps[]>(resolve => {
        http.get(`/aps/data/maininout`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}
export function ApsMainGetData(date: string) {
    return new Promise<ApsMainProps[]>(resolve => {
        http.get(`/ApsMainGetData/${date}`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}