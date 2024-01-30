import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
	title: string
	//Svg: React.ComponentType<React.ComponentProps<'svg'>>
	description: JSX.Element
}

/* На данный момент, я не знаю возможностей Docusaurus, поэтому пока приходится обходится таким образом.
*/
const FeatureList: FeatureItem[] = [
	{ title: '_R__ for a Comment', description: (<></>) },
	{ title: '_R__ for a Hotel', description: (<></>) },
	{ title: 'CRUD for a X', description: (<></>) },
	{ title: 'CRU_ for an Application', description: (<></>) },
	{ title: 'Curriculum Vitae', description: (<></>) },
	{ title: 'Documentation', description: (<></>) },
	{ title: 'Exam for December 2022', description: (<></>) },
	{ title: 'Just a Card', description: (<></>) },
	{ title: 'Just a Form', description: (<></>) },
	{ title: 'Shade Explorer', description: (<></>) },
	{ title: 'X', description: (<></>) }
]

const Feature: React.FC<FeatureItem> = props => {
	const { title, description } = props
	return (
		<div className={clsx('col col--4')}>
			{/*
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			*/}
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

const HomepageFeatures: React.FC = () => {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{
						FeatureList.map(
							(props, index) => (<Feature key={index} {...props} />)
						)
					}
				</div>
			</div>
		</section>
	)
}

export default HomepageFeatures
