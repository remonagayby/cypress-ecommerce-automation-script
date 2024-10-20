# cypress-ecommerce-automation-script

This is a sample Cypress automation script for a demo e-commerce website `https://www.automationexercise.com/`

## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM pakcage manager.
* Code Editor of your choice e.g. Visual Studio Code

## Getting Started

* Clone this repository to your local machine `https://github.com/remonagayby/cypress-ecommerce-automation-script.git`

### Setup from Scratch

* `npm init` to setup node project with package.json
* `npm install --save-dev cypress` to install cypress as dev dependency

### Running All Test Cases
* `npm run test`

### Open Allure Reports
* `npm run report:allure`

## Test Cases Covered in the test Script
* User should signup successfully with valid credentials
* User should login with valid credentials
* User should not login with invalid credentials
* User should compelete a product purchase after valid registration
* User should compelete a product purchase after valid login
* User should not compelete a product purchase if user is not logged in
* User should successfully delete user

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.