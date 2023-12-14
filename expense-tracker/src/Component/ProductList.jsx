import React,{useState,useEffect} from 'react'


function ProductList(props) {
    console.log(props.data);
    let counts = 0;
        props.data.map(({cost})=>{
            counts= counts+Number(cost);
        });
        useEffect(()=>{
           props.getTotalCost(counts);
        },[counts])
    
    return (
        <>
            <table>
                <tr>
                    <th>No:</th>
                    <th>Product Name</th>
                    <th>Product Cost</th>
                </tr>
                {
                    props.data.map(({ name, cost }, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td> ₹ {cost}</td>
                            </tr>
                        )
                    })
                }
                {!counts ==0 ?
                <tr>
                     <td  colSpan="2">Total</td>
                     <td  colSpan="3">{counts}</td>
                </tr>
                :null
                }
            </table>

        </>
    )
}

export default ProductList
