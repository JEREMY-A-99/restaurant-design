import { useState } from 'react'
import axios from "axios"
import Navbar from './Components/Navbar';
import "./App.css"
import pic from "./assets/img1.png";


function App() {

  const [submitted, setSubmitted] = useState(false);
  // form states
  const [name, setName]=useState('');
  const [age, setAge]=useState('');
  const [designation, setDesignation]=useState('');
  const [salary, setSalary]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(name,age,designation,salary);
    const data ={
      Name:name,
      Age:age,
      Designation:designation,
      Salary:salary,
    }
    axios.post('https://sheet.best/api/sheets/ffb1b772-e46a-4e68-a9cb-5857dc7d0ed0',data).then((response)=>{
      console.log(response);
      setName('');
      setAge('');
      setDesignation('');
      setSalary('');

    setSubmitted(true);

    })
  }
  


  return (
    <div className='container'>

      <div className='navigator'>
        <Navbar />
      </div>
      
      <br></br>
      <h2>We are thrilled to have you join us for The Career MasterClass On July 1st, 10:30am to 1:00pm.</h2>
      <br></br>

      <h3>
        Breakout Rooms:
        <br></br>
        <ol >
          <li>Negotiation tactics for salary and benefits.</li>
          <li>Effective job search strategies and networking tips.</li>
          <li>Crafting a Winning Resume&Ace Interviews.</li>
          <li>Financial literacy and budgeting for young professionals.</li>
          <li>Thriving Through Career Transitions:Overcoming Challenges and Embracing Change.</li>
        </ol>
      </h3>

      {!submitted ? (
        <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
        
        <label>Full Name</label>
        <input type="text" placeholder='Enter Your Full Name' required 
        className='form-control'
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />
        <br></br>

        <label>Occupation</label>
        <input type="text" placeholder='Enter Your Occupation' required 
        className='form-control'
        onChange={(e)=>setAge(e.target.value)}
        value={age}/>
        <br></br>

        <label>Email</label>
        <input type="text" placeholder='Enter Your Email' required 
        className='form-control'
        onChange={(e)=>setDesignation(e.target.value)}
        value={designation}/>
        <br></br>

        <label>Please select the breakout room of your interest (1,2,3,4,5)</label>
        <input type="text" placeholder='Type Breakout room number (1,2,3,4,5)' required 
        className='form-control'
        onChange={(e)=>setSalary(e.target.value)}
        value={salary}
        />
        <br></br>

        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>

      </form>
      ):(
        <p className='submit-text'>"Thanks For Submitting"</p>
      )}
      
    </div>
    
  )
}

export default App
