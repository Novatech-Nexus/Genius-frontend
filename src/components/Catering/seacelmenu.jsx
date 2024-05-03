import React from 'react'; 

function Seacelmenu() {
    return (
        <div style={{maxWidth: 'auto', margin: '0 auto', padding: '5px'}}>
        <style>
            {`
            .coldesign {
                margin: auto;
            }
            
            h1 {
                background-color: #2D5A27; 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: white;
                padding: 10px; 
                text-align:center;
            }
            
            p {
                text-align: justify;
                font-size: 18px;
                font-weight: bold;
            }
            
            .imgOne {
                width: 230px; 
                height: 200px; 
                margin-right: 20px; 
            }
            
            .custom-button {
                background-color: #760203; 
                border: none;
                color: white;
                font-weight: bold;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 15px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 8px;
                width: 250px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 50px; 
                margin-bottom: 50px; 
            }
            
            td {
                vertical-align: top;
            }
            
            h2 {
                background-color:#D3D3D3; 
                padding: 5px;
                max-width: 1400px;
                margin-top: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #E2522F;
                text-align:center;
            }
            
            ul {
                text-align: left;
                font-weight: bold;
                list-style-type: circle; 
            }
            
            ul li {
                margin: 8px 0; 
                padding-left: 20px; 
                margin-left: 20px;
            }
            
            strong {
                text-decoration: underline;
                margin-top: 20px;
            }
            `}
        </style>
              <h2 id='morning'>Morning Wedding Menu</h2>
            <p style={{textAlign: 'center', marginTop:'20px'}}>
                <strong>Beverages</strong><br />
                Ceylon Tea<br />
                Freshly Brewed Coffee<br />
                Fruit Juices (Orange, Pineapple, Mango)<br />
                Tender Coconut Water<br />
                
                <strong>Starters</strong><br />
                Sri Lankan Breakfast Bites (Hoppers, String Hoppers, Egg Roti) with Lunu Miris and Coconut Sambol<br />
                Tropical Fruit Platter<br />
                Vegetable Samosas with Mint Chutney<br />
                Fish Cutlets with Spicy Sauce<br />
                
                <strong>Main Course</strong><br />
                Kiribath (Milk Rice) with Lunu Miris and Fish Curry<br />
                Sri Lankan Breakfast Buffet (Dhal Curry, Potato Curry, Sambols, and Accompaniments)<br />
                String Hopper Biriyani with Chicken Curry<br />
                Egg Hoppers with Kiri Hodi (Coconut Milk Gravy) and Lunu Miris<br />
                
                <strong>Desserts</strong><br />
                Watalappam (Traditional Sri Lankan Coconut Custard)<br />
                Fresh Fruit Salad with King Coconut Syrup<br />
                Sri Lankan Love Cake<br />
                Milk Toffee<br />
                
                <strong>Extras (Optional)</strong><br />
                Live Station: Kottu Roti<br />
                Freshly Made Appam with Sweet Coconut Milk<br />
                Sri Lankan Pancakes (Pani Pol)<br />
            </p>
            <p style={{textAlign: 'center',fontWeight:'bold',marginTop:'50px'}}>Total Package Price Per Person (excluding taxes and service charge): LKR 4500</p>
            
            <h2 id='afternoon' style={{marginTop:'50px'}}>Afternoon Wedding Menu</h2>
            <p style={{textAlign: 'center',marginTop:'20px'}}>
                <strong>Welcome Drinks</strong><br />
                Fruit Punch<br />
                
                <strong>Appetizers</strong><br />
                Bruschetta with Tomato and Basil <br />
                Chicken Satay Skewers with Peanut Sauce <br />
                Vegetable Spring Rolls with Sweet Chili Sauce<br />
                                
                <strong>Soup</strong><br />
                Cream of Mushroom Soup<br />
                
                <strong>Salads</strong><br />
                Greek Salad with Feta and Olives<br />
                Caesar Salad with Grilled Chicken<br />
                
                <strong>Main Course</strong><br />
                Grilled Fish with Lemon Butter Sauce <br />
                Chicken Piccata with Capers and Lemon Sauce<br /> 
                Beef Lasagna<br />
                Chicken Biryani<br />
                Saffron Rice Pilaf<br />

                <strong>Sides</strong><br />
                Garlic Mashed Potatoes <br />
                Steamed Mixed Vegetables<br />
                Garlic Bread<br />

                <strong>Desserts</strong><br />
                Chocolate Lava Cake with Vanilla Ice Cream<br />
                Fresh Fruit Platter<br /> 
                Tiramisu<br />
                Chocolate Fondue with Marshmallows and Strawberries<br />

                <strong>Beverages</strong><br />
                Assorted Teas and Coffees<br />
                Iced Tea and Lemonade<br />
                Fresh Fruit Juice (Orange/Pineapple)<br />
                Mineral Water (500ml)<br />
            </p>
            <p style={{textAlign: 'center',fontWeight:'bold',marginTop:'50px'}}>Total Package Price Per Person(excluding taxes and service charge): LKR 6000</p>
        
            <h2 id='evening' style={{marginTop:'50px'}}>Evening Wedding Menu</h2>
            <p style={{textAlign: 'center',marginTop:'20px'}}>
                <strong>Welcome Drinks</strong><br />
                Fruit Punch<br />
                
                <strong>Starters</strong><br />
                Assorted Sushi Rolls<br />
                Caprese Skewers with Balsamic Glaze<br />
                Mini Chicken Satay with Peanut Sauce <br />
                Spanakopita (Greek Spinach Pie)<br />
                                
                <strong>Main Course</strong><br />
                Beef Tenderloin Medallions with Red Wine Reduction<br />
                Grilled Salmon with Lemon Dill Sauce<br /> 
                Vegetable Paella<br /> 
                Chicken Marsala<br />

                <strong>Sides</strong><br />
                Garlic Mashed Potatoes<br />
                Grilled Vegetables<br />
                Mediterranean Couscous<br />

                <strong>Desserts</strong><br />
                Mini Cheesecake Assortment (New York, Chocolate, Berry)<br />
                Tiramisu Shooters<br />
                Fresh Fruit Platter<br />

                <strong>Beverages</strong><br />
                Assorted Mocktails (Virgin Mojito, Fruit Punch, Virgin Pina Colada) <br />
                Fresh Juice Bar (Orange, Pineapple, Watermelon) <br />
                Mineral Water<br />
            </p>
            <p style={{textAlign: 'center',fontWeight:'bold',marginTop:'50px'}}>Total Package Price Per Person(excluding taxes and service charge): LKR 4500</p>
        
            <h2 id='night' style={{marginTop:'50px'}}>Night Wedding Menu</h2>
            <p style={{textAlign: 'center',marginTop:'20px'}}>
                <strong>Welcome Drinks</strong><br />
                Fruit Punch<br />
                
                <strong>Appetizers</strong><br />
                Caprese Skewers<br />
                Spring Rolls with Sweet Chili Sauce<br />
                Mini Quiches<br />
                                
                <strong>Soup</strong><br />
                Cream of Mushroom Soup<br />
                Tom Yum Soup<br />
                
                <strong>Salads</strong><br />
                Greek Salad with Feta and Olives<br />
                Caesar Salad with Grilled Chicken<br />
                
                <strong>Main Course</strong><br />
                Grilled Chicken with Rosemary Potatoes<br />
                Beef Stroganoff with Buttered Rice<br />
                Vegetable Pad Thai<br /> 
                Grilled Fish with Lemon Butter Sauce<br />

                <strong>Sides</strong><br />
                Garlic Mashed Potatoes <br />
                Steamed Mixed Vegetables<br />
                Garlic Bread<br />

                <strong>Desserts</strong><br />
                Chocolate Lava Cake with Vanilla Ice Cream<br />
                Fresh Fruit Platter<br /> 
                Tiramisu<br />
                Chocolate Fondue with Marshmallows and Strawberries<br />
                Mango Sorbet<br />

                <strong>Beverages</strong><br />
                Assorted Teas and Coffees<br />
                Iced Tea and Lemonade<br />
                Fresh Fruit Juice (Orange/Pineapple)<br />
                Mineral Water (500ml)<br />
            </p>
            <p style={{textAlign: 'center',fontWeight:'bold',marginTop:'50px'}}>Total Package Price Per Person(excluding taxes and service charge): LKR 6000</p>
        </div>
    )
}

export default Seacelmenu;