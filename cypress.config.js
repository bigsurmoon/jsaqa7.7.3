const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u9juvb',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl : "https://petstore.swagger.io",
  },
});
