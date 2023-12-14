import { useState } from "react"

export default function ReadMoreLess(){
let s = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores labore quas beatae corrupti illo alias repellat, commodi laborum obcaecati eligendi, reprehenderit quae quasi odio, tempora sed. Natus, a quidem!
Possimus, quis sunt porro, veniam aliquid adipisci, necessitatibus quam et doloremque saepe deleniti ducimus asperiores iste! Officia nulla minus consequatur, laudantium, itaque, porro quos quae officiis libero saepe provident similique.
Pariatur vitae quaerat eum quia magnam voluptates officia molestias commodi? Temporibus officia ad incidunt sequi, libero nobis neque dignissimos expedita facilis nam repellendus mollitia tempore et dolor laboriosam exercitationem deserunt.
Natus dolore ad animi quam soluta minima reprehenderit repellendus voluptates? Numquam quia debitis similique doloribus eveniet, quibusdam eius iure odio, laudantium doloremque quaerat commodi voluptatibus, architecto enim dolores. Iure, ad!
Repellat explicabo odio dignissimos impedit stinctio, in rem quidem sequi necessitatibus dolorum odio sint veritatis sit. Odio, rem non! Ab esse, tempora repellat corporis ullam consequatur labore aspernatur et consectetur.`


let [isBool,setIsBool] = useState(true)

function read(){
    setIsBool(!isBool)
}

return (
    <div>
        <p>{
        isBool?s.slice(0,200):s
        }
        <button onClick={read}>{isBool?"Read More":"Read Less"}</button>
        </p>
    </div>
)
}