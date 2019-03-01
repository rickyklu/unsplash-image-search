import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID cf05c928fd3322704dd5f1d22bbae8f407a8e932fc07f950f7962b48105b7114'
	}
});