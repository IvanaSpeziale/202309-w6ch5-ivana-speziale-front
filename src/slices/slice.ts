import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Trip } from '../model/trip.model';

export type TripsState = {
  trips: Trip[];
  page: number;
};

const initialState: TripsState = {
  trips: [],
  page: 1,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    load: (state: TripsState, { payload }: PayloadAction<Trip[]>) => {
      state.trips = payload;
      return state;
    },
    create: (state: TripsState, { payload }: PayloadAction<Trip>) => {
      state.trips.push(payload);
      return state;
    },
    update: (state: TripsState, { payload }: PayloadAction<Trip>) => {
      state.trips[state.trips.findIndex((item) => item.id === payload.id)] =
        payload;
      return state;
    },
    erase: (state: TripsState, { payload }: PayloadAction<Trip['id']>) => {
      state.trips.splice(
        state.trips.findIndex((item) => item.id === payload),
        1
      );
      return state;
    },
  },
});

export default tripsSlice.reducer;
export const { load, create, update, erase } = tripsSlice.actions;
