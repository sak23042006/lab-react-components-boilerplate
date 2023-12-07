import './App.css';
import lake from "./image/lake.JPG";
import GallaryHeader from './components/GallaryHeader.jsx';
import GallaryBody from './components/GallaryBody.jsx';
import GallaryFooter from './components/GallaryFooter.jsx';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <GallaryHeader />
      <GallaryBody imageData = {imageData} />
      <GallaryFooter/> 
    </div>
  )
}

export default App;
