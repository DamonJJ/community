import { render } from '@redwoodjs/testing/web'

import GetTogether from './GetTogether'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GetTogether', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetTogether />)
    }).not.toThrow()
  })
})
