import MyCalendar from "../share/calendar/calendar"
import styles from "./calendar.module.css"
const CalendarContainer:React.FC =() =>{
    
  
      return(
               <div className={styles.cotainer}>
                  <div className={styles.calendar}>
                  <MyCalendar/> 
                  </div>
               </div>
      )
  }
  
  
  export default  CalendarContainer