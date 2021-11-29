let neighborhoods = [];
const loadNeighborhoodsData = async () => {
	const response = await fetch("/api/neighborhoods");
	if (response.ok) {
		const neighborhoods_data = response.json();
		return neighborhoods_data;
	} else return null;
};

loadNeighborhoodsData()
	.then((data) => {
		neighborhoods = data;
		console.log(neighborhoods);
		return data;
	})
	.then((err) => {});
