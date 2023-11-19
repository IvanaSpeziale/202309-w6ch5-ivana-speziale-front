import { Trip } from '../model/trip.model';

export class ApiRepoTrips {
  apiUrl = 'http://localhost:3000/Trips';

  async getTrips(): Promise<Trip[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createTrip(newTrip: Partial<Trip>): Promise<Trip> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(newTrip),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateTrip(id: Trip['id'], updatedTrip: Partial<Trip>): Promise<Trip> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedTrip),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteTrip(id: Trip['id']): Promise<Trip[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
