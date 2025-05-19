import { useContext } from "react"
import { WishListContext } from "../../context/WishListProvider"

function WishList() {
  const {wish,removeWish,totalWish} = useContext(WishListContext)

   if(wish.length===0){
    return <p>Hele WishListde hecne yoxdur</p>
  }
  return (
    <>
    <h1>Total:{totalWish()}</h1>
    <div className="container">
          {wish.map((item)=>(
            <div className="card" key={item._id}>
              <div className="card_image">
                <img src={item.image} alt="products" />
              </div>
              <div className="card_title">
                <div className="card_name">{item.name}</div>
                <div className="card_price">{item.price}</div>
              </div>
              <div className="card_button">
               <button onClick={()=>removeWish(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default WishList