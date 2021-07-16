import { screen } from '@testing-library/react'

import Wishlist, { WishlistProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'

const props: WishlistProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
