import './App.css';
import CardList from './cardlist';
import Main_photo from './mainpic';
import SearchBar from './searchbar';
import Mid_section from './middle';
import BottomBar from './bottom';
import Top_section from './top';
import Btm_section from './featured';
import Mid_section2 from './middle2';
import Footer from './footer';
import CardList2 from './file';


function App() {
  return (
    <div>
      <SearchBar/>   
      <Main_photo/>
      <Top_section/>
      <CardList />
      <Mid_section />
      <CardList2/>
      <BottomBar/>
      <Mid_section2/>
      <Btm_section/>
      <Footer/>
    </div>
  );
}

export default App;