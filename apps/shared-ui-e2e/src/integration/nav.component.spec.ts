describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-example-nav').should('exist');
  });
});