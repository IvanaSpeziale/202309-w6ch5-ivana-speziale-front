import { useEffect } from 'react';
import { Card } from '../card/card';
/* import './list.scss'; */
import { useTrips } from '../../hooks/use.trip';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
export function List() {
  const { trips } = useSelector((state: RootState) => state.trips);
  const { loadTrips } = useTrips();

  useEffect(() => {
    loadTrips();
  }, [loadTrips]);
  console.log('Trips:', trips);
  return (
    <div className="list-container">
      <ul className="trip-list">
        {trips.map((item) => (
          <Card key={item.id} trip={item}></Card>
        ))}
      </ul>
    </div>
  );
}
