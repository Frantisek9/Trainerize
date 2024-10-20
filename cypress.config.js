const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementace event listenerů zde (pokud potřebujete)
    },
    defaultCommandTimeout: 5000, // Nastaví výchozí timeout na 5 sekund
 

  },
});
