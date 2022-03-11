import { render } from '@redwoodjs/testing/web'

import GetTogetherPage from './GetTogetherPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GetTogetherPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetTogetherPage />)
    }).not.toThrow()
  })
})
