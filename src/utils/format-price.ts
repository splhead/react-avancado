export default function formatPrice(price: number | bigint): string {
  return price === 0
    ? 'Free'
    : new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
}
