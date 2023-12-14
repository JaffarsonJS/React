import './App.css';
import Parent from './Data Binding/Parent';
let data = 
// [
  {
    dataName : "Henry",
    dataAge : 20,
    dataAddress : "Salem"
  }
  // ,
  // {
  //   dataName : "ycfgxcg",
  //   dataAge : 20,
  //   dataAddress : ",kodai"
  // },
  // {
  //   dataName : "kkkkkkk",
  //   dataAge : 20,
  //   dataAddress : "Madurai"
  // },
  // {
  //   dataName : "mkhgyftcgvhbjk",
  //   dataAge : 20,
  //   dataAddress : "Ooty"
  // },
// ]

function App() {
  return (
    <div className="App">    
    {

      // data.map((ele,key)=>{
      //   return <Parent key={key} dataName = {ele.dataName} dataAge={ele.dataAge}/>
      // })
      <Parent key={data.key} dataName = {data.dataName} dataAge={data.dataAge}/>
    }


      {/* {data.map(({id,ename,age,imgSrc})=>{
        return <Student key={id} name={ename} a={age} img={imgSrc}/> */}
        
        {/* // {data.map((ele)=>{ */}
        {/* // return <Student key={ele.id} name={ele.ename} a={ele.age} img={ele.imgSrc}/>
        // return <Student {...ele}/> */}
        {/* }) */}
      {/* } */}
    </div>
  );
}

export default App;
