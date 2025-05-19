import { createContext } from "react"
import BasketProvider from "./BasketProvider"
import WishListProvider from "./WishListProvider"
import RequestProvider from "./RequestsProvider"

export const MainContext= createContext()
function MainProvider({children}) {
  return (
      <BasketProvider>
        <WishListProvider>
          <RequestProvider>
            {children}
          </RequestProvider>
        </WishListProvider>
      </BasketProvider>
  )
}

export default MainProvider