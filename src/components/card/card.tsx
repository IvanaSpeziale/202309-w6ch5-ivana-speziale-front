import { Trip } from '../../model/trip.model';
import './card.scss';

type Props = {
  trip: Trip;
};

export function Card({ trip }: Props) {
  return (
    <li className="card">
      <div className="card-container">
        <p>{trip.placeName}</p>
        <p>{trip.location}</p>
        <p>{trip.description}</p>
      </div>
    </li>
  );
}
