interface ConfigParams {
  safeUrl?: string;
}

export const quickExit = (config?: ConfigParams) => {
  const safeUrl = config && config.safeUrl ? config.safeUrl : 'https://www.google.com/search?q=google+weather';

  // blank display & clear title
  const body = document.getElementsByTagName('body')[0];
  body.style.display = 'none';
  document.title = '';

  // Clear as much history as possible
  if (window.history) {
    try {
      window.history.replaceState({}, '', '/');
    } catch (e) {}
  }

  if (window) {
    // clear sessions / cookies / local storage
    window.sessionStorage.clear();
    window.localStorage.clear();
    const res = document.cookie;
    const multiple = res.split(';');
    for (let i = 0; i < multiple.length; i++) {
      let key = multiple[i].split('=');
      document.cookie = key[0] + ' =; expires = Thu, 01 Jan 1970 00:00:00 UTC';
    }

    // redirect current tab
    window.location.replace(safeUrl);

    // Open new tab and focus
    window.open(safeUrl, 'Google')!.focus();
  }
};

export default quickExit;
