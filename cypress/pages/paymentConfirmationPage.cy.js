import HomePage from "./homePage.cy";

class PaymentConfirmationPage {

      #pageURL() {
            return cy.url();
      }

      #txtOrderPlaced() {
            return cy.get('h2[data-qa="order-placed"]');
      }

      #txtConfirmationMsg() {
            return cy.get('p').contains('Congratulations');
      }

      #btnContinue() {
            return cy.get('a[data-qa="continue-button"]');
      }

      verifyPaymentConfirmationPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.paymentConfirmationPage);
            })
            return this
        }

      verifyOrderPlacedHeader() {
            this.#txtOrderPlaced().should('eq', 'Order Placed!');
            cy.logger('application', 'Order has been place');
            return this;
      }

      verifyConfirmationMsg() {
            this.#txtConfirmationMsg().should('eq', 'Congratulations! Your order has been confirmed!');
            return this;
      }

      clickContinueBtn() {
            this.#btnContinue()
                  .should('be.enabled')
                  .click();
                  cy.logger('application', 'Continue button clicked');
            return new HomePage();
      }
      
}

export default PaymentConfirmationPage;