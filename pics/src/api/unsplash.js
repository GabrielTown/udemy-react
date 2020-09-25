import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 64VUc2JsSjblkyIee3udXHC0NCimxl8_Kxy4bUPWTKg'
	}
});