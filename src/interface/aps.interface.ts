export interface StatusProps {
    status: boolean | number;
    message: string | undefined;
}
export interface ViApsPartMasterProps {
    model: string;
    partNameCode: string;
    partCode: string;
    wcno: string;
    partno: string;
    cm: string;
}
// export interface ApsMainProps {
//     sequnce: string;
//     wcno: string;
//     model: string;
//     partno: string;
//     plan: number;
//     actual: number;
// }

export interface ApsMainProps {
    sequence: ApsMainSequenceProps[];
    interactive: ApsMainInterActiveProps[];
}
export interface ApsMainInterActiveProps {
    hour: number;
    modelCode: string;
    modelName: string;
    cnt: number;
}
export interface ApsMainSequenceProps {
    p_wcno: string;
    p_group: string;
    p_model: string;
    p_startdate: string;
    p_starttime: string;
    p_enddate: string;
    p_endtime: string;
    p_modelcode: string;
    p_palnqty: number;
    _P_packing: any[];
    p_StartDateT: Date;
    plqty: number;
    row: number;
    p_comment: string;
    p_packing: string;
    p_palletqty: number;
    plancode: string;
    seq: string;
    p_mc: string;
    p_rev: string;
    p_plancode: string;
    p_planqty: number;
    subline: string;
    packingList: PackingList[];
}

export interface PackingList {
    p_MODEL: string;
    p_PACKING: string;
    p_QTYSTD: number;
    p_PALLETQTY: number;
    p_REPORT_QTY: number;
    p_QTYPLAN: number;
    p_comment: string;
    subline: string;
}

export interface ApsProductionPlanProps {
    apsPlanCode: any;
    prdPlanCode?: string;
    wcno?: string;
    subline?: string;
    apsSeq?: string;
    apsPlanDate?: Date;
    apsDistribute?: string;
    prdSeq?: string;
    partNo?: string;
    cm?: string;
    apsPlanQty?: number;
    prdPlanQty?: number;
    rev?: string;
    lrev?: string;
    creBy?: string;
    creDt?: Date;
}
export interface GasTightProps {
    hour: number;
    modelCode: string;
    modelName: string;
    cnt: number;
}

export interface PropsDialogNotice {
    open: boolean;
    setOpen: any;
    data: ApsProductionPlanProps;
    setData: any;
    plan: ApsProductionPlanProps[];
    setPlan: any;
    apsLoad: any;
}


export interface DictMstr {
    dictId: number;
    dictSystem: string;
    dictType: string;
    code: string;
    description: string;
    refCode: null;
    ref1: null;
    ref2: null;
    ref3: null;
    note: null;
    createDate: null;
    updateDate: null;
    dictStatus: string;
}

export interface PropsSaveNotice {
    reason?: string;
    lrev?: number;
    prdPlanQty?: number | undefined;
    remark: string;
}
export interface APSUpdatePlanProps {
    prdPlanCode: string;
    reasonCode: string;
    prdPlanQty: number;
    remark: string;
}
export interface APSInsertPlanProps {
    modelCode: string;
    prdQty: number;
    prdPlanCode: string;
}