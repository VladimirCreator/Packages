import style from './Card.module.scss'

export const Toolbar: React.FC = () => (
	<section className={style.card__toolbar}>
		<button id='addToCart' type='button'>
			Add to cart
		</button>
		<button id='buyNow' type='button'>
			Buy now
		</button>
	</section>
)
