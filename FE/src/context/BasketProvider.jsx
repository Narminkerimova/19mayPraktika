import { createContext, useState } from "react";

export const BasketContext = createContext();
function BasketProvider({ children }) {
const [basket, setBasket] = useState([])

function addBasket(obj) {
  const addedBasket= basket.find(x=>x._id===obj._id)
  if (addedBasket) {
    addedBasket.count++
    setBasket([...basket])
  }
  else{
    setBasket([...basket,{...obj,count:1}])
  }
}

function decreaseBasket(id) {
  const addedBasket= basket.find(x=>x._id===id)
  if(addedBasket.count===1){
    return
  }
  else{
      addedBasket.count--
      setBasket([...basket])
    }
}

function removeBasket(obj) {
  setBasket(basket.filter(x=>x._id!==obj._id))
}

function totalBasket(){
  return basket.reduce((total,initial)=>total+(initial.price*initial.count),0)
}

function isCheckedBasket(obj){
  return basket.some(x=>x._id===obj._id)
}





  return <BasketContext.Provider value={{basket,addBasket,decreaseBasket,removeBasket,totalBasket,isCheckedBasket}}>
    {children}</BasketContext.Provider>;
}

export default BasketProvider;
