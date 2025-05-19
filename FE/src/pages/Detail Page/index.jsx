import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RequestContext } from "../../context/RequestsProvider";
import { WishListContext } from "../../context/WishListProvider";
import { FaShoppingBasket } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { IoMdHeartDislike } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { BasketContext } from "../../context/BasketProvider";
import "./style.css"

function Detailpage() {
  const { id } = useParams();
  const {url} = useContext(RequestContext);
  const { isCheckedBasket, removeBasket, addBasket } =
    useContext(BasketContext);
  const { removeWish, isCheckedWish, addWish } = useContext(WishListContext);
  const [detail, setDetail] = useState([]);

  async function getProductById(url, id) {
    try {
      const res = await fetch(url + id);
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProductById(url, id);
  }, []);

  return (
    <div className="detail_container">
      <div className="card" key={detail._id}>
        <div className="card_image">
          <img src={detail.image} alt="products" />
        </div>
        <div className="card_title">
          <div className="card_name">{detail.name}</div>
          <div className="card_price">{detail.price}</div>
        </div>
        <div className="card_button">
          {isCheckedBasket(detail) ? (
            <button onClick={() => removeBasket(detail)}>
              <IoBagRemove />
            </button>
          ) : (
            <button onClick={() => addBasket(detail)}>
              <FaShoppingBasket />
            </button>
          )}

          {isCheckedWish(detail) ? (
            <button onClick={() => removeWish(detail)}>
              <IoMdHeartDislike />
            </button>
          ) : (
            <button onClick={() => addWish(detail)}>
              <IoHeart />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
