import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
    const menu = useLoaderData()

    return (
    <ul className='px-2 py-6 divide-y-4 divide-zinc-100'>
      {menu.map((pizza) => (
       <MenuItem pizza={pizza} key={pizza.id}  />
    ))}
    </ul>
    )
  }

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu()
  return menu
}
  
export default Menu