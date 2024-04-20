import React,{useState,useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function TotalCost(){

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const [updateCost, setupdateCost] = useState([]);
  

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
        // Calculate total cost for items added in the current month
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        let totalCost = 0;
        console.log(currentMonth);
        console.log(currentYear);


        items.forEach((item) => {

            const itemDate = new Date(item.date);
            console.log(itemDate);
            if (itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear) {
                totalCost += item.cost;
            }
        });

        setTotal(totalCost);
    }, [items]);

    return(
        <div className="container">
            <h1>Total Cost: Rs :{total}.00</h1>
        </div>

    )
}

export default TotalCost;