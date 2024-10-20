import { faker, th } from '@faker-js/faker';
import BasePage from './basePage.cy';
import HomePage from './homePage.cy';
import SignupPage from './signupPage.cy';

class LoginPage extends BasePage {

    #pageURL() {
        return cy.url();
  }

    #inputSignupName() {
        return cy.get('[data-qa="signup-name"]');
    }

    #inputSignupEmail() {
        return cy.get('[data-qa="signup-email"]');
    }

    #btnSignup() {
        return cy.get('[data-qa="signup-button"]');
    }

    #inputLoginEmail() {
        return cy.get('[data-qa="login-email"]');
    }

    #inputLoginPassword() {
        return cy.get('[data-qa="login-password"]');
    }

    #btnLogin() {
        return cy.get('[data-qa="login-button"]');
    }

    #txtErrorMsg() {
        return cy.get('form[action="/login"]').children('p').contains('incorrect!');
    }

    verifyLoginPageUrl() {
        cy.fixture('url').then(url => {
            this.#pageURL().should('eq', url.loginPage);
        })
        return this
    }

    enterSignupName() {
        this.signupName = faker.person.firstName();
        this.#inputSignupName()
            .should('have.attr', 'placeholder', 'Name')
            .type(this.signupName);
        cy.logger('application', 'Signup name entered');
        return this;
    }

    enterSignupEmail() {
        this.signupEmail = faker.internet.email({ firstName: this.signupName });
        this.#inputSignupEmail()
            .should('have.attr', 'placeholder', 'Email Address')
            .type(this.signupEmail);
        cy.logger('application', 'Signup email entered');
        return this;
    }

    clickSigupBtn() {
        this.#btnSignup()
            .should('be.enabled')
            .click();
        cy.logger('application', 'Signup button clicked');
        return new SignupPage();
    }

    enterValidLoginEmail() {
        cy.fixture("login-data").then((user) => {
            this.#inputLoginEmail()
                .should('have.attr', 'placeholder', 'Email Address')
                .type(user.email);
            });
        cy.logger('application', 'Valid login email entered');
        return this;
    }

    enterInvalidLoginEmail() {
        this.#inputLoginEmail()
            .should('have.attr', 'placeholder', 'Email Address')
            .type(faker.internet.email()); 
        cy.logger('application', 'Invalid login email entered');
        return this;
    }

    enterValidLoginPassword() {
        cy.fixture("login-data").then((user) => {
            this.#inputLoginPassword()
                .should('have.attr', 'placeholder', 'Password')
                .type(user.password);
            });
        return this;
    }

    enterInvalidLoginPassword() {
        this.#inputLoginPassword()
            .should('have.attr', 'placeholder', 'Password')
            .type(faker.internet.password());
        cy.logger('application', 'Invalid password entered');
        return this;
    }

    clickLoginBtn() {
        this.#btnLogin()
            .should('be.enabled')
            .click();
        cy.logger('application', 'Login button clicked');
        return this;
    }

    verifyLoginErrorMsg() {
        this.#txtErrorMsg().should('have.text', 'Your email or password is incorrect!');
        return this;
    }

}

export default LoginPage;