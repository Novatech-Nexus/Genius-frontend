import ReservationDetails from '../../components/table-res/ReservationDetails'
import TableResHeader from'../../components/table-res/TableResHeader';
import TableRNavBar from '../../components/table-res/TableRNavBar';
//import TableResSearch from '../../components/table-res/TableResSearch'



function BookingTable() {

  

    return (
      <div>
        <TableResHeader/>
        <TableRNavBar/>
        
        <ReservationDetails/>  
      </div>
    );
  }
  
  export default BookingTable;