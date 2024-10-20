class BasePage {
      get pageUrl() {
          return cy.url();
      }
  
      assertPageUrl(endpointKey) {
          cy.fixture('url.json').then((urls) => {
              const expectedUrl = `${Cypress.config('baseUrl')}${urls[endpointKey]}`;
              this.pageUrl.should('equal', expectedUrl);
          });
      }

          // generate a random number between 0 and max number - 1
    randomNumber(number) {
        const random = Math.floor(Math.random() * number);
        return random;
    }
  }
  
  export default BasePage;
  