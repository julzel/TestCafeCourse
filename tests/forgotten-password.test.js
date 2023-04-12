import { Selector } from 'testcafe'

// prettier-ignore
fixture`Forgotten Password Test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can request new password', async t => {
	// Get selectors
	const signInButton = Selector('#signin_button')
	const linkToPasswordPage = Selector('a').withText('Forgot your password ?')
	const sendPasswordButton = Selector('input').withAttribute(
		'value',
		'Send Password'
	)
	const emailInput = Selector('#user_email')

	// Actions
	await t
		.click(signInButton)
		.click(linkToPasswordPage)
		.typeText(emailInput, 'email', { paste: true })
		.click(sendPasswordButton)

	// Assertions

	const message = Selector('div').innerText
	await t
		.expect(message)
		.contains('Your password will be sent to the following email')
})
