import React,{useState,useEffect} from "react";
import axios from "axios";
import '../../styles/inventory/inventory-items.css'
import addlogo from '../../assets/inventory-images/addicon.png'

import Swal from 'sweetalert2';


function AddItem(){
    const [inputCode,setCode] = useState("");
    const [inputName,setName] = useState("");
    const [inputIgroup,setIgroup] = useState("");
    const [inputQuentity,setQuentity] = useState("");
    const [inputKg,setKg] = useState("");
    const [inputCost,setCost] = useState("");
    const [inputDate,setDate] = useState("");
    const [inputDiscription,setDiscription] = useState("");

    const [existingItem, setExistingItem] = useState(false);

    useEffect(() => {
        async function getItems() {
            try {
                const res = await axios.get("http://localhost:5050/inventoryItem/getinventory");
                res.data.forEach(element => {
                    if (inputCode === element.code) {
                        setExistingItem(true);
                    }
                });
            } catch (err) {
                alert(err.message);
            }
        }
        getItems();
    }, [inputCode]);

    function sendData(e){
        e.preventDefault();

        if (existingItem) {
            Swal.fire({
                icon: 'error',
                title: 'Item ID already exists!',
                text: 'Please choose a different Item ID',
            }).then(() => {
                window.location.reload(); // Reload the page
            });
            return;
        }

        const newItem = {
            inputCode,
            inputName,
            inputIgroup,
            inputQuentity,
            inputKg,
            inputCost,
            inputDate,
            inputDiscription
            
        }
        if (!inputCode) {
            Swal.fire({
                title: "Error",
                text: "Please enter the item code.",
                icon: "error"
            });
            return; // Stop further execution if code is not submitted
        }
        else if (!inputName){
            Swal.fire({
                title: "Error",
                text: "Please enter the item name.",
                icon: "error"
            });
            return; 
        }
        else if(!inputDate){
            Swal.fire({
                title: "Error",
                text: "Please enter the date.",
                icon: "error"
            });
            return; 
        }

        if(document.getElementById('inputQuentity').value < 0){
            Swal.fire({
                title: "Error",
                text: "can't enter negetive values",
                icon: "error"
            });
            return;
        }


        console.log(newItem);
        axios.post("http://localhost:5050/inventoryItem/addinventory",newItem).then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Item Added",
                showConfirmButton: false,
                timer: 1500
              });


            setCode("");
            setName("");
            setIgroup("");
            setQuentity("");
            setKg("");
            setCost("");
            setDate("");
            setDiscription("")

            document.getElementById('itemGroupSelect').value = "";
            document.getElementById('kg').checked = false;

        }).catch((err)=>{
            alert(err)
        })


    }

    return(

  
        <div>
            <div className="add-inventory-background">
   
                <div classNameName="container" 
                style={{ width: "600px",margin:"auto",backdropFilter: "blur(10px)",padding:"50px",borderRadius:"10px",
                marginTop:"40px",marginBottom:"40px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",background:"#c9c9c8"}}>
                    <div className="col-12 text-center ">
                        <div>
                            <img src={addlogo} alt="Logo" width="75" height="75"/>
                        </div>
                        <h2 style={{fontFamily:"inherit",fontWeight:"bold"}}>Add New Invetory Item</h2>
                    </div>
                    <hr></hr>

                    <div style={{alignItems:"center"}}>

                        <div className="mb-3 row align-items-center">
                            <label for="inputCode" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Item Code</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputCode" style={{width:"500px"}}
                                value={inputCode}
                                onChange={(e)=>{
                                    setCode(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                            <label for="inputName" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Item Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="inputName" style={{width:"500px"}}
                                    value={inputName}
                                    onChange={(e)=>{
                                    setName(e.target.value);
                                }}/>
                            </div>

                        </div>

                        <div className="mb-3 row align-items-center">
                            <label for="inputName" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Item Group</label>
                            <div className="col-sm-8">
                                <select id="itemGroupSelect" class="form-select" aria-label="Default select example" style={{width:"500px"}}  
                                onChange={(e)=>{setIgroup(e.target.value);}}>
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
                        </div>    

                        <div className="mb-3 row align-items-center">
                            <label for="inputQuentity" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Initial Quantity</label>
                            <div className="col-sm-8" >
                                <input type="number" className="form-control me-2" id="inputQuentity" style={{width:"300px"}} 
                                    value={inputQuentity}
                                    onChange={(e)=>{
                                    setQuentity(e.target.value);
                                }}/>                       
                            </div>

                            <div className="col-sm-2">

                                <div className="form-check"  >
                                    <input className="form-check-input" type="checkbox" id="kg" value="kg" 
                                    onChange={(e)=>{
                                        setKg(e.target.value);
                                    }}/>
                                    <label class="form-check-labe1" for="kg" style={{marginLeft:"5px",fontWeight:"bold", marginBottom: "0"}}>kg</label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                            <label for="inputName" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Cost</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" id="inputName" style={{width:"500px"}}
                                    value={inputCost}
                                    onChange={(e)=>{
                                    setCost(e.target.value);
                                }}/>
                            </div>

                        </div>
                        <div className="mb-3">
                            <label for="inputDate" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Date</label>
                            <input type="date" id="inputDate"
                                value={inputDate}
                                onChange={(e)=>{
                                setDate(e.target.value);
                            }}/>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label for="inputName" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Discription</label>
                            <div className="col-sm-8">
                                <textarea  class="form-control" id="exampleFormControlTextarea1" rows="3" style={{height:"100px",width:"500px"}}
                                    value={inputDiscription}
                                    onChange={(e)=>{
                                    setDiscription(e.target.value);}}
                                />
                            </div>
    
                        </div>
                    </div>
                    <hr></hr>

                    <div style={{textAlign:"center"}}>
                        <button type="button" className="btn btn-primary" onClick={sendData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default AddItem;