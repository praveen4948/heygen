import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './utils/Navbar';
import { Home } from './component/Home';

function App() {
  return (
    <div >
      <Navbar/>
        <div className="home_page_container">
          <Home/>
        </div>
    </div>
  );
}

export default App;
