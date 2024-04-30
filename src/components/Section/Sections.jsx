import  { useState } from 'react'
import './Section.css'
export const Sections = () => {
     const [counter, setCounter] = useState(0)
     console.log("render")
    return (
        <section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. I
                ure officiis voluptatibus corporis laudantium magni nihil dolorem co
                nsequuntur id culpa eaque? Maxime iusto alias quaerat vel aspernatur id veniam dolorum dicta!</p>
                <button onClick={() => setCounter(counter + 1)}>Button({counter})</button>
        </section>  
    )
}