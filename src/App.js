import Hero from "./components/Hero" 
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plans from "./components/Plans";
import Rooms from "./components/Rooms";
 
 function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Plans />
      <Rooms />
      <ImageSlider />
    </div>
  )
}

export default App;