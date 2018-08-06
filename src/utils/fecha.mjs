// Fixme, add Unit tests
// expect milis
const fecha = (milis, withHours, locale = 'en-US') => {
  return milis.toLocaleDateString(locale)
}
// return 25 Mar 2018 at 23h

export default fecha
