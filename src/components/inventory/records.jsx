import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import trash from '../../assets/inventory-images/trash.png'
import Swal from 'sweetalert2';
import logo from '../../assets/inventory-images/geniuslogo.png'
import jsPDF from "jspdf";
import 'jspdf-autotable';


function Records(){
    const [records, setRecord] = useState([]);
    const { id } = useParams();

    const [updateCode, setupdateCode] = useState('');
    const [updateName, setupdateName] = useState('');
    const [recAction, setrecAction] = useState('');

    const [search,setSearch] = useState('');

    const [selectedID,setselectedID] = useState('');

   
    useEffect(() => {
    const loadModel = async ()=>{

        try {

            const updateItem = await axios.get("http://localhost:5050/inventoryItem/getinventory/"+id);
            console.log(updateItem);

            setupdateCode(updateItem.data.code);
            setupdateName(updateItem.data.name);
        
            axios.get("http://localhost:5050/inventoryItem/getrecord").then((res)=>{            
                const filteredRecords = res.data.filter(record => record.recId === updateCode);
                filteredRecords.sort((a, b) => new Date(b.recDate) - new Date(a.recDate));
                setRecord(filteredRecords);
                }).catch((err)=>{
                    alert(err.message);
                })
        } catch (error) {
            console.error("Error:", error);
          }

    }
    loadModel(id);
    }, [id, updateCode]);

    const deleteRecord = async(id)=>{

        try{
             await axios.delete("http://localhost:5050/inventoryItem/deleterecord/"+id);   
             const updateItem = await axios.get("http://localhost:5050/inventoryItem/getinventory/"+id);
             console.log(updateItem);
 
             setupdateCode(updateItem.data.code);
             setupdateName(updateItem.data.name);
         
             axios.get("http://localhost:5050/inventoryItem/getrecord").then((res)=>{            
                 const filteredRecords = res.data.filter(record => record.recId === updateCode);
                 filteredRecords.sort((a, b) => new Date(b.recDate) - new Date(a.recDate));
                 setRecord(filteredRecords);
                 }).catch((err)=>{
                     alert(err.message);
                 })
             
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                        
                }); 
                    
            }catch(e){
                console.log(e);
            }

        }

        const DownlaodPdf=()=>{
            const doc = new jsPDF();
    
            const imgData = logo;
            const imgWidth = 20; // Adjust as needed
            const imgHeight = 20; // Adjust4 as needed
            const imgX = (doc.internal.pageSize.width - imgWidth) / 2;
            doc.addImage(imgData, 'PNG', imgX, 10, imgWidth, imgHeight);
        
            // Add title
            doc.text("Inventory records",20, 40);
          
    
            // Define table headers
            const headers = ["Item code", "Quantity", "Action", "Date"];
            // Extract item data
            const data = records.map(record =>{
                const addDate = new Date(record.recDate);
                const year = addDate.getFullYear();
                const month = addDate.getMonth()+1;
                const date = addDate.getDate();
    
           
                return [
                    record.recId,
                    `${record.recQuantity}${record.recKg}` ,
                    `${record.recIn =='true'? "Restock":"" }${record.recOut =='true'? "Remove":"" }`,
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
        <div className="container" >
            <div>
                <h2 className="container" style={{color:"#2B2F35",marginTop:"20px"}}>Inventory records of {updateName}</h2>
                <div style={{ position: "absolute", top: "0", right: "0", marginTop: "120px", marginRight: "120px" }}>
                    <button className="btn btn-primary" onClick={()=>DownlaodPdf()}>Export</button>
                </div>
      
            </div>

                <div style={{background:"#D9D9FF",padding:"30px",borderRadius:"5px"}}>
                    <div className="container" >
                            <div className="d-flex align-items-center"> 
                                <h5 style={{color:"#2B2F35"}}>Search by Date</h5>              
                                <input className="form-control me-2" type="date"
                                style={{borderRadius:"10px",width:"200px",border:"1px solid blue",marginLeft:"10px"}} 
                                placeholder="search by date"
                                onChange={(e)=>setSearch(e.target.value)}>
                                </input>
                            
                            </div>
                        </div>
                    <div className="container" style={{marginTop:"20px"}}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>Item code</th>
                                    <th style={{textAlign:"center"}}>Quantity</th>
                                    <th style={{textAlign:"center"}}>Action</th>
                                    <th style={{textAlign:"center"}}>Date</th>
                                    <th style={{textAlign:"center"}}></th>
                                    {/* Add more table headers as per your item data structure */}
                                </tr>
                            </thead>
                            <tbody>
                                {records.filter((record)=>{
                                    return search.toLowerCase() === ''? record : record.recDate.includes(search);
                                }).map(record =>{
                                    const addDate = new Date(record.recDate);
                                    const year = addDate.getFullYear();
                                    const month = addDate.getMonth()+1;
                                    const date = addDate.getDate();
                
                                return(
                                    <tr key={record.id}>
                                        <td style={{textAlign:"center"}}>{record.recId}</td>
                                        <td style={{textAlign:"center"}}>{record.recQuantity}{record.recKg}</td>
                                        <td className={record.recIn == 'true' ? 'text-success' : 'text-danger'} style={{textAlign:"center"}}>
                                            {record.recIn =='true'? "Restock"  :null}
                                            {record.recOut =='true'? "Remove"  :null}
                                        </td>
                                        <td style={{textAlign:"center"}} >{year} - {month} - {date}</td>
                                        <td style={{textAlign:"center"}}>
                                            <img src={trash} alt="" style={{width:"25px",height:"25px",cursor: "pointer"}}
                                            onClick={()=>deleteRecord(record._id)}
                                            />
                                        </td>
        
                                        {/* Add more table cells for other item details */}
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )

}

export default Records;