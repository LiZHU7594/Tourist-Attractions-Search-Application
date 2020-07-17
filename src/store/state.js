let defaultCity = 'Chicago'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
