import { useState } from 'react'
import './Registration.css'
function Registration () {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [submitedData, setSubmittedData]=useState();

    function handleForm(){
        if(!name.trim()){
             alert("fill the name")
             return
        }

        if(!email.trim()){
             alert("fill the email")
             return
        }
        if(!password.trim()){
             alert("fill the password")
             return
        }

        setSubmittedData({name,email,password})
        setName("")
        setEmail("")
        setPassword("")

    }

    return(
        <div className='bg-white px-10 py-10' >
            <h1>Registration Form</h1>
        
            <div className='flex flex-col'>
            <label className='text-left'>Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Email</label>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Password</label>
            <input type="text" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button className='w-full' onClick={handleForm}>Submit</button>
        
            { submitedData && <div className='text-left border-l-6 border-b-green-700 rounded-2xl my-3 px-5 px-2 bg-emerald-200'>
                <h2>Summited Data</h2>
                <p>Name: {submitedData.name}</p>
                <p>Email: {submitedData.email}</p>
                <p>Password: {submitedData.password}</p>
            </div>}
        </div>
    )
}
export default Registration