import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
import { useLayout } from "./layout.hook";
import Header from "../share/header/header";
import Menu from "../share/menu/menu";

const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  const { pathname} = useLayout();

  return (
    <div className={styles.container}>
      <main>
       
        { pathname  === "/signIn" ?     <></>: (<div className={styles.menuContainer}>
          <Header />
          <div className={styles.menu}>
            <Menu
              title={"Booking"}
              className={styles["w-30"]}
              onChange={() => {}}
            />
            <Menu
              title={"My Bookings"}
              className={styles["w-30"]}
              onChange={() => {}}
            />
            <Menu
              title={"Groups"}
              className={styles["w-30"]}
              onChange={() => {}}
            />
          </div>
        </div>)}
        {children}
      </main>
    </div>
  );
};

export default Layout;
