import { useCallback, useMemo } from 'react';
import { ApiRepoTrips } from '../services/api.repo';
import { Trip } from '../model/trip.model';
import { useDispatch } from 'react-redux';
import * as ac from '../slices/slice';

export function useTrips() {
  const dispatch = useDispatch();

  const repo = useMemo(() => new ApiRepoTrips(), []);

  const loadTrips = useCallback(async () => {
    try {
      const loadedTrips = await repo.getTrips();
      dispatch(ac.load(loadedTrips));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addTrip = async (Trip: Partial<Trip>) => {
    try {
      const newTrip = await repo.createTrip(Trip);
      dispatch(ac.create(newTrip));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateTrip = async (id: Trip['id'], Trip: Partial<Trip>) => {
    try {
      const updatedTrip = await repo.updateTrip(id, Trip);
      console.log(updatedTrip);
      dispatch(ac.update(updatedTrip));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteTrip = async (id: Trip['id']) => {
    try {
      await repo.deleteTrip(id);
      dispatch(ac.erase(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadTrips,
    addTrip,
    updateTrip,
    deleteTrip,
  };
}
