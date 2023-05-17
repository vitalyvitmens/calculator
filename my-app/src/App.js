import { CalcComponent } from './components/CalcComponent'
import styles from './App.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<CalcComponent />
			</header>
		</div>
	)
}
