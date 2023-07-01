import React from 'react'
import { Link } from 'react-router-dom'


const ConfirmedBooking = () => {
  return (
    <div className='form-area'>
        <h2 className='form-title  mb-5'>Thank you for dining with us!
        Reservation Confirmed.</h2>
        <div className='flex flex-col gap-5 mb-5'>
        <table>
            <tbody>
                <tr>
                    <td className='font-bold'>Date & Time:</td>
                    <td>Tue, Jul 30</td>

                </tr>
                <tr>
                    <td className='font-bold'>Guests:</td>
                    <td>5</td>   
                </tr>
                <tr>
                    <td className='font-bold'>Name:</td>
                    <td>Jane Doe</td>    
                </tr>
                <tr>
                    <td className='font-bold'>Phone:</td>
                    <td>1234567890</td>
                </tr>
                <tr>
                    <td className='font-bold'>Email:</td>
                    <td>example@example.com</td>
                </tr>
                <tr>
                    <td className='font-bold'>Special requirements:</td>
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        {/* <button className='btn justify-self-center '>Back Home</button> */}
        <Link className='btn text-center leading-10' to='/'>Back</Link>
        
        </div>
    </div>
  )
}

export default ConfirmedBooking