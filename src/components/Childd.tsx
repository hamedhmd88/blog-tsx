// Childd.tsx
import { useState } from "react"
import Blogg from "./Blogg"

function Childd() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <Blogg setCount={setCount}>
        <p>This is a child element</p>
      </Blogg>
    </div>
  )
}

export default Childd
