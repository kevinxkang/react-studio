import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addToCart(index, price) {
        setCart((cart) => {
            let tempCart = [...cart];
            tempCart[index] = tempCart[index] + 1 || 1;
            return tempCart;
        });
        setTotal(total + price);
    }

    return (
        <div className="App">
            <div className="bakery-wrap">
                <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

                <div class="bakery-items">
                    {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                        <BakeryItem name={item.name} price={item.price} image={item.image} description = {item.description} index={index} onClick={addToCart}/>
                    ))}
                </div>
            </div>

            <div class ="cart">
                <h2>Cart</h2>
                {cart.map((item, index) => {
                    if (item > 0) {
                        return (
                            <p>
                                {item} x {bakeryData[index].name}
                            </p>
                        );
                    }
                })}
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default App;