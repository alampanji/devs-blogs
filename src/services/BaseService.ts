import axios from "axios";

export const instance = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/',
	timeout: 15000,
});

