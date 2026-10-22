// ---------------------------------------------------------------------------
// TAGHRID — content configuration
// This is the ONLY file you should need to touch to personalize the site.
// Replace the placeholder values below with the real name, message and
// audio file once you have them.
// ---------------------------------------------------------------------------

const content = {
  // Shown letter-by-letter in Scene 02 of the intro, and again on the home page.
  name: 'Taghrid',

  // Hero line used in the intro (Scene 04) and the footer area of the home page.
  tagline: 'A mark that time cannot erase.',

  // Top-of-page / intro wordmark.
  wordmark: 'ÉTERNEL',

  // Opening line, scene 02.
  arrivalLine: 'Some names are written. Others leave a mark on eternity.',

  // Path to the signature artwork. Keep it a real photographed/scanned
  // signature — not a script font standing in for one.
  signatureSrc: '/signature.png',

  // Optional background track. Drop a licensed mp3 at public/audio/theme.mp3
  // (e.g. a track you have the rights to use) — the site works perfectly
  // with no audio at all if this file is absent.
  audioSrc: '/audio/theme.mp3',

  // Revealed after "Discover Your Gift" is pressed. Replace with the real,
  // personal message — this placeholder is intentionally generic.
  gift: {
    heading: 'For Taghrid',
    body: [
      '',
      'HOPE U LIKE IT .',
    ],
    signOff: '— from SAKAKALABALAKA.',
  },

  footer: 'Made for TAGHRID.',
}


export default content
