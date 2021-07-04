import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game title',
  description: 'Game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game info', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210,00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })
})
