import CardProps from "../shared/CardProps"

export default function CardHeader({ price, title, description, imgHref }: Omit<CardProps, 'colors'>) {
  return (
    <header className='card__header'>
      <h1 className='header__heading'>{title}</h1>

      <figure>
        <img width={256} height={256}
          src={imgHref} alt="alternative"
        />
        <figcaption className='header__price'>${price}</figcaption>
      </figure>

      <p className='header__description'>{description}</p>
    </header>
  )
}
