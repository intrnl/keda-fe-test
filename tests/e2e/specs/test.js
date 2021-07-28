// https://docs.cypress.io/api/introduction/api.html

describe('Radio group', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('shows the default value', () => {
		cy.get('pre#result').should('contain', '"red"');

		cy.get('fieldset > label').eq(0).find('input[type=radio]').should('be.checked');
		cy.get('fieldset > label').eq(1).find('input[type=radio]').should('not.be.checked');
	});

	it('selects second radio input', () => {
		cy.get('fieldset > label').eq(1).find('input[type=radio]').check();

		cy.get('fieldset > label').eq(0).find('input[type=radio]').should('not.be.checked');
		cy.get('fieldset > label').eq(1).find('input[type=radio]').should('be.checked');
		cy.get('pre#result').should('contain', '"blue"');
	});

	it('reflects data from custom text input', () => {
		cy.get('fieldset > label').eq(2).find('input[type=radio]').check();
		cy.get('pre#result').should('contain', '{"value":"custom-text"}');

		cy.get('fieldset > label').eq(2).find('input[type=text]').type('Dread Pirate Roberts');
		cy.get('pre#result').should('contain', '{"value":"custom-text","data":"Dread Pirate Roberts"}');
	});

	it('reflects data from custom number input', () => {
		cy.get('fieldset > label').eq(3).find('input[type=radio]').check();
		cy.get('pre#result').should('contain', '{"value":"custom-number"}');

		cy.get('fieldset > label').eq(3).find('input[type=number]').type('2019');
		cy.get('pre#result').should('contain', '{"value":"custom-number","data":2019}');
	});
});
