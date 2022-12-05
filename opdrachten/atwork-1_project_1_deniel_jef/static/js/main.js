(() => {
  const app = {
    init() {
      console.log("1. Initialize Application");
      this.cacheElements();
      this.registerListener();
    },
    cacheElements() {
      console.log("2. Cache Elements");
      this.$referencesList = document.querySelector(".references-list");
      this.$referencesList.innerHTML = this.getHTMLForReferences(references);
      this.$fromContact = document.querySelector("#fromContact");
    },
    registerListener() {
      console.log("3. Register Listeners");
      this.$fromContact.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const $elements = ev.currentTarget.elements;

        console.log(ev.currentTarget.elements.type);

        const data = {
          type: elements.type.value;
          provincie: $elements.provincie.value;
          name: $elements.txtName.value;

          // const dataAsJSONStr = json.stringify(data);
        }
        return false;
      });
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
