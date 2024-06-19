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
    p_wcno:       string;
    p_group:      string;
    p_model:      string;
    p_startdate:  string;
    p_starttime:  string;
    p_enddate:    string;
    p_endtime:    string;
    p_modelcode:  string;
    p_palnqty:    number;
    _P_packing:   any[];
    p_StartDateT: Date;
    plqty:        number;
    row:          number;
    p_comment:    string;
    p_packing:    string;
    p_palletqty:  number;
    plancode:     string;
    seq:          string;
    p_mc:         string;
    p_rev:        string;
    p_plancode:   string;
    p_planqty:    number;
    subline:string;
    packingList:  PackingList[];
}

export interface PackingList {
    p_MODEL:      string;
    p_PACKING:    string;
    p_QTYSTD:     number;
    p_PALLETQTY:  number;
    p_REPORT_QTY: number;
    p_QTYPLAN:    number;
    p_comment:    string;
    subline:string;
}
