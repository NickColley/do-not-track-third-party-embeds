// TODO: Might be able to do this nicer, with a server-side.
var isForced = (window.location.search === "?force=dnt")
var isEnabled = (
  navigator.doNotTrack === "1" ||
  navigator.doNotTrack === "yes" || // Firefox 31 and below
  navigator.msDoNotTrack === "1" || // IE 9 - 10
  window.doNotTrack === "1" // IE 11 / Edge 16 and below
)
var isDisabled = !isEnabled

if(isEnabled) {
  document.querySelector('.js-dnt-enabled').removeAttribute('hidden')
} else if (isForced) {
  document.querySelector('.js-dnt-forced').removeAttribute('hidden')
  document.querySelector('[href="/?force=dnt"]').setAttribute('hidden', true)
  document.querySelector('[href="/"]').removeAttribute('hidden')

  window.doNotTrack = "1"
} else {
  document.querySelector('.js-dnt-disabled').removeAttribute('hidden')
  document.querySelector('[href="/"]').setAttribute('hidden', true)
  document.querySelector('[href="/?force=dnt"]').removeAttribute('hidden')
}