import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./components/form.css"



function Form() {
    const [formdata, setFormdata] = useState();

    const handleChange = (e) =>{
        const inputName = e.target.name;
        // checkbox
        if(e.target.type === 'checkbox'){
            console.log(e.target.checked);
            setFormdata({...formdata,[inputName]: e.target.checked })
        }else{
            setFormdata({ ...formdata,[inputName]: e.target.value })
        }
    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        window.location = '/'
      }


  return (
  <div className='form-page'>
      <Link to="/"><h1 className='h1'>Home</h1></Link>
      <form>

          <div className='label'>
          <h2>Restuarent Name</h2>
        <input type="text" className="name" value={formdata?.name} name="name" required onChange={handleChange}/>
        </div>

        <div className='label'>
        <h2>Food Types</h2>
        <input value={formdata?.food} name="food" type="text" className="food" required onChange={handleChange} placeholder="South-North Indian, Chinese....." />
        </div>

        <div className='label'>
        <h2>1 Person Cost</h2>
        <input value={formdata?.cost} name="cost" type="number" className="cost" required  onChange={handleChange} placeholder="₹100 , ₹150 ...." />
        </div>

        <div className='label'>
        <h2>Payments</h2>
        <select name="payment" id="payment" onChange={handleChange} className="payment">
            <option value={formdata?.Card} >Card</option>
            <option value={formdata?.Cash}>Cash</option>
            <option value={formdata?.UPI}>UPI</option>
        </select>
        </div >

        <div className='label'>
        <h2>Ready Time</h2>
        <input value={formdata?.rent} name="salary" type="number" className="salary" required onChange={handleChange} placeholder="20 - 50 min" />
        </div>


        <div className='label'>
        <h2>Image URL</h2>
        <input value={formdata?.img} name="img" type="text" className="img" required onChange={handleChange}
        placeholder="https://entrackr.com/wp-content/uploads/2017/12/faasos-image-1.jpg" />
        </div>
      


        <input className="submitBtn" type="submit" onClick={handleSubmit} />
      </form>

  </div>
  )
}

export default Form