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

    const handleReset =(e)=>{
        e.preventDefault();
        setGuests(0)
    }
  return (
    <div className='form-area'>
        <h2 className='form-title'>Table Reservation</h2>
        <form>
            <div className='guests-area'>
                <label htmlFor="guests">Guests</label>
                <div className="counter">
                    <span className="counter__output">{guests}</span>
                    <div className="btn__container">
                        <button className="control__btn" onClick={handleAddGuest}>+</button>
                        <button className="control__btn" onClick={handleMinusGuest}>-</button>
                        <button className="reset" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
            <div className="data_time-area">
                <label htmlFor="datetime">Date & Time</label>
                <input type="datetime-local" name="datetime" />
            </div>
            <div className="name-area">
                <div className="firstname">
                    <label htmlFor="firstname">First name</label>
                    <input type="text"  name='firstname'/>
                </div>
                <div className="lastname">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text"  name='lastname'/>
                </div>
            </div>
            <div className="email">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" />
            </div>
            <div className="special">
                <label htmlFor="special">Special requirements</label>
                <textarea name="special" id="" cols="30" rows="4"/>
            </div>
            <button type='submit' className='btn'>Reserve a table</button>
        </form>
    </div>
  )
}

export default Form