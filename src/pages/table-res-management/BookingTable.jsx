import ReservationDetails from '../../components/table-res/ReservationDetails'
import TableRNavBar from '../../components/table-res/TableRNavBar';

function BookingTable() {

  

    return (
      <div>
        {/* <TableResHeader/> */}
        <TableRNavBar/>
        <ReservationDetails/>
         
      </div>
    );
  }
  
  export default BookingTable;