import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Main from './pages/Main.jsx'
import('./App.css')
function App() {

  return (
    <div className="App flex justify-between flex-col">
      <div>
        <Header></Header>
        <Main></Main></div>
      <Footer></Footer>
    </div>
  )
}

export default App
