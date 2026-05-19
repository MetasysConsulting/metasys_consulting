const SKIP_HOME_INTRO_KEY = "metasys-skip-home-intro";

/** Call before client navigation to home (logo, nav links). */
export function markSkipHomeIntro() {
  sessionStorage.setItem(SKIP_HOME_INTRO_KEY, "1");
}

/** Returns true if this home visit should skip the hero reveal. */
export function consumeSkipHomeIntro(): boolean {
  const skip = sessionStorage.getItem(SKIP_HOME_INTRO_KEY) === "1";
  sessionStorage.removeItem(SKIP_HOME_INTRO_KEY);
  return skip;
}
