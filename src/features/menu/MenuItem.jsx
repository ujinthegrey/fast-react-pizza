import { formatCurrency } from "../../utils/helpers"
import Button from '../../UI/Button'

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    console.log(id);
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

            <Button type="small">Add to Card</Button>
          </div>
        </div>
      </li>
    );
  }
  
  export default MenuItem;