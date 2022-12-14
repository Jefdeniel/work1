(() => {
  const app = {
    init() {
      console.log("1. Initialize Application");
      this.cacheElements();
    },
    cacheElements() {
      console.log("2. Cache Elements");
      this.$maintenanceList = document.querySelector(".maintenance-list");
      this.$maintenanceList.innerHTML = this.getHTMLforMaintenance(data);
    },
    getHTMLforMaintenance(data) {
      return data
        .map((maint) => {
          return `
          <div class="maintenance">
            <picture class="maintenance__picture">
              <img src="${maint.image}">
            </picture>
            <h2 class="maintenance__title">${maint.title}</h2>
            <p class="maintenance__description">${maint.description}</p>
            <button class="btn-orange">Meer informatie</button>
        </div>
        `;
        })
        .join("");
    },
  };
  app.init();
})();
