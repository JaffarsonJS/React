import Child from "./Child"

export default function Parent(props){
    let nameStyle = {
        fontSize : "20px",
        textAlign : "center"
    }

    //! Creating Function in parent
    function getChildDataFromFunction(dataFromTheChild)
    {
        console.log("This is " + dataFromTheChild)
    }

getChildDataFromFunction()

    return(
        <div>
            <h1 style={nameStyle}>Name : {props.dataName}</h1>
            <h1 style={nameStyle}>Age : {props.dataAge}</h1>
            <br />

            {/* Sending function to child to recieve the data  */}.
            <Child usingChildProps = {getChildDataFromFunction}/>
        </div>
    )
}