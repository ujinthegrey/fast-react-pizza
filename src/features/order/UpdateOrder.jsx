import { useFetcher } from 'react-router-dom'
import Button from '../../UI/Button'
import { updateOrder } from '../../services/apiRestaurant'

function UpdateOrder({ order }) {
  const fetcher = useFetcher()
  console.log(order.priority)
  return (
    <fetcher.Form method='PATCH' className='text-right'>
        <Button type='primary'>Make Priority</Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
    const data = {priority: true}
    await updateOrder(params.orderId, data)
    return null
}