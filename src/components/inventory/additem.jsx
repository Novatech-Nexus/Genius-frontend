import React,{useState} from "react";
import axios from "axios";
import geniuslogo from '../../assets/inventory-images/geniuslogo.png';

import Swal from 'sweetalert2';


function AddItem(){
    const [inputCode,setCode] = useState("");
    const [inputName,setName] = useState("");
    const [inputIgroup,setIgroup] = useState("");
    const [inputQuentity,setQuentity] = useState("");
    const [inputKg,setKg] = useState("");
    const [inputCost,setCost] = useState("");

    function sendData(e){
        e.preventDefault();

        const newItem = {
            inputCode,
            inputName,
            inputIgroup,
            inputQuentity,
            inputKg,
            inputCost
        }
        console.log(newItem);
        axios.post("http://localhost:5050/inventoryItem/add",newItem).then(()=>{
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

            document.getElementById('itemGroupSelect').value = "";
            document.getElementById('kg').checked = false;

        }).catch((err)=>{
            alert(err)
        })
    }
    
    return(
            <div classNameName="container" style={{ width: "600px",margin:"auto",marginTop:"20px",backgroundColor:"#d8dde3",padding:"50px",borderRadius:"10px"}} >
                <div className="col-12 text-center ">
                    <div>
                        <img src={geniuslogo} alt="Logo" width="75" height="75"/>
                    </div>
                    <h2 style={{fontFamily:"inherit",fontWeight:"bolder"}}>Add New Invetory Item</h2>
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
                                <option value="Meet" >Meet</option>
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
                </div>

                <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-dark" onClick={sendData}>Submit</button>
                </div>
            </div>


    );
}
export default AddItem;