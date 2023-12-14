import './App.css';
// import Student from "./Student"
// import { empData } from './stuDetails';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';




export default function App() {
  let ss = {background : 'green', marginBlock : '10rem', color : 'white', padding : "5rem" };

  

return (
  <div>
    <header className='hndf'>
      <Header className="hndf"/ >
    </header>

    <Content style={ss}/ /* It inline css won't work on components*/>
      

    <footer className='hndf'>
      <Footer/>
    </footer>
  </div>
)







//! Rendering the elements
  // return (
  //   <div className="App">

  //       {
  //         empData.map(ele=>{
  //           return <Student ename = {ele.ename} key={ele.id} id = {ele.id}/>
  //         })
  //       }
  //   </div>
  // );
  
}

