import { Selector } from 'testcafe'

// prettier-ignore
fixture`Getting Started with TestCafe`
    .page`http://devexpress.github.io/testcafe/example/`
    .before(async t => {
        // Test setup goes here
        // console.log('Before all tests')
    })
    .beforeEach(async t => {
        // Runs before each test
        // console.log('Before each test', '2 total')
        await t.setPageLoadTimeout(5000)
    })
    .after(async t => {
        // Test teardown goes here
        // Runs after all tests are finished
        // console.log('After all tests')
    })
    .afterEach(async t => {
        // Runs after each test
        // console.log('After each test', '2 total')
    })

test('My first test', async t => {
	// await t.setTestSpeed(0.5)
	await t.typeText('#developer-name', 'John Smith')
	await t.click('#submit-button')

	await t
		.expect(Selector('#article-header').innerText)
		.eql('Thank you, John Smith!')
})

test('My second test', async t => {
	const developerNameInput = Selector('#developer-name')
	const submitButton = Selector('#submit-button')
	const articleHeader = Selector('#article-header')

	// await t.takeScreenshot({ fullPage: true })
	// await t.takeElementScreenshot(submitButton)
	await t.typeText(developerNameInput, 'John Doe')
	await t.click(submitButton)

	await t.expect(Selector(articleHeader).innerText).contains('John')
})
