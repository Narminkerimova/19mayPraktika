import { useContext } from "react"
import { BasketContext } from "../../context/BasketProvider"

function Basket() {
  const {basket,addBasket,decreaseBasket,removeBasket,totalBasket} = useContext(BasketContext)
  if(basket.length===0){
    return <p>Hele Basketde hecne yoxdur</p>
  }
  return (
    <>
    <h1>Total:{totalBasket()}</h1>
    <div className="container">
          {basket.map((item)=>(
            <div className="card" key={item._id}>
              <div className="card_image">
                <img src={item.image} alt="products" />
              </div>
              <div className="card_title">
                <div className="card_name">{item.name}</div>
                <div className="card_price">{item.price}</div>
              </div>
              <div className="card_button">
               <button onClick={()=>addBasket(item)}>+</button>
               <div>Count:{item.count}</div>
               <button onClick={()=>decreaseBasket(item._id)}>-</button>
               <button onClick={()=>removeBasket(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Basket