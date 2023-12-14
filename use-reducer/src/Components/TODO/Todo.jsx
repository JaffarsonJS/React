import React, { useReducer } from 'react'

let initialState = {
    setTask:{},
    showTaskAry:[]
}

let taskReducerFun=(cstate,action)=>{

  // console.log(cstate)
  // console.log(action)
  // console.log(...cstate.setTask)
  // console.log(action.val)

  // console.log(cstate.showTaskAry)
  // console.log(...cstate.showTaskAry)

  // cstate.showTaskAry[0] = "iwhcgu"
  // cstate.showTaskAry[2] = "iwhcgu"


  switch(action.msg) {
    //! Case 1
      case "AddingTask" : {
        // console.log(action)
        // console.log(action.msg)
        // console.log(action.val)
        console.log(cstate)
        
        // console.log(cstate.setTask)
        
        // return action.val
        return {cstate,setTask : action.val}
      }

      //! Case 2
      case "ShowTaskActivated" : return [...cstate.showTaskAry]
      default:
  }
  console.log(initialState.showTaskAry)
  return true
}



function Todo() {

    let [task,taskDispatcher] = useReducer(taskReducerFun,initialState)

    let inpFun = ({target:{value}})=>{
        taskDispatcher({val: value,msg:"AddingTask"})
    }

    let subFun=()=>{
      console.log(task)
    }

  return (
    <div>
      <div>
          <h1>TODO List</h1>
          <input type="text" placeholder="Task" onChange={inpFun}/>
          <button onClick={()=>{
            taskDispatcher("ShowTaskActivated")
          }}>Add</button>
      </div>
    </div>
  )
}

export default Todo
