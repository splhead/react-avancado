import { QueryGameBySlug } from 'graphql/generated/QueryGameBySlug'
import { QueryGames } from 'graphql/generated/QueryGames'
//import { QueryHome } from 'graphql/generated/QueryHome'

export const gamesMapper = (data: QueryGames) => {
  return data.games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: game.cover ? `http://localhost:1337${game.cover!.url}` : '',
    price: game.price
  }))
}

export const gameMapper = (data: QueryGameBySlug) => {
  const game = data.games[0]
  return {
    cover: `http://localhost:1337${game.cover?.src}`,
    gameInfo: {
      title: game.name,
      price: game.price,
      description: game.short_description
    },
    gallery: game.gallery.map((image) => ({
      src: `http://localhost:1337${image.src}`,
      label: image.label
    })),
    description: game.description,
    details: {
      developer: game.developers[0].name,
      releaseDate: game.release_date,
      platforms: game.platforms.map((platform) => platform.name),
      publisher: game.publisher?.name,
      rating: game.rating,
      genres: game.categories.map((category) => category.name)
    }
  }
}

/* export const bannersMapper = (data: QueryHome) => {
  return data.banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
} */
