import ExamplePage from "../pages/ExamplePage"

describe('template spec', () => {
  const examplePage = new ExamplePage()

  it('passes', () => {
    cy.visit('https://example.cypress.io')
    examplePage.verifyTitle()
  })
})