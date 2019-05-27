export default {
	changeCity (state, city) {
	state.city = city
	// state指的是所有的公用数据
	try {
		localStorage.city = city
		}
	catch (e) {}
	}
}