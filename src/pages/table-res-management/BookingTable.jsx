import ReservationDetails from '../../components/table-res/ReservationDetails'
import TableRNavBar from '../../components/table-res/TableRNavBar';
import Footer from '../../../src/components/Footer'


function BookingTable() {

  

    return (
      <div>
        {/* <TableResHeader/> */}
        <TableRNavBar/>
        <ReservationDetails/>
        <Footer/>
         
      </div>
    );
  }
  
  export default BookingTable;