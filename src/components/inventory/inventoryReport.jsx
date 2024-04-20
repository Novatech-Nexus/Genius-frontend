import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import logo from '../../assets/inventory-images/geniuslogo.png';

function InventoryReport(){

    const [items, setItems] = useState([]);

    const [search,setSearch] = useState('');

    
    useEffect(()=>{

        function getItems(){
            axios.get("http://localhost:5050/inventoryItem/getinventory").then((res)=>{
                console.log(res.data);
                setItems(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getItems();

    },[])
    const DownlaodPdf=()=>{
        const doc = new jsPDF();

        const imgData = logo;
        const imgWidth = 20; // Adjust as needed
        const imgHeight = 20; // Adjust as needed
        const imgX = (doc.internal.pageSize.width - imgWidth) / 2;
        doc.addImage(imgData, 'PNG', imgX, 10, imgWidth, imgHeight);
    
        // Add title
        doc.text("Inventory Details", 20, 40);
      

        // Define table headers
        const headers = ["Item code", "Name", "Item Group", "Quantity", 'last updated date'];
        // Extract item data
        const data = items.map(item =>{
            const addDate = new Date(item.addDate);
            const year = addDate.getFullYear();
            const month = addDate.getMonth()+1;
            const date = addDate.getDate();

       
            return [
                item.code,
                item.name,
                item.igroup,
                `${item.quantity}${item.kg}`, // Concatenate quantity and unit
                `${year} - ${month} - ${date}`
            
        ]});

        // Add table using jspdf-autotable plugin
        doc.autoTable({
            head: [headers],
            body: data,
            startY: 50 // Adjust as needed based on the position after the title
        });

        // Save the document
        doc.save('inventory_report.pdf');

    }

    return(
        <div className="container">
           
            <div style={{display:"flex",alignItems:"center"}}>
                <h1>All Items</h1>
                <form style={{marginLeft:"700px"}}>
                    <input className="form-control " 
                    style={{borderRadius:"10px",width:"300px",border:"1px solid blue"}} 
                    placeholder="search item"
                    onChange={(e)=>setSearch(e.target.value)}></input>

                </form>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>DownlaodPdf()}>download</button>
            </div>

            <div style={{marginTop:"20px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item code</th>
                            <th>Name</th>
                            <th>Item Group</th>
                            <th>Quantity</th>
                            <th>Last updated date</th>
            
                            {/* Add more table headers as per your item data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {items.filter((item)=>{
                            return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search);
                        }).map(item =>{                           
                            const addDate = new Date(item.addDate);
                            const year = addDate.getFullYear();
                            const month = addDate.getMonth()+1;
                            const date = addDate.getDate();
                            return (
 
                            <tr key={item.id}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.igroup}</td>
                                <td id="table-quantity" className={parseFloat(item.quantity) <= 10 ? 'text-danger' : ''}>{item.quantity}{item.kg}</td>
                                <td>{year} - {month} - {date}</td>
                                {/* Add more table cells for other item details */}
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InventoryReport;