import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, titles, subtitle, footer and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByLabelText(/Won Games/i)
    expect(logos.length).toEqual(2)

    expect(
      screen.getByRole('heading', { name: /All your favorite games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /WON is the best/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Won Games 2021/i)).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
