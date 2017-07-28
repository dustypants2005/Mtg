import axios from "axios"

const url = "https://api.magicthegathering.io/v1/cards";

export function SearchCards(p, cb) {
	return (async ()=> {
		axios.get(url, {
				params: {
					name: p.name,
					page: p.page,
					pageSize: p.pageSize
				}
			})
			.then((response) =>{
				cb(null, response.data.cards);
			})
			.catch((error) => {
				cb(error, null);
			});
	})();
}