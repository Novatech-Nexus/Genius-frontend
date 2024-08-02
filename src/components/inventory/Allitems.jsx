import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2';
import logo from '../../assets/inventory-images/geniuslogo.png'
import searchIcon from '../../assets/inventory-images/serch.png'
import arrow from '../../assets/inventory-images/redarrow.png'



function Allitems(){

    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    const [search,setSearch] = useState('');

    const [modelState, setmodelState] = useState(false);


    const [selectedID,setselectedID] = useState('');
    const [updateCode, setupdateCode] = useState('');
    const [updateName, setupdateName] = useState('');
    const [updateIgroup, setupdateIgroup] = useState('');
    const [updatequantity, setupdatequantity] = useState('');
    const [updateKg, setupdateKg] = useState('');
    const [updateCost, setupdateCost] = useState('');
    
    const [Recordquantity, setRecordquantity] = useState('');

    const [isIncomeSelected, setIsIncomeSelected] = useState(false);
    const [isOutgoingSelected, setIsOutgoingSelected] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    
    const modalQuantity = updatequantity;
    const modelCost = updateCost;
    


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
    useEffect(() => {

            const incomeCheckbox = document.getElementById('income');
            const outgoingCheckbox = document.getElementById('outgoing');
        

            if (incomeCheckbox && outgoingCheckbox) {
                incomeCheckbox.checked = false;
                outgoingCheckbox.checked = false;
               
                document.getElementById('additionalInput').value ='';
                
            }
    }, [modelState]);


    const loadModel = async (id)=>{

        const updateItem = await axios.get("http://localhost:5050/inventoryItem/getinventory/"+id);
        console.log(updateItem);
        setmodelState(true);

        setselectedID(updateItem.data._id)
        setupdateCode(updateItem.data.code);
        setupdateIgroup(updateItem.data.igroup);
        setupdateName(updateItem.data.name);
        setupdatequantity(updateItem.data.quantity);       
        setupdateKg(updateItem.data.kg);
        setupdateCost(updateItem.data.cost);
        

        // if(updateKg == 'kg'){
        //     document.getElementById('kg').checked = true;
        // }else{
        //     document.getElementById('kg').checked = false;
        // } 

        console.log(updateItem.data.code);



    }
    

    const updateInventory = async ()=>{

        if (!updateCode) {
            Swal.fire({
                title: "Error",
                text: "Please enter the item code.",
                icon: "error"
            });
            return; // Stop further execution if code is not submitted
        }
        else if (!updateName){
            Swal.fire({
                title: "Error",
                text: "Please enter the item name.",
                icon: "error"
            });
            return; 
        }
        else if(!document.getElementById('date').value){
            Swal.fire({
                title: "Error",
                text: "Please enter the date.",
                icon: "error"
            });
            return; 
        }
        const newDate = document.getElementById('date').value;
        

        try{ 
            const updateRec =parseFloat(document.getElementById('updateinventory').value);
            const inputCost = parseFloat(document.getElementById('additionalInput').value);
            console.log(updateCost);

            let updatedQuantity;
            let updatedCost; 
       
            if (document.getElementById('income').checked){
                updatedQuantity = modalQuantity + updateRec;
                updatedCost = modelCost + inputCost;
               
                console.log(updatedQuantity);
                console.log(updateRec);
       
            }
            else if(document.getElementById('outgoing').checked){
                updatedQuantity = modalQuantity - updateRec;
                if(updateRec < 0 || updatedQuantity < 0){
                    
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Outgoing quantity cannot exceed available quantity"

                      });
                      
                    setmodelState(false);
                    return;
                }                
            }
            console.log(updatequantity);


            await axios.put("http://localhost:5050/inventoryItem/updateinventory/"+selectedID,{
                code:updateCode,name:updateName,igroup:updateIgroup,quantity:updatedQuantity,kg:updateKg,cost:updatedCost,addDate:newDate

            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Item Updated",
                showConfirmButton: false,
                timer: 1500
              });  
            
            const updateItems = await axios.get("http://localhost:5050/inventoryItem/getinventory");
            setItems(updateItems.data);
            console.log(updateCost);
            
            document.getElementById('income').checked = false;
            document.getElementById('outgoing').checked = false;

            setmodelState(false);
        }catch(e){
            console.log(e);
        }

        const newRecord = {
            updateCode,
            Recordquantity,
            updateKg, 
            isIncomeSelected,          
            isOutgoingSelected,
            updateCost,
            newDate
        }

        console.log("new record",newDate);
        axios.post("http://localhost:5050/inventoryItem/addrecord",newRecord).then(()=>{

        }).catch((err)=>{
            alert(err)
        })


    }
    console.log("upadate"+Recordquantity);

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
                    await axios.delete("http://localhost:5050/inventoryItem/deleteinventory/"+id);  
                    // After successful deletion, fetch the updated list of items
                    const updatedItems = await axios.get("http://localhost:5050/inventoryItem/getinventory");
                    // Update the state with the updated items list
                    setItems(updatedItems.data);
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
    // const ComponentsRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: ()=>ComponentsRef.current,
    //     DocumentTitle : "Inventory Report",
    //     onAfterPrint :() => alert("inventory report downloaded")
    // })




    


    return(

        <div className="container">
           
            <div className="d-flex justify-content-between align-items-center mb-3" style={{marginTop:"20px"}}>
  
                <h1 className="mb-0">All Items</h1>
                
                <div className="d-flex align-items-center">
                    <div className="position-relative">               
                        <input className="form-control me-2" 
                        style={{borderRadius:"10px",width:"400px",border:"1px solid blue"}} 
                        placeholder="search item"
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
                <button className="btn btn-success" onClick={() => navigate("/dashboard/additem")}>Add item</button>
            </div>
            <div>
                <button type="button" class="btn btn-outline-info" 
                onClick={() => navigate("/dashboard/allitem/report")}>Inventory report</button>
            </div>

            <div style={{marginTop:"20px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>Item code</th>
                            <th style={{textAlign:"center"}}>Name</th>
                            <th style={{textAlign:"center"}}>Item Group</th>
                            <th style={{textAlign:"center"}}>On Hand</th>
                            <th style={{textAlign:"center"}}>Action</th>
                            <th style={{textAlign:"center"}}></th>
                            {/* Add more table headers as per your item data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {items.filter((item)=>{
                            return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search);
                        }).map(item => (
                            <tr key={item.id}>
                                <td style={{textAlign:"center"}}>{item.code}</td>
                                <td style={{textAlign:"center"}}>{item.name}</td>
                                <td style={{textAlign:"center"}}>{item.igroup}</td>
                                <td style={{textAlign:"center"}} id="table-quantity" className={parseFloat(item.quantity) <= 10 ? 'text-danger' : ''}>{item.quantity}{item.kg}                          </td>
                                <td style={{textAlign:"center"}}>
                                    <div>
                                        <button type="button" class="btn btn-warning" onClick={()=>loadModel(item._id)}>Update</button>
                                        <button type="button" class="btn btn-danger" 
                                            style={{marginLeft:"5px"}} onClick={()=>deleteInventory(item._id)}>Delete
                                        </button>
                                        <button type="button" class="btn btn-primary" 
                                            style={{marginLeft:"5px"}}
                                            onClick={() => navigate("/dashboard/allitem/record/"+item._id)}
                                            >Records                                           
                                        </button>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {parseFloat(item.quantity) <= 10 && 
                                        <img src={arrow} alt="Arrow" style={{ height: "20px", width: "auto", marginLeft: "5px" }} />}
                                    </div>
                                </td>
                                {/* Add more table cells for other item details */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
{/* ======================================== create modal ======================================================================*/}
            <div class="modal-dialog modal-dialog-centered">
                <Modal show={modelState}>
                    <div style={{padding:"10px"}}>

                        <div className="col-12 text-center ">
                            <dev>
                                <img src={logo} alt="Logo" width="75" height="75"/>
                            </dev>
                            <h2 style={{fontFamily:"inherit",fontWeight:"bolder"}}>Update Inventory Item</h2>
                        </div>
                        <hr></hr>
                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Item Code</label>
                            <input type="text" defaultValue={updateCode} id="code" readOnly="true"
                            onChange={(e)=> setupdateCode(e.target.value)}
                            className="form-control "></input>
                        </div>
           
                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold"}}>Item Name</label>
                            <input type="text" defaultValue={updateName} id="name"
                            onChange={(e)=> setupdateName(e.target.value)}
                            className="form-control "></input>
                        </div>

                        <div style={{marginBottom:"10px"}}>
                            <label for="inputName" style={{fontWeight:"bold"}}>Item Group</label>
                            <select id="itemGroupSelect" class="form-select" defaultValue={updateIgroup}   
                            onChange={(e)=>setupdateIgroup(e.target.value)}>
                                <option ></option>
                                <option value="Vegetable" >Vegetable</option>
                                <option value="Meat" >Meat</option>
                                <option value="Fish" >Fish</option>
                                <option value="Rice" >Rice</option>
                                <option value="Spices" >Spices</option>
                                <option value="Fruits" >Fruits</option>
                                <option value="Cooking Equipments" >Cooking Equipments</option>
                                <option value="Soft Drinks" >Soft Drinks</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                     
                        <div style={{marginBottom:"10px"}}>
                            <label for="inputCode" style={{fontWeight:"bold",marginRight: "5px"}}>Available Quantity</label>
                            <div style={{ display: "flex", alignItems: "center" }}>

                                <input type="number"  readOnly="true" value={modalQuantity}
                                className="form-control " style={{ marginRight: "5px" }} 
                                ></input>
                                <div className="col-sm-2 col-form-label" style={{marginLeft:"20px"}}>
                                    <input class="form-check-input" type="checkbox" id="kg" value="kg"
                                    checked={updateKg === 'kg'}
                                    onChange={(e)=>setupdateKg(e.target.checked ? 'kg' : '')}/>
                                    <label class="form-check-labe1" for="kg" style={{marginLeft:"5px",fontWeight:"bold"}}>kg</label>
                                </div>
                            </div>

                        </div>

                        <div>
                            <label for="inputCode" style={{fontWeight:"bold",marginRight: "5px"}}>Update Quantity</label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type="number" className="form-control " id="updateinventory" style={{ marginRight: "5px" }}
                                onChange={(e)=>setRecordquantity(e.target.value)}
                                ></input>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="income" value="income"
                                    onChange={() => {setIsIncomeSelected(true);setIsOutgoingSelected(false);}} // Set isIncomeSelected to true when "Income" is selected
                                    checked={isIncomeSelected} />
                                    <label class="form-check-label" style={{fontWeight:"bold"}}>Restock</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="outgoing" value="outgoing"
                                    onChange={() => {setIsIncomeSelected(false);setIsOutgoingSelected(true);}} // Set isIncomeSelected to true when "Income" is selected
                                    checked={isOutgoingSelected}/>
                                    <label class="form-check-label" style={{fontWeight:"bold"}}>Remove</label>
                                </div>
                                {/* Conditionally render the additional input field if "Income" is selected */}

                         
                            </div>
                        </div>
                        <div  style={{ marginTop: "10px" }}>
                            <label for="additionalInput" style={{fontWeight:"bold"}}>Cost</label>
                            <input type="number" className="form-control" id="additionalInput" placeholder="Additional Cost" disabled={!isIncomeSelected}/>
                        </div>

                        <div>
                            <label for="inputName" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Date</label>
                            <input type="date" id="date"/>
                        </div>

                        <br></br>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setmodelState(false)}>Close</button>
                            <button type="button" class="btn-success btn" onClick={()=>updateInventory()}>Save changes</button>
                        </div>


                    </div>

                </Modal>

            </div>
            

        </div>        

    )

}

export default Allitems;