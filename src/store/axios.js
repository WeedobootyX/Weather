import axios from 'axios'; 

const instance = axios.create({
	//baseURL: 'https://cors-anywhere.herokuapp.com/https://boot.cqrify.com:9943/'
	baseURL: 'https://nano.cqrify.com:9943'
})

export default instance; 