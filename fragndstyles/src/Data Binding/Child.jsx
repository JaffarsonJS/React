export default function Child({dataName,dataAge,usingChildProps})
{
    
    let childData = "child Bro"
    
    usingChildProps(childData)

    // return(
    //     <div>
    //         {/* <h1 usingChildProps={add}></h1> */}
    //     </div>
    // )
}