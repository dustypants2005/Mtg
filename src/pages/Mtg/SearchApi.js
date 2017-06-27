import axios from "axios"

const url = "https://api.magicthegathering.io/v1/cards";

export function SearchCards(name, cb) {
	return (async ()=> {
		axios.get(url, {
				params: {
					name
				}
			})
			.then((response) =>{
				console.log("Response Data : ", response.data.cards);
				cb(null, response.data.cards);
			})
			.catch((error) => {
				console.log("Error : ", error);
				cb(error, null);
			});
	})();
}