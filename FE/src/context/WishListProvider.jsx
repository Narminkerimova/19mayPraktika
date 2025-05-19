import { createContext, useState } from "react"

export const WishListContext= createContext()
function Wishlist({children}) {
const [wish, setWish] = useState([])

function addWish(obj) {
  const addedWish= wish.find(x=>x._id===obj._id)
  if (addedWish) {
    return
  }
  else{
    setWish([...wish,{...obj}])
  }
}


function removeWish(obj) {
  setWish(wish.filter(x=>x._id!==obj._id))
}

function totalWish(){
  return wish.reduce((total,initial)=>total+ initial.price,0)
}

function isCheckedWish(obj){
  return wish.some(x=>x._id===obj._id)
}


  return (
    <WishListContext.Provider value={{addWish,wish,removeWish,totalWish,isCheckedWish}}>
      {children}
    </WishListContext.Provider>
  )
}

export default Wishlist