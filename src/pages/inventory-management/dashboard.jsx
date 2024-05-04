
import Header from'../../components/inventory/header';
import Navbar from '../../components/inventory/navbar';
import HomeImg1 from '../../components/inventory/homeimg1';
import HomeImg2 from '../../components/inventory/homeimg2';
import FooterHome from '../../components/inventory/footerhome';
import Clock from '../../components/inventory/clockI';
import TotalCost from '../../components/inventory/totalCost';


function Dashboard() {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Header/>
      {/* <Navbar/> */}
      <Clock/>
      <HomeImg1/>
   
      <HomeImg2/>
      <FooterHome/>
  
    </div>
  );
}

export default Dashboard;