import { useState } from 'react'
import { getButtons } from './get-buttons'
import styles from './app.module.css'

export const App = () => {
	const [operand1, setOperand1] = useState('0')
	const [operator, setOperator] = useState('')
	const [operand2, setOperand2] = useState('')
	const [isResult, setIsResult] = useState(false)

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
	}

	const buttons = getButtons(state)

	const output = operand1 + operator + operand2

	return (
		<div className={styles.app}>
      <h2>Calculator</h2>
			<div
				className={`${styles.display} ${isResult ? styles.displayEqual : ''}`}
			>
				{output}
			</div>
			<div>
				{buttons.map(({ id, label, group, handler }) =>
					group === 'initialize' ? (
						<button
							key={id}
							className={styles.initialize}
							// onClick={() => handler(label)}
						>
							{label}
						</button>
					) : null
				)}
			</div>
			<div>
				{buttons.slice(4, 8).map(({ id, label, group, handler }) =>
					group === 'operator' ? (
						<button key={id} className={styles.operator} onClick={handler}>
							{label}
						</button>
					) : null
				)}
			</div>
			<div>
				{buttons.slice(8, 11).map(({ id, label, group, handler }) =>
					group === 'number' ? (
						<button
							key={id}
							className={styles.number}
							onClick={() => handler(label)}
						>
							{label}
						</button>
					) : null
				)}
				{buttons.slice(11, 12).map(({ id, label, group, handler }) =>
					group === 'operator' ? (
						<button key={id} className={styles.operator} onClick={handler}>
							{label}
						</button>
					) : null
				)}
			</div>
			<div>
				{buttons.slice(12, 15).map(({ id, label, group, handler }) =>
					group === 'number' ? (
						<button
							key={id}
							className={styles.number}
							onClick={() => handler(label)}
						>
							{label}
						</button>
					) : null
				)}
				{buttons.slice(15, 16).map(({ id, label, group, handler }) =>
					group === 'operator' ? (
						<button key={id} className={styles.operator} onClick={handler}>
							{label}
						</button>
					) : null
				)}
			</div>
			<div>
				{buttons.slice(16, 19).map(({ id, label, group, handler }) =>
					group === 'number' ? (
						<button
							key={id}
							className={styles.number}
							onClick={() => handler(label)}
						>
							{label}
						</button>
					) : null
				)}
				{buttons.map(({ id, label, group, handler }) =>
					group === 'equal' ? (
						<button key={id} className={styles.equal} onClick={handler}>
							{label}
						</button>
					) : null
				)}
			</div>
			<div>
				{buttons.slice(20, 23).map(({ id, label, group, handler }) =>
					group === 'number' ? (
						<button
							key={id}
							className={styles.number}
							onClick={() => handler(label)}
						>
							{label}
						</button>
					) : null
				)}
				{buttons.map(({ id, label, group, handler }) =>
					group === 'equal' ? (
						<button key={id} className={styles.equal} onClick={handler}>
							{label}
						</button>
					) : null
				)}
			</div>
		</div>
	)
}
