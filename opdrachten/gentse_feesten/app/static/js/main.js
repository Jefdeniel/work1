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
