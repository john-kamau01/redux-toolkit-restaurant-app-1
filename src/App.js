import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const dispatch = useDispatch();
  const [reservationName, setReservationName] = useState('');

  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customer.value);

  const handleAddReservation = () => {
    if(!reservationName) return;

    dispatch(addReservation(reservationName));
    setReservationName('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            
              {reservations.map((name, index)=>{
                return <ReservationCard name={name} key={index} index={index} />
              })}
            
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>


        <div className="customer-food-container">
            {customers.map((customer, index) => {
              return <CustomerCard id={customer.id} name={customer.name} food={customer.food} key={index} />
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
