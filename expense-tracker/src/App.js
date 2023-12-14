import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Expense from './Component/Expense';

function App(){

  return(
    <Expense/>
  )

  // let [data,setData] = useState({budget:"",Name:"",spent:""})
  // let [ary,setary] = useState([])

  // let subfun=(e)=>{
  //   e.preventDefault()
  //   setary([...ary,data])
  // }

  // let inpFun=({target:{name,value}})=>{
  //   setData({...data,[name]:value})
  // }


  // return (
  //   <div>
  //      <h1>My Budget Planner</h1>

  //      <Budget amount={data.budget}/>
  //      <AmountSpent amount={data.spent} />
  //      <Remaining amountBudget={data.budget} amountSpent={data.spent} />

  //    <form onSubmit={subfun}>
  //      <input type="text" placeholder='Budget Amount' name="budget" onChange={inpFun} />
  //      <input type="text" placeholder='Name that I spent' name="Name" onChange={inpFun}  />
  //      <input type="text" placeholder='Cost' name="spent" onChange={inpFun} />
  //      <button type='submit'>Save</button>
  //    </form>
  //   </div>
  // )

  // return (
  //   <div>
  //     <h1>My Budget Planner</h1>

  //     <ul>
  //       {
  //         ary.map((ele,ind)=>{
  //           return <li key={ind}>
  //             {ele.Name} {ele.spent}
  //             <button>delete</button>
  //           </li>
  //         })
  //       }
  //     </ul>

  //     <Budget amount={data.budget}/>
  //     <AmountSpent  amount={data.spent}/>
  //     <Remaining  amountBudget={data.budget} amountSpent={data.spent}/>

  //   <form onSubmit={subfun}>
  //     <input type="text" placeholder='Budget Amount' name="budget" onChange={inpFun} />
  //     <input type="text" placeholder='Name that I spent' name="Name" onChange={inpFun}  />
  //     <input type="text" placeholder='Cost' name="spent" onChange={inpFun} />
  //     <button type='submit'>Save</button>
  //   </form>

  //   </div>
  // ) 
}
export default App;
