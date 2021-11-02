import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Activities from './components/Activities'


function App() {
  console.log(process.env.NPS_API_KEY)
  return (
    <div>
        <Header />
        <Activities />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
