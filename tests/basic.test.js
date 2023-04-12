import { Selector } from 'testcafe'

// prettier-ignore
fixture`Getting Started with TestCafe`
    .page`http://devexpress.github.io/testcafe/example/`

test('My first test', async t => {
	await t.typeText('#developer-name', 'John Smith')
	await t.click('#submit-button')
})
