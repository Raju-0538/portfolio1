import Navbar from './Navbar';
import Text from './Text';
import Image from './Image'
import './Home.css'

function Home () {
    return (
        <>
      <Navbar />
      <div className='main'>
        <div className='one'>
          <Text/>
          </div>
        <div className='two'>
          <Image />
        </div>
      </div>
    </>
    );
}
export default Home;