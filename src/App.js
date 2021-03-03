// import logo from './logo.svg';
import './App.css';
import './gallery_column'
import GColumn from './gallery_column';
import Footer from "./footer";
function App() {
  return (
    <div>
      <div class="logo">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

      <h1 class="ml12">PARILEKH</h1>
      <h1 class="ml13">ARTISTS</h1>
      </div>

      <div class="header">
      <p class="sentense">Here are some of our artworks you may love</p>
      </div>
      
      <div class="row">
      
      <div class="column">
      	<GColumn name="c1"></GColumn>
      </div>
      <div class="column">
      	<GColumn name="c2"></GColumn>
      </div>
      <div class="column">
      	<GColumn name="c3"></GColumn>
      </div>
      <div class="column">
      	<GColumn name="c4"></GColumn>
      </div>
    </div>
    {/* <Footer></Footer> */}
      
    

    
    </div>
    
  );
}

export default App;
