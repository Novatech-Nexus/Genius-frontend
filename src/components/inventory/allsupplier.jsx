import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2';
import logo from '../../assets/inventory-images/geniuslogo.png'
import searchIcon from '../../assets/inventory-images/serch.png'
import email from '../../assets/inventory-images/email.png'


function AllSupplier(){

    const navigate = useNavigate();

    const [suppliers, setsupplier] = useState([]);

    const [search,setSearch] = useState('');

    const [modelState, setmodelState] = useState(false);

    const [selectedID,setselectedID] = useState('');
    const [updateId, setupdateId] = useState('');
    const [updateName, setupdateName] = useState('');
    const [updateEmail, setupdateEmail] = useState('');
    const [updatePhone, setupdatePhone] = useState('');
    const [updateDis, setupdateDis] = useState('');


    useEffect(()=>{

        function getSupplier(){
            axios.get("http://localhost:5050/inventoryItem/getsupplier").then((res)=>{
                console.log(res.data);
                setsupplier(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getSupplier();

    },[])

    const loadModel = async (id)=>{

        const updateItem = await axios.get("http://localhost:5050/inventoryItem/getsupplier/"+id);
    
        setmodelState(true);

        setselectedID(updateItem.data._id);
        setupdateId(updateItem.data.suppID);
        setupdateName(updateItem.data.suppName);
        setupdateEmail(updateItem.data.suppEmail);
        setupdatePhone(updateItem.data.suppPhone);
        setupdateDis(updateItem.data.suppDisc);

    }

    const updateSupplier = async ()=>{
        try{ 
            await axios.put("http://localhost:5050/inventoryItem/updatesupplier/"+selectedID,{
                suppID:updateId,suppName:updateName,suppEmail:updateEmail,suppPhone:updatePhone,suppDisc:updateDis

            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Item Updated",
                showConfirmButton: false,
                timer: 1500
              });  
        
            const updatesupplier = await axios.get("http://localhost:5050/inventoryItem/getsupplier");
            setsupplier(updatesupplier.data);

            setmodelState(false);

        }catch(e){
            console.log(e);
        }

        const newSupplier = {
            updateId,updateName,updateEmail,updatePhone,updateDis
        }

        console.log("new record",newSupplier);
        axios.post("http://localhost:5050/inventoryItem/addsupplier",newSupplier).then(()=>{

        }).catch((err)=>{
            alert(err)
        })

    }

    const deleteInventory = async(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {

                try{
                    await axios.delete("http://localhost:5050/inventoryItem/deletesupplier/"+id);  
                    // After successful deletion, fetch the updated list of items
                    const updatedSupplier = await axios.get("http://localhost:5050/inventoryItem/getsupplier");
                    // Update the state with the updated items list
                    setsupplier(updatedSupplier.data);
                    // Show success message  
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        
                    }); 
                    
                }catch(e){
                    console.log(e);
                }

                }
          });


    }

    const sendMail = async(id)=>{
        const sendmail = await axios.get("http://localhost:5050/inventoryItem/getsupplier/"+id);
        const email = sendmail.data.suppEmail;
    
        try {
            // Make a POST request to the backend endpoint and pass the email in the request body
            const { data } = await axios.post("http://localhost:5050/inventoryItem/suppliermail", {
                email: email // Pass the supplier's email obtained earlier
            });
            console.log(data); // Log the response from the backend (optional)
            // Handle success if needed
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "E-mail sent successfylly"
              });
        } catch (error) {
            console.error("Error sending email:", error);
            // Handle error if needed
        }
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3" style={{marginTop:"20px"}}>
                    <h1 className="mb-0">All Suppliers</h1>
                
                    <div className="d-flex align-items-center">
                        <div className="position-relative">               
                            <input className="form-control me-2"
                            style={{borderRadius:"10px",width:"400px",border:"1px solid blue"}} 
                            placeholder="search supplier"
                            onChange={(e)=>setSearch(e.target.value)}>
                            </input>
                            
                            <img src={searchIcon} 
                                    style={{
                                        height:"20px",
                                        width : "20px",
                                        position: "absolute", // Position the icon absolutely inside the input field
                                        marginLeft:"370px",
                                        marginTop:"-19px",
                                        transform: "translateY(-50%)", // Translate the icon up by half of its height to center it vertically
                                        cursor: "pointer", // Add pointer cursor to indicate it's clickable
                                    }}
                            />
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={() => navigate("/dashboard/addsupplier")}>Add Supplier</button>
            </div>
             <div style={{marginTop:"20px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>Supplier Id</th>
                            <th style={{textAlign:"center"}}>Name</th>
                            <th style={{textAlign:"center"}}>E-mail</th>
                            <th style={{textAlign:"center"}}>Phone Number</th>
                            <th style={{textAlign:"center"}}>Discription</th>
                            <th style={{textAlign:"center"}}>Action</th>
                            
                            {/* Add more table headers as per your item data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.filter((supplier)=>{
                            return search.toLowerCase() === ''? supplier : supplier.suppName.toLowerCase().includes(search);
                        }).map(supplier => (
                            <tr key={supplier.id}>
                                <td style={{textAlign:"center"}}>{supplier.suppID}</td>
                                <td style={{textAlign:"center"}}>{supplier.suppName}</td>
                                <td style={{textAlign:"center"}}>{supplier.suppEmail}</td>
                                <td style={{textAlign:"center"}}>{supplier.suppPhone}</td>
                                <td style={{textAlign:"center"}}>{supplier.suppDisc}</td>
                                <td style={{textAlign:"center"}}>
                                    <div>
                                        <button type="button" class="btn btn-warning" onClick={()=>loadModel(supplier._id)}>Update</button>
                                        <button type="button" class="btn btn-danger" 
                                            style={{marginLeft:"5px"}} onClick={()=>deleteInventory(supplier._id)}>Delete
                                        </button>
                                        
                                        <img src={email} alt="" style={{marginLeft:"10px",width:"30px",height:"30px",cursor: "pointer"}}
                                            onClick={()=>sendMail(supplier._id)}/>
                                        


                                    </div>
                                </td>
                                {/* Add more table cells for other item details */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
{/* ========================================================================================================================= */}
            <div class="modal-dialog modal-dialog-centered">
                <Modal show={modelState}>
                    <div style={{padding:"10px"}}>

                        <div className="col-12 text-center ">
                            <dev>
                                <img src={logo} alt="Logo" width="75" height="75"/>
                            </dev>
                            <h2 style={{fontFamily:"inherit",fontWeight:"bolder"}}>Update Supplier Details</h2>
                        </div>
                        <hr></hr>
                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Supplier ID</label>
                            <input type="text" defaultValue={updateId} id="code" readOnly="true"
                            onChange={(e)=> setupdateId(e.target.value)}
                            className="form-control "></input>
                        </div>
           
                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Name</label>
                            <input type="text" defaultValue={updateName} id="name"
                            onChange={(e)=> setupdateName(e.target.value)}
                            className="form-control "></input>
                        </div>

                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>E-mail</label>
                            <input type="email" defaultValue={updateEmail} id="name"
                            onChange={(e)=> setupdateEmail(e.target.value)}
                            className="form-control "></input>
                        </div>

                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Phone Number</label>
                            <input type="text" defaultValue={updatePhone} id="name"
                            onChange={(e)=> setupdatePhone(e.target.value)}
                            className="form-control "></input>
                        </div>

                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Discription</label>
                            <input type="text" defaultValue={updateDis} id="name"
                            onChange={(e)=> setupdateDis(e.target.value)}
                            className="form-control "></input>
                        </div>
                                                                     

                        <br></br>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setmodelState(false)}>Close</button>
                            <button type="button" class="btn-success btn" onClick={()=>updateSupplier()}>Save changes</button>
                        </div>


                    </div>

                </Modal>

            </div>
        </div>
    )
}

export default AllSupplier;