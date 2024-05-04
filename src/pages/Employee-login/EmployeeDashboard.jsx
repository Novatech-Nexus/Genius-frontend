import Footer from "../../components/Footer";
import RestaurantNavbar from "../../components/RestaurantNavbar";
import TasksCards1 from '../../components/common-components/TaskCards1';
import TasksCards2 from '../../components/common-components/TaskCards2';
import TasksCards3 from '../../components/common-components/TaskCards3';
import TasksCards4 from '../../components/common-components/TaskCards4';
import TasksCards5 from '../../components/common-components/TaskCards5';
import TasksCards6 from '../../components/common-components/TaskCards6';
import TasksCards7 from '../../components/common-components/TaskCards7';
import TasksCards8 from '../../components/common-components/TaskCards8';
import styles from '../../styles/EmployeeDashboard.module.css';

export default function EmployeeDashboard() {

  

  return (
    <div>
      <RestaurantNavbar/>
      <div className={styles.pageContainer}></div>
      <div className={styles.gridcontainer}>
      <TasksCards1/>
      <TasksCards2/>
      <TasksCards3/>
      <TasksCards4/>
      <TasksCards5/>
      <TasksCards6/>
      <TasksCards7/>
      <TasksCards8/>
      </div>
      <Footer/>
    </div>
  )
}