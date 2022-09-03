const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'az1ng3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
