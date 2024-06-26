import { apsapi } from '@/constants';
import { APSInsertPlanProps, APSUpdatePlanProps, ApsMainProps, ApsProductionPlanProps, DictMstr, GasTightProps, StatusProps, ViApsPartMasterProps } from '@/interface/aps.interface';
import axios from 'axios';
import { Mdw27Props } from './main.service';
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
    return new Promise<ApsMainProps>(resolve => {
        http.get(`/ApsMainGetData/${date}`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}
export function API_APS_PRODUCTION_PLAN() {
    return new Promise<ApsProductionPlanProps[]>(resolve => {
        http.get(`/ApsProductionPlan/get`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}

export function API_GET_GASTIGHT(date: string) {
    return new Promise<GasTightProps[]>(resolve => {
        http.get(`/aps/gastight/get/${date}`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}
export function API_GET_REASON() {
    return new Promise<DictMstr[]>(resolve => {
        http.get(`/aps/dictmstr/reason`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}

export function API_CHANGE_PRIORITY(ApsPlan: ApsProductionPlanProps[]) {
    return new Promise<StatusProps>(resolve => {
        http.post(`/ApsPlanChangePrioriry`, ApsPlan).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}

export function API_UPDATE_PLAN(param: APSUpdatePlanProps) {
    return new Promise<StatusProps>(resolve => {
        http.post(`/ApsUpdatePlan`, param).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}
export function API_APS_INSERT_PLAN(props: APSInsertPlanProps) {
    return new Promise<StatusProps>(resolve => {
        http.post(`/ApsInsertPlan`, props).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}

export function API_GET_MODEL_MASTER() {
    return new Promise<Mdw27Props[]>(resolve => {
        http.get(`/GetModelMaster`).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            console.log(e);
        });
    })
}