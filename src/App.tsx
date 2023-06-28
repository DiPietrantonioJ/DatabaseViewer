import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/sections/home';

function App() {

  return (
    <>
      <main className="bg-black w-full h-full absolute flex flex-col justify-between items-center text-white p-2 pt-3 open-sans">
        <Header/>
        <div className="w-full h-full flex flex-row justify-center items-center">
          <Menu/>
          <Home/>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default App
