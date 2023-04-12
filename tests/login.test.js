import { Selector } from 'testcafe'

// prettier-ignore
fixture`Login Test`
    .page`http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async t => {
	await t
		.click('#signin_button')
		.typeText('#user_login', 'invalid username', { paste: true })
		.typeText('#user_password', 'invalid password', { paste: true })
		.click('.btn-primary')

	const error = Selector('.alert-error').innerText
	await t.expect(error).contains('Login and/or password are wrong')
})

test('User can login with valid credentials', async t => {
	await t
		.click('#signin_button')
		.typeText('#user_login', 'username', { paste: true })
		.typeText('#user_password', 'password', { paste: true })
	// .click('.btn-primary')

	// const navBar = Selector('#pages-nav').exists
	// await t.expect(navBar).ok()
})
