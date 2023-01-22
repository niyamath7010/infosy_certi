import "./Product.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"
import Rater from "./Rating"
import { Typography } from "@mui/material"
export default function Product(){

    const alertBuy=()=>{
        alert("added to cart")
    }
    return(
        <>
            <div className="main_continer">
                <div className="container">
                    <div className="image_container">
                        <img src={"./img/laptop.jpg"} />
                    </div>
                    <div className="content">
                    <h3>Gaming Laptop</h3>
                    <h4>Rs.30000</h4>
                    <p>An excellent choice for an awesome gaming experience</p>
                    </div>
                    <Rater className="ratings"/>
                    <br/>
                    <Button onClick={alertBuy} variant="danger"  >Add To Cart</Button>
                    {/* ​​​​​​​<Typography variant="h4" gutterBottom>Welcome to React</Typography>  */}

                </div>
            </div>
        </>
    )
}