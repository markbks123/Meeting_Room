import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
import { useLayout } from "./layout.hook";
import Header from "../share/header/header";
import Menu from "../share/menu/menu";

const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  const { pathname } = useLayout();

  return (
    <div className={styles.container}>
      <main>
        {pathname === "/signIn" ? (
          <></>
        ) : (
          <div className={styles.menuContainer}>
            <Header />
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
