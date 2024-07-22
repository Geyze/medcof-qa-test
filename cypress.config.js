const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.grupomedcof.com.br/',
    setupNodeEvents(on, config) {
      // Configurações do mochawesome
      on('after:run', () => {
        const mochawesome = require('mochawesome');
        mochawesome.generateReports({
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: true,
        });
      });
    },
  },
});