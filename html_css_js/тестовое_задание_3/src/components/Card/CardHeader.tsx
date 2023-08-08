
 
import CardProps from "../shared/CardProps";
export default function CardHeader({ price, title, description }: Omit<CardProps, 'colors'>) {
    return (
        <header className='card__header'>
            <h1 className='header__heading'>
                {title}
            </h1>
            <figure>
                <img
                    width={256}
                    height={256}
                    src="https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/12/d3/38/12d33858-f49a-3195-7669-c66fa80a4fac/3da354de-1784-4404-ab7a-1f40dff1b758.png/274x593.jpg"
                    alt="alternative"
                />
                <figcaption className='header__price'>
                    ${price}
                </figcaption>
            </figure>
            <p className='header__description'>
                {description}
            </p>
        </header>
    );
}
