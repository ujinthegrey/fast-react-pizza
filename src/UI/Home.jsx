import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';

function Home() {
    const username = useSelector(state => state.user.username)

    return (
      <div className='my-10 sm:my-16 text-center px-4'>
        <h1 className="sm:text-2xl md:text-3xl text-2xl font-bold mb-8">
          The best pizza.
          <br />
          <span className="text-emerald-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        { username === '' ? <CreateUser /> : <Button to='/menu' type="primary">Keep Ordering, {username}</Button>}
      </div>
    );
  }
  
  export default Home;