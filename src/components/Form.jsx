import{useState} from 'react'

const Form = () => {
    const [guests, setGuests] = useState(0)
    
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

  return (
    <div className='form-area'>
        <h2 className='form-title'>Table Reservation</h2>
        <form>
            <div className='guests-area'>
                <label htmlFor="guests">Guests</label>
                <div className="counter">
                    <button className="control__btn" onClick={handleMinusGuest}>&#45;</button>
                    <span className="counter__output">{guests}</span>
                    <button className="control__btn" onClick={handleAddGuest}>&#43;</button>
                </div>
            </div>
            <div className="data_time-area">
                <label htmlFor="datetime">Date & Time</label>
                <input type="datetime-local" name="datetime" />
            </div>
            <div className="name-area">
                <div className="firstname">
                    <label htmlFor="firstname">First name</label>
                    <input type="text"  name='firstname' placeholder='Jane'/>
                </div>
                <div className="lastname">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text"  name='lastname' placeholder='Doe'/>
                </div>
            </div>
            <div className="email">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder='example@example.com'/>
            </div>
            <div className="special">
                <label htmlFor="special">Special requirements</label>
                <textarea name="special" id="" cols="30" rows="4" placeholder='Please specify your special requirements'/>
            </div>
            <button type='submit' className='submit-btn'>Reserve a table</button>
        </form>
    </div>
  )
}

export default Form