# playwright-swag-automator

# 🎭 Swag Labs Automator

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

A robust End-to-End (E2E) test automation framework built with **Playwright** and **TypeScript**. This project automates the critical user journeys of the "Swag Labs" e-commerce demo site (SauceDemo).

## Project Overview

This repository demonstrates a production-grade automation architecture designed for scalability, maintainability, and stability.

**Key Features:**
* **Page Object Model (POM):** Modular design separating test logic from page selectors.
* **CI/CD Integration:** Automated pipeline using GitHub Actions to run tests on every push.
* **Dynamic Interactions:** Handling of list filtering, locator chaining, and form manipulation.
* **Reporting:** HTML reports with attached screenshots and traces for failed tests.

## Scenarios Covered

1.  **Authentication:** Validating user login with credentials.
2.  **Inventory Management:** Dynamic filtering and adding specific products to the cart.
3.  **Checkout Flow:** Full E2E journey from Cart -> Checkout Information -> Order Completion.

## Tech Stack

* **Language:** TypeScript
* **Framework:** Playwright Test
* **Runtime:** Node.js
* **CI/CD:** GitHub Actions

## Installation & Usage

**1. Clone the repository**
```bash
git clone [https://github.com/YOUR_USERNAME/swag-automator.git](https://github.com/YOUR_USERNAME/swag-automator.git)
cd swag-automator
```
**2. Install dependencies**

```bash
npm install
npx playwright install --with-deps
```

**3. Run the tests**

```bash
# Run all tests in headless mode
npx playwright test

# Run tests with UI header (to see the browser)
npx playwright test --headed
```

**4. View the Report**

```bash
npx playwright show-report
```

## Project Structure
├── .github/workflows   # CI/CD Pipeline configuration
├── pages/              # Page Object Models (Selectors & Actions)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CheckoutPage.ts
├── tests/              # Test Specifications (.spec.ts)
├── playwright.config.ts # Global configuration
└── package.json
