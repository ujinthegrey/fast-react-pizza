import { formatCurrency } from "../../utils/helpers"
import Button from '../../UI/Button'
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentCuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
    const dispatch = useDispatch()
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const currentQuantity = useSelector(getCurrentCuantityById(id))
    const isInCart = !!currentQuantity

    function handleAddToCart() {
      const newItem = {
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
      }
      dispatch(addItem(newItem))
    }

    return (
      <li className="flex items-center gap-4 py-2">
        <img src={imageUrl} alt={name} 
          className={`h-28 ${soldOut ? 'opacity-65 grayscale' : ''}`}/>
        <div className="h-full flex flex-col grow">
          <p className="font-medium">{name}</p>
          <p className="italic capitalize">{ingredients.join(', ')}</p>
          <div className="flex items-center justify-between">
          {!soldOut
            ? <p className="text-sm">{formatCurrency(unitPrice)}</p> 
            : <p className="text-sm font-bold uppercase text-zinc-400">Sold out</p>
          }

          {isInCart && <div className="flex gap-3 items-center sm:gap-8">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id}/>
            </div>

          }  

          {!soldOut && !isInCart && <Button type="small" onClick={handleAddToCart}>Add to Card</Button>}
          </div>
        </div>
      </li>
    );
  }
  
  export default MenuItem;