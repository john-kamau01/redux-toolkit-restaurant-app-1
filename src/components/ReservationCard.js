import React from 'react';
import { useDispatch } from 'react-redux';

import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';

const ReservationCard = ({name, index}) => {
  const dispatch = useDispatch();

  return (
    <div className='reservation__holder'>
      <p>{name}</p>
      <div className='btn__container'>
        <button onClick={() => dispatch(removeReservation(index))} className="btn remove-btn">remove</button>
        <button 
          onClick={() => {
            dispatch(addCustomer({
              id: new Date().getTime().toString(36),
              name,
              food: []
            }))
            dispatch(removeReservation(index))
          }} 
          className="btn add-btn"
        >
          add
        </button>
      </div>
    </div>
  )
}

export default ReservationCard