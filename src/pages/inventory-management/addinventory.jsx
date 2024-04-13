
import AddItem from '../../components/inventory/additem';
import Header from'../../components/inventory/header';
import Navbar from '../../components/inventory/navbar';


function AddItempage() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <AddItem/>  
      </div>
    );
  }
  
  export default AddItempage;