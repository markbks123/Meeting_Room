import { CreateCalendarModalFormKeysProps } from "./calendarModal.types";

export enum CALEENDAR_MODAL_STATE {
    EDIT ="EDIT",
    CREATE="CREATE",
    DELETE ="DELETE",
    UPDATE ="UPDATE"
}




export const initialValues:CreateCalendarModalFormKeysProps ={
    date: "",
    team: "",
    caption: "",
    remark: ""
}