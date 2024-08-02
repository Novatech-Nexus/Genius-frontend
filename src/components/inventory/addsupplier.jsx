import React,{useState,useEffect} from "react";
import axios from "axios";
import '../../styles/inventory/inventory-items.css'
import addlogo from '../../assets/inventory-images/suppLogo.png'


import Swal from 'sweetalert2';


function AddSupplier(){

    const [inputId,setinputId] = useState("");
    const [inputName,setinputName] = useState("");
    const [inputEmail,setinputEmail] = useState("");
    const [inputPhone,setinputPhone] = useState("");
    const [inputDisc,setinputDisc] = useState("");

    const [existingSupplier, setExistingSupplier] = useState(false);

    useEffect(() => {
        async function getSupplier() {
            try {
                const res = await axios.get("http://localhost:5050/inventoryItem/getsupplier");
                res.data.forEach(element => {
                    if (inputId === element.suppID) {
                        setExistingSupplier(true);
                    }
                });
            } catch (err) {
                alert(err.message);
            }
        }
        getSupplier();
    }, [inputId]);
  

    function sendData(e){
        e.preventDefault();

        if (existingSupplier) {
            Swal.fire({
                icon: 'error',
                title: 'Supplier ID already exists!',
                text: 'Please choose a different Supplier ID',
            }).then(() => {
                window.location.reload(); // Reload the page
            });
            return;
        }

        const newSupplier = {
            inputId,inputName,inputEmail,inputPhone,inputDisc           
        }

        if (!/^\d{10}$/.test(inputPhone)) {
            Swal.fire({
                icon: 'error',
                title: 'Mobile number must be 10 digits.',
            })
            return;
        }
    
    
        axios.post("http://localhost:5050/inventoryItem/addsupplier",newSupplier).then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Supplier Added",
                showConfirmButton: false,
                timer: 1500
              });

              setinputId("");
              setinputName("");
              setinputEmail("");
              setinputPhone("");
              setinputDisc("");

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
            <div className="add-supplier-background">
                <div classNameName="container" 
                    style={{ width: "600px",margin:"auto",backdropFilter: "blur(10px)",padding:"50px",borderRadius:"10px",
                    marginTop:"40px",marginBottom:"40px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",background:"#f5f5fc"}}>
                        <div className="col-12 text-center ">
                            <div>
                                <img src={addlogo} alt="Logo" width="75" height="75"/>
                            </div>
                            <h2 style={{fontFamily:"inherit",fontWeight:"bold"}}>Add New Supplier</h2>
                    </div>
                    <hr></hr>
                    <div style={{alignItems:"center"}}>
                        <div className="mb-3 row align-items-center">
                                <label for="inputCode" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Supplier ID</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputCode" style={{width:"500px"}}
                                    value={inputId}
                                    onChange={(e)=>{
                                        setinputId(e.target.value);
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-3 row align-items-center">
                                <label for="inputCode" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Supplier Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputCode" style={{width:"500px"}}
                                    value={inputName}
                                    onChange={(e)=>{
                                        setinputName(e.target.value);
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-3 row align-items-center">
                                <label htmlFor="email" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>E-mail</label>
                                <div className="col-sm-8">
                                    <input type="email" name="email" className="form-control" id="email" style={{width:"500px"}}
                                    value={inputEmail}
                                    onChange={(e)=>{
                                        setinputEmail(e.target.value);
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-3 row align-items-center">
                                <label for="inputCode" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Phone number</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputCode" style={{width:"500px"}}
                                    value={inputPhone}
                                    onChange={(e)=>{
                                        setinputPhone(e.target.value);
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-3 row align-items-center">
                                <label for="inputCode" className="col-sm-5 col-form-label" style={{fontWeight:"bold", marginBottom: "0"}}>Discription</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputCode" style={{width:"500px"}}
                                    value={inputDisc}
                                    onChange={(e)=>{
                                        setinputDisc(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <hr></hr>                           
                    </div>
                    <div style={{textAlign:"center"}}>
                        <button type="button" className="btn btn-primary" onClick={sendData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default AddSupplier;