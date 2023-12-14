import React, { useContext } from 'react'
import { ContextExmp } from './PropDrilling'

function FinalChild({age,sm}) {
  let data = useContext(ContextExmp)
  return (
    <div>
        {/* <h1>{sm}</h1> */}

        <ContextExmp.Consumer>
        {
           ((data)=>{
              return <div>
               <h1>{data.age}</h1>
               <h1>{data.sm}</h1>
               </div>
            })
          //  (({age,sm})=>{
          //     return <div>
          //      <h1>{age}</h1>
          //      <h1>{sm}</h1>
          //      </div>
          //   })
         }

                {/* {
                    (({age,sm})=>{
                    return <div>
                        <h1>{age}</h1>
                        <h1>{sm}</h1>
                    </div>
                    })
                } */}
        </ContextExmp.Consumer>      
    </div>
  )
}

export default FinalChild














// import React from 'react'
// import { ContextExmp } from './PropDrilling'

// function FinalChild({age,sm}) {
//   return (
//     <div>
//         {/* <h1>{sm}</h1> */}

//         <ContextExmp.Consumer>
            
//                 {
//                     (({age,sm})=>{
//                     return <div>
//                         <h1>{age}</h1>
//                         <h1>{sm}</h1>
//                     </div>
//                     })
//                 }
//         </ContextExmp.Consumer>      
//     </div>
//   )
// }

// export default FinalChild
