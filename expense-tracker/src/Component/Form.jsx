import React,{useState,useEffect} from 'react'
import i from './Form.module.css';


function Form(props) {
    let [task,setTask] = useState({name:'',cost:0});
    let [array,setArray]= useState([]);
    let UpdateProduct =({target:{value,name}})=>{
        setTask({...task,[name]:value});
    }
    let  AddProducts=(event)=>{
        event.preventDefault();
        setArray([...array,task]);
    }
    useEffect(()=>{
        props.getProductData(array);
    },[array])
  return (
   <>
    <form onSubmit={AddProducts} className={i.formParent}>
      <div>
      <label>Name:</label>
      <input type="text" placeholder='Enter Product Name' name='name' onChange={UpdateProduct} />
      </div>
      <div>
      <label>Amount:</label>
      <input type="number" placeholder='Enter Product Price'name='cost'onChange={UpdateProduct} />
      </div>
      <button type='submit'>Add Products</button>
    </form>
  
   </>
  )
}

export default Form
