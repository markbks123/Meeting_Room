import ModalComponent from "@/components/share/modal/modal";
import { CalendarModalProps, CreateCalendarModalFormKeysProps } from "./calendarModal.types";
import { CALEENDAR_MODAL_STATE, initialValues } from "./calendarModal.utils";
import { Formik, FormikProps } from "formik";
import CreateCalendarFrom from "./from/createCalendar.from";

const CalendarModal = ({
  isModalOpen,
  closeModal,
  status,
}: CalendarModalProps) => {
  switch (status) {
    case CALEENDAR_MODAL_STATE.CREATE:
      return (
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
          maxWidth={412}
        >
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={() => {}}
          >
         {(props: FormikProps<CreateCalendarModalFormKeysProps>) => {
              return (
               <CreateCalendarFrom 
               {...props}
               closeModal={closeModal}
               />
              );
            }}
          </Formik>
        </ModalComponent>
      );
      break;

    default:
      break;
  }
};

export default CalendarModal;
