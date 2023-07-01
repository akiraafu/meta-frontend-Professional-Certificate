import{useState} from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const [guests, setGuests] = useState(0)
    const [datetime, setDatetime] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [special, setSpecial] = useState('')
    
    const handleAddGuest =(e)=>{
        e.preventDefault();
        setGuests(guests => guests + 1)
    }
    const handleMinusGuest =(e)=>{
        e.preventDefault();
        if (guests > 0) {
            setGuests(guests => guests - 1)
        }
    }

    const handleDatetime=(e)=>{
        setDatetime(e.target.value)
        console.log(datetime)
    }

    const handleFirstname =(e)=>{
        setFirstname(e.target.value)
    }

    const handleLastname=(e)=>{
        setLastname(e.target.value)
    } 

    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleSpecial =(e)=>{
        setSpecial(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(guests,firstname,lastname,datetime,phoneNumber,email,special)
    }



  return (
    <div className='form-area'>
        <h2 className='form-title'>Table Reservation</h2>
        <form onSubmit={handleSubmit}>
            <div className='guests-area'>
                <label htmlFor="guests">Guests</label>
                <div className="counter">
                    <button className="control__btn" onClick={handleMinusGuest} >&#45;</button>
                    <span className="counter__output" data-testid="guestNumber">{guests}</span>
                    <button className="control__btn" onClick={handleAddGuest} data-testid="addOne">&#43;</button>
                </div>
            </div>
            <div className="data_time-area">
                <label htmlFor="datetime">Date & Time</label>
                <input type="datetime-local" name="datetime" value={datetime} onChange={handleDatetime}/>
            </div>
            <div className="name-area">
                <div className="firstname">
                    <label htmlFor="firstname">First name</label>
                    <input type="text"  name='firstname' placeholder='Jane' onChange={handleFirstname} value={firstname}/>
                </div>
                <div className="lastname">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text"  name='lastname' placeholder='Doe' onChange={handleLastname} value={lastname}/>
                </div>
            </div>
            <div className="email">
                <label htmlFor="phone">Phone Number</label>
                <input onChange={handlePhoneNumber} value={phoneNumber} type="number" name="phone" placeholder='0000000000'/>
            </div>
            <div className="email">
                <label htmlFor="email">Email Address</label>
                <input onChange={handleEmail} value={email} type="email" name="email" placeholder='example@example.com'/>
            </div>
            <div className="special">
                <label htmlFor="special">Special requirements</label>
                <textarea onChange={handleSpecial} value={special} name="special" id="" cols="30" rows="4" placeholder='Please specify your special requirements'/>
            </div>
            {/* <button type='submit' className='btn'>Reserve a table</button> */}
            <Link className='btn text-center leading-10' to='/confirmed'>Reserve a table</Link>
        </form>
    </div>
  )
}

export default Form