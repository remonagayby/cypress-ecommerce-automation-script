import { faker, th } from '@faker-js/faker';

class PaymentPage {

      #pageURL() {
            return cy.url();
      }

      #inputCardName() {
            return cy.get('input[data-qa="name-on-card"]');
      }

      #inputCardNumber() {
            return cy.get('input[data-qa="card-number"]');
      }

      #inputCVV() {
            return cy.get('input[data-qa="cvc"]')
      }

      #inputExpirationMonth() {
            return cy.get('input[data-qa="expiry-month"]');
      }

      #inputExpirationYear() {
            return cy.get('input[data-qa="expiry-year"]');
      }

      #btnConfirm() {
            return cy.get('#submit');
      }

      #txtSucessMsg() {
            return cy.get('#success_message').children('div');
      }

      verifyPaymentPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.paymentPage);
            })
            return this
        }

      enterCreditCardName() {
            this.#inputCardName().type(faker.finance.accountName());
            cy.logger('application', 'Credit card name entered');
            return this;
      }

      enterCreditCardNumber() {
            this.#inputCardNumber().type(faker.finance.creditCardNumber());
            cy.logger('application', 'Credit card number entered');
            return this;
      }

      enterCreditCardCvv() {
            this.#inputCVV()
                  .should('have.attr', 'placeholder', 'ex. 311')
                  .type(faker.finance.creditCardCVV());
            cy.logger('application', 'Credit card CVV number entered');
            return this;
      }

      enterCardExpirationMonth() {
            this.#inputExpirationMonth()
                  .should('have.attr', 'placeholder', 'MM')
                  .type(faker.helpers.rangeToNumber({ min: 1, max: 12 }));
            cy.logger('application', 'Credit card expiry month entered');
            return this;
      }

      enterCardExpirationYear() {
            this.#inputExpirationYear()
                  .should('have.attr', 'placeHolder', 'YYYY')
                  .type(faker.helpers.rangeToNumber({ min: 2024, max: 2035 }));
            cy.logger('application', 'Credit card expiry year entered');
            return this;
      }

      clickConfirmBtn() {
            this.#btnConfirm()
                  .should('be.enabled')
                  .click();
            cy.logger('application', 'Payment confirm button clicked');
            return this;
      }

      verifyPaymentSuccessMsg() {
            this.#txtSucessMsg()
                  .should('eq', 'Your order has been placed successfully!')
      }

}

export default PaymentPage;