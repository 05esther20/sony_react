import Hd from './component/layout/Hd'
import Main from './component/main/Main'
import Product from './component/main/Product'
import Video from './component/main/Video'
import Ps5 from './component/main/Ps5'
import Event from './component/main/Event'
import Sonyacademy from './component/main/Sonyacademy'
import Footer from './component/layout/Footer'

function App() {
  return (
    <div className="App">
      <Hd></Hd>
      <Main></Main>
      <Product></Product>
      <Video></Video>
      <Ps5></Ps5>
      <Event></Event>
      <Sonyacademy></Sonyacademy>
      <Footer></Footer>
    </div>
  );
}

export default App;
