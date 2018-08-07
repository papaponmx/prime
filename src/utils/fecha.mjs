const defaultOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

// FIXME: add Unit tests and hour support
// expect milis

const fecha = (milis, locale = 'en-US', options = defaultOptions) => {
  const d = new Date(milis);
  return d.toLocaleDateString(locale, options)
}
// return 25 Mar 2018 at 23h

export default fecha;
