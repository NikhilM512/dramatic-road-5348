import "./menuCard.css"
import { Link } from "react-router-dom"

export const MenuCards = ({ img, title }) => { 
    return <>
        <div className="main_card_div">

            <Link className="link" to="/menu">
        <img className="cards_img" src={img} alt="" />
        <h4 className="menu_title">{ title}</h4>
            </Link>

        </div>
    
    
    
    </>
}