import { useContext, useState } from "react";
import { RequestContext } from "../../context/RequestsProvider";
import "./style.css";

function Admin() {
  const { product,deleteElement,url } = useContext(RequestContext);
  const [search, setSearch] = useState("");
  const [sortProp, setSortProp] = useState({
    property:"",
    order:true
  })
  if (product.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div className="buttons">
        <button onClick={()=>setSortProp({property:"price",order:true})}>Artan</button>
        <button onClick={()=>setSortProp({property:"price",order:false})}>Azalan</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {product
          .toSorted((a,b)=>{
            if (sortProp.order) {
              return (a[sortProp.property] > b[sortProp.property]) ? 1 : ((b[sortProp.property] > a[sortProp.property]) ? -1 : 0)
            }
            else{
              return (a[sortProp.property] < b[sortProp.property]) ? 1 : ((b[sortProp.property] < a[sortProp.property]) ? -1 : 0)
            }
          })
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.image} alt="product" />
                </td>
                <td>
                  <button onClick={()=>deleteElement(url,item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
