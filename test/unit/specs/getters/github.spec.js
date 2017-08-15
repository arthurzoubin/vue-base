import getters from '@/app/getters/github'

describe('Github getters', () => {
  it('repos', () => {
    // mock state
    const state = {
      repos: [
        { html_url: 1, name: 'Apple' },
        { html_url: 2, name: 'Orange' },
        { html_url: 3, name: 'Carrot' },
      ],
    }
    // get the result from the getter
    const result = getters.repos(state)

    // assert the result
    expect(result).to.deep.equal([
        { html_url: 1, name: 'Apple' },
        { html_url: 2, name: 'Orange' },
        { html_url: 3, name: 'Carrot' },
    ])
  })
})
