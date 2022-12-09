import React,{useEffect,useRef,useState} from 'react'
import {Button} from 'react-bootstrap'

function UseRef() {
    let [name,setName] = useState("")
    let count = useRef(0)
    let rollRef = useRef(null)
    useEffect(()=>{
        count.current = count.current+1
    })
  return <div className='container-fluid'>
    <h1>Use Ref Example</h1>
    <input type={'text'} value={name} placeholder="Name" onChange={e=>setName(e.target.value)}/>
    <span>{count.current}</span><br/><br/>
    <input type="text" placeholder='Roll No.' ref={rollRef}/><br/><br/>
    <Button varient='primary' onClick={()=>rollRef.current.focus()}>Click me to Focus</Button>
  
  </div>
}

export default UseRef