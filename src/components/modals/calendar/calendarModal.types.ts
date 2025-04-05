import { FormikProps } from "formik";
import { CALEENDAR_MODAL_STATE } from "./calendarModal.utils";


export interface CalendarModalProps {
    isModalOpen:boolean;
    closeModal: () =>void;
    onSubmit: () =>void;
    status:CALEENDAR_MODAL_STATE 
}


export interface CreateCalendarModalFormKeysProps {
   date:string;
   team:string;
   caption :string;
   remark:string
   }

   export interface  CreateCalendarModalFormProps
   extends FormikProps<CreateCalendarModalFormKeysProps> {
   closeModal: () => void;
 }
 