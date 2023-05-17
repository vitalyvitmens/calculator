import styles from './CalcComponent.module.css'
import { useState } from 'react'

export const CalcComponent = (props) => {
	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

	const ops = ['/', '*', '+', '-', ',']

	const updateCalc = (value) => {
		setCalc(calc + value)
	}

	const buttonsArr = [
		{ value: 'MC', type: styles.initialize, id: 'mc' },
		{ value: 'M+', type: styles.initialize, id: 'mMult' },
		{ value: 'M-', type: styles.initialize, id: 'mDiv' },
		{ value: 'MR', type: styles.initialize, id: 'mr' },

		{ value: 'C', type: styles.operator, id: 'reset' },
		{ value: '/', type: styles.operator, id: 'div' },
		{ value: 'X', type: styles.operator, id: 'mult' },
		{ value: 'del', type: styles.operator, id: 'pop' },

		{ value: '7', type: styles.number, id: 'seven' },
		{ value: '8', type: styles.number, id: 'eight' },
		{ value: '9', type: styles.number, id: 'nine' },
		{ value: '-', type: styles.operator, id: 'min' },

		{ value: '4', type: styles.number, id: 'four' },
		{ value: '5', type: styles.number, id: 'five' },
		{ value: '6', type: styles.number, id: 'six' },
		{ value: '+', type: styles.operator, id: 'add' },

		{ value: '1', type: styles.number, id: 'one' },
		{ value: '2', type: styles.number, id: 'two' },
		{ value: '3', type: styles.number, id: 'three' },

		{ value: '%', type: styles.number, id: 'percent' },
		{ value: '0', type: styles.number, id: 'zero' },
		{ value: ',', type: styles.number, id: 'comma' },
		{ value: '=', type: styles.equal, id: 'equal' },
	]

	const num = (e) => console.log(e)

	return (
		<>
			<h1>Calculator</h1>
			<div className={styles.display}>
				{result ? <span>(0)</span> : ''}
				{calc || '0'}
			</div>
			{/* <form>
				<input placeholder="0"></input>
			</form> */}
			<ul onClick={num}>
				<li>
					{buttonsArr.slice(0, 4).map(({ id, value, type }) => (
						<button key={id} className={type} >
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(4, 8).map(({ id, value, type }) => (
						<button key={id} className={type}
            onClick={() => updateCalc(value)}
            >
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(8, 12).map(({ id, value, type }) => (
						<button
							key={id}
							className={type}
							onClick={() => updateCalc(value)}
						>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(12, 16).map(({ id, value, type }) => (
						<button
							key={id}
							className={type}
							onClick={() => updateCalc(value)}
						>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(16, 19).map(({ id, value, type }) => (
						<button
							key={id}
							className={type}
							onClick={() => updateCalc(value)}
						>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(19, 24).map(({ id, value, type }) => (
						<button
							key={id}
							className={type}
							onClick={() => updateCalc(value)}
						>
							{value}
						</button>
					))}
				</li>
			</ul>
		</>
	)
}
