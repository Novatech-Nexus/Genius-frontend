
import Header from'../../components/inventory/header';
import Navbar from '../../components/inventory/navbar';
import HomeImg1 from '../../components/inventory/homeimg1';
import HomeImg2 from '../../components/inventory/homeimg2';
import FooterHome from '../../components/inventory/footerhome';


function Dashboard() {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Header/>
      {/* <Navbar/> */}
      <HomeImg1/>
      <HomeImg2/>
      <FooterHome/>
  
    </div>
  );
}

export default Dashboard;