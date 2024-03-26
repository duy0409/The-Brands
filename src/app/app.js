// pages/_app.js
import '../app/css/Background.module.css';
import './css/ButtonMobile.module.css'
import Navabar from './components/ButtonMenu'
function App() {
    return (
        <div className="App">
            <Navabar />
        </div>
    );
}
export default App;
