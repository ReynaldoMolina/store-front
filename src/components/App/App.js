import './App.css';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainWindow } from '../MainWindow';

function App() {
  return (
    <div className='flx'>
      <SideMenu />
      <MainWindow>
        <Header />
      </MainWindow>
    </div>
  );
}

export default App;
