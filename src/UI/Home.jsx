import CreateUser from '../features/user/CreateUser'

function Home() {
    return (
      <div className='my-10 sm:my-16 text-center px-4'>
        <h1 className="sm:text-2xl md:text-3xl text-2xl font-bold mb-8">
          The best pizza.
          <br />
          <span className="text-emerald-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <CreateUser />
      </div>
    );
  }
  
  export default Home;