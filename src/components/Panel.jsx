import React from 'react'
import { useState } from 'react'
export default function Panel({children}) {
    const [open, setOpen] = useState(true)
  return (
    <div>
      <button onClick={()=>setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </div> 
  )
}
