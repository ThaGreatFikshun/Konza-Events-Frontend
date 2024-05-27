import axios from 'axios';

class BackendAPI {
  async fetchEvents() {
    try {
      const response = await axios.get('http://events.konza.go.ke:8080/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }
}

export default BackendAPI;
