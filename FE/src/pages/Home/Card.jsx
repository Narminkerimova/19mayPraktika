import { useContext } from "react"
import { Link } from "react-router";
import { RequestContext } from "../../context/RequestsProvider"
import { FaShoppingBasket } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { IoMdHeartDislike } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import "./style.css"
import { BasketContext } from "../../context/BasketProvider";
import { WishListContext } from "../../context/WishListProvider";

function Card() {
  const { product } = useContext(RequestContext);
  const { addBasket, isCheckedBasket, removeBasket } =
    useContext(BasketContext);
  const { addWish, isCheckedWish, removeWish } = useContext(WishListContext);
  
  if(product.length===0){
    return <p>Loading...</p>
  }

  return (
    <div className="container">
      {product.map((item)=>(
        <div className="card" key={item._id}>
          <div className="card_image">
            <img src={item.image} alt="products" />
          </div>
          <div className="card_title">
            <div className="card_name">{item.name}</div>
            <div className="card_price">{item.price}</div>
          </div>
          <div className="card_button">
            {
             isCheckedBasket(item) ? <button onClick={()=>removeBasket(item)}><IoBagRemove /></button> : <button onClick={()=>addBasket(item)}><FaShoppingBasket /></button>
            }
              {
             isCheckedWish(item) ? <button onClick={()=>removeWish(item)}><IoMdHeartDislike /></button> : <button onClick={()=>addWish(item)}><IoHeart /></button>
            }
            <Link to={`/detail/${item._id}`}>
            <button><FaInfoCircle /></button>
            </Link>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;
