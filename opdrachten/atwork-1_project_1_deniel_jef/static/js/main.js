(() => {
  const app = {
    init() {
      console.log("1. Initialize Application");
      this.cacheElements();
    },
    cacheElements() {
      console.log("2. Cache Elements");
      this.$referencesList = document.querySelector(".references-list");
      this.$referencesList.innerHTML = this.getHTMLForReferences(references);
    },
    getHTMLForReferences(references) {
      return references
        .map((ref) => {
          return `
        <div class="references">
        <h3 class="reference__title">${ref.title}</h3> 
        <picture class="reference__picture">
          <img src="${ref.pictureURL}">
          </picture>
        </div>
        `;
        })
        .join("");
    },
  };
  app.init();
})();
