let defaultCity = "Chicago"

try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {}
// 有的浏览器不支持localStorage
export default {
	city: defaultCity
}
