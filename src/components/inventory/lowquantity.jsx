import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/inventory-images/geniuslogo.png"


function LowQuantity(){

    const [items, setItems] = useState([]);

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

    if (items.quantity){

    }
    
    useEffect(() => {
        // Display toast for items with quantity < 10
        items.forEach((item) => {
            if (item.quantity < 10) {
                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = new bootstrap.Toast(toastLiveExample);
                toastBootstrap.show();
            }
        });
    }, [items]);


    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }

    return(
        <div className="container position-relative" style={{marginTop:"20px"}}>
            <div className="position-absolute top-0 end-0">
            <button type="button" class="btn btn-primary position-relative" id="liveToastBtn">
                Alerts
                <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span> 
            </button>

            </div>
        

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <img src={logo} style={{height:"40px",width:"40px"}} class="rounded me-2" alt="..."/>
                <h5 class="me-auto">Items with low quantity</h5>
                <small></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {items.map(item => {
                        if (item.quantity < 10) {
                            return (
                                <div key={item.id}>
                                    <h6 className="text-danger">{item.name} = Quantity: {item.quantity}{item.kg}</h6>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            </div>
        </div>
    )

}

export default LowQuantity;