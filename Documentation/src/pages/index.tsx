import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'

import styles from './index.module.css'

const HomepageHeader: React.FC = () => {
	const { siteConfig } = useDocusaurusContext()
	const { title, tagline } = siteConfig
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<Heading as='h1' className='hero__title'>
					{title}
				</Heading>
				<p className='hero__subtitle'>
					{tagline}
				</p>
				<div className={styles.buttons}>
					<Link className='button button--secondary button--lg' to='./docs/_r__-for-a-comment'>
						Подробное описание всех проектов
					</Link>
				</div>
			</div>
		</header>
	)
}

const Home: React.FC = () => {
	const { siteConfig } = useDocusaurusContext()
	const { title } = siteConfig
	return (
		<Layout title={title} description='Список пакетов, которые были созданы @VladimirCreator.'>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}

export default Home
