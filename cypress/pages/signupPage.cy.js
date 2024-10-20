import { faker, th } from '@faker-js/faker';
import BasePage from './basePage.cy';
import AccountCreatedPage from './accountCreatedPage.cy';

class SignupPage extends BasePage {

      #pageURL() {
            return cy.url();
      }

      #btnTitle() {
            return cy.get('#id_gender1');
      }

      #inputPassword() {
            return cy.get('#password');
      }

      #lstBirthDateDay() {
            return cy.get('select[data-qa="days"]');
      }

      #lstBirthDateMonth() {
            return cy.get('select[data-qa="months"]');
      }

      #lstBirthDateYear() {
            return cy.get('select[data-qa="years"]');
      }

      #boxNewsLetter() {
            return cy.get('#newsletter');
      }

      #boxOffers() {
            return cy.get('#optin');
      }

      #inputFirstName() {
            return cy.get('#first_name');
      }

      #inputLastName() {
            return cy.get('#last_name');
      }

      #inputCompany() {
            return cy.get('#company');
      }

      #inputAddress() {
            return cy.get('#address1');
      }

      #lstCountry() {
            return cy.get('#country');
      }

      #inputState() {
            return cy.get('#state');
      }

      #inputCity() {
            return cy.get('#city');
      }

      #inputZipcode() {
            return cy.get('#zipcode');
      }

      #inputMobileNumber() {
            return cy.get('#mobile_number');
      }

      #btnCreateAccount() {
            return cy.get('[data-qa="create-account"]');
      }

      verifySignupPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.signUpPage);
            })
            return this
        }

      enterPassword() {
            this.password = faker.internet.password();
            this.#inputPassword().type(this.password);
            cy.logger('application', 'Random password generated');
            return this;
      }

      selectTitle() {
            this.#btnTitle().check();
            cy.logger('application', 'Title is checked');
            return this;
      }

      selectRandomBirthDay() {
            this.#lstBirthDateDay().then((dropdown) => {

                  const options = dropdown.find("option");
            
                  // Select a random option
                  const randomIndex = Math.floor(Math.random() * options.length);
                  const selectedOption = options.eq(randomIndex);
            
                  // Select the option
                  cy.wrap(selectedOption)
                    .invoke('val')
                    .then((value) => {
                      cy.wrap(dropdown).select(value);
                    });
                });

            cy.logger('application', 'Birth day is selected');
            return this;
      }

      selectRandomBirthMonth() {
            this.#lstBirthDateMonth().then((dropdown) => {

                  const options = dropdown.find("option");
            
                  // Select a random option
                  const randomIndex = Math.floor(Math.random() * options.length);
                  const selectedOption = options.eq(randomIndex);
            
                  // Select the option
                  cy.wrap(selectedOption)
                    .invoke('val')
                    .then((value) => {
                      cy.wrap(dropdown).select(value);
                    });
                });

            cy.logger('application', 'Birth month is selected');
            return this;
      }

      selectRandomBirthYear() {
            this.#lstBirthDateYear().then((dropdown) => {

                  const options = dropdown.find("option");
            
                  // Select a random option
                  const randomIndex = Math.floor(Math.random() * options.length);
                  const selectedOption = options.eq(randomIndex);
            
                  // Select the option
                  cy.wrap(selectedOption)
                    .invoke('val')
                    .then((value) => {
                      cy.wrap(dropdown).select(value);
                    });
                });

            cy.logger('application', 'Birth year is selected');
            return this;
      }

      checkForNewsLettersAndOffers() {
            this.#boxNewsLetter().check();
            this.#boxOffers().check();
            cy.logger('application', 'Signed up for newsletter and offers');
            return this;
      }

      enterFirstName() {
            this.#inputFirstName().type(faker.person.firstName());
            cy.logger('application', 'First name entered');
            return this;
      }

      enterLastName() {
            this.#inputLastName().type(faker.person.lastName());
            cy.logger('application', 'Last name entered');
            return this;
      }

      enterCompanyName() {
            this.#inputCompany().type(faker.company.name());
            cy.logger('application', 'Company name entered');
            return this;
      }

      enterAddress() {
            this.#inputAddress().type(faker.location.street());
            cy.logger('application', 'Street address entered');
            return this;
      }

      selectRandomCountry() {
            return this;
      }

      enterState() {
            this.#inputState().type(faker.location.state());
            cy.logger('application', 'State entered');
            return this;
      }

      enterCity() {
            this.#inputCity().type(faker.location.city());
            cy.logger('application', 'City entered');
            return this;
      }

      enterZipCode() {
            this.#inputZipcode().type(faker.location.zipCode());
            cy.logger('application', 'Zip code entered');
            return this;
      }

      enterMobileNumber() {
            this.#inputMobileNumber().type(faker.phone.number());
            cy.logger('application', 'Mobile number entered');
            return this;
      }

      clickCreateAccountBtn() {
            this.#btnCreateAccount()
                  .should('be.enabled')
                  .click();
            return new AccountCreatedPage();
      }
      

}

export default SignupPage;