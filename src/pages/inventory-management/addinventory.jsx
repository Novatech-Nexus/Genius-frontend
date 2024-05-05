
import AddItem from '../../components/inventory/additem';
import Header from'../../components/inventory/header';
import Footer from '../../components/Footer';


function AddItempage() {
    return (
      <div>
        <Header/>
        {/* <Navbar/> */}
        <AddItem/> 
        <Footer/> 
      </div>
    );
  }
  
  export default AddItempage;