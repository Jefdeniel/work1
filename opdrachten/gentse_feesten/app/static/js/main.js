(() => {
  const app = {
    initialize() {
      // cache
      this.cacheElements();
      // register listeners
      this.registerListeners();
      // update UI,
      this.updateUI();
    },
    cacheElements() {},
    registerListeners() {},
    async updateUI() {},
  };
  app.initialize();
})();

// Get url information
// get the url of the current web page
const urlStr = window.location;
console.log(urlStr);
// make an url object (instance from the URL class)
const url = new URL(urlStr);
console.log(url);
// Get the search params from the url object
const searchParams = url.searchParams;
const product = searchParams.get("product");
const color = searchParams.get("color");
console.log(product, color);
// Dit volstaat dus om zaken uit uw url te halen, je kan ermee loopen etc
