import axios from 'axios';

export default async function getEvents() {
  const res = await axios.get('/api/events');
  const events = res.data;
  return events;
}
