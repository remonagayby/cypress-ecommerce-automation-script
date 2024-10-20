import PaymentPage from "./paymentPage.cy";

class CheckOutPage {

      #pageURL() {
            return cy.url();
      }

      #txtTotalItemsPrice() {
            return cy.get('tr').children('td[colspan="2"]').siblings('.cart_total_price');
      }

      #btnPlaceOrder() {
            return cy.get('a[href="/payment"]');
      }

      verifyCheckOutPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.checkoutPage);
            })
            return this
        }

      verifyItemsTotalPrice() {
            return this;
      }
      
      clickPlaceOrderBtn() {
            this.#btnPlaceOrder().click();
            return new PaymentPage();
      }

}

export default CheckOutPage;