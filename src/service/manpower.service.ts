import { manpowerapi } from '@/constants';
import axios from 'axios';
const http = axios.create({
    baseURL: manpowerapi,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
    }
});

export function API_MPCK_GET_TEST() {
    return new Promise<any>(resolve => {
        http.get(`/mpck/get/test`).then((res) => {
            resolve(res.data);
        }).catch((e)=>{
            resolve({
                status : e.response.status,
                message : e.response.statusText
            });
        });
    })
}