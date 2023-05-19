import styles from './CalcComponent.module.css'
import { useState } from 'react'

let greenColorDisplay = false

export const CalcComponent = (props) => {
	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

	const ops = ['/', '*', '+', '-', '.']

	const updateCalc = (value) => {
		if (calc === '0') {
			reset()
		} else {
			greenColorDisplay = false
			if (
				(ops.includes(value) && calc === '') ||
				(ops.includes(value) && ops.includes(calc.slice(-1)))
			) {
				return
			}
			if (!greenColorDisplay) {
				setCalc(calc + value)
				if (!ops.includes(value)) {
					setResult(eval(calc + value).toString())
				}
			}
		}
	}

	const calculate = () => {
		if (calc === '') {
			return
		} else {
			setCalc(eval(calc).toString())
			greenColorDisplay = true
		}
	}

	const deleteLast = () => {
		if (calc === '') {
			return
		}
		const value = calc.slice(0, -1)
		setCalc(value)
		setResult('0')
		greenColorDisplay = false
	}

	const reset = () => {
		if (calc === '') {
			return
		}
		const value = calc.slice(0, 0)
		setCalc(value)
		setResult('0')
		greenColorDisplay = false
	}

	const buttonArr = [
		{ id: 'mc', value: 'MC', type: styles.initialize },
		{ id: 'mMult', value: 'M+', type: styles.initialize },
		{ id: 'mDiv', value: 'M-', type: styles.initialize },
		{ id: 'mr', value: 'MR', type: styles.initialize },

		{ id: 'reset', value: 'C', type: styles.operator },
		{ id: 'div', value: '/', type: styles.operator },
		{ id: 'mult', value: '*', type: styles.operator },
		{ id: 'pop', value: 'del', type: styles.operator },
		{ id: 'min', value: '-', type: styles.operator },
		{ id: 'add', value: '+', type: styles.operator },

		{ id: 'seven', value: '7', type: styles.number },
		{ id: 'eight', value: '8', type: styles.number },
		{ id: 'nine', value: '9', type: styles.number },
		{ id: 'four', value: '4', type: styles.number },
		{ id: 'five', value: '5', type: styles.number },
		{ id: 'six', value: '6', type: styles.number },
		{ id: 'one', value: '1', type: styles.number },
		{ id: 'two', value: '2', type: styles.number },
		{ id: 'three', value: '3', type: styles.number },
		{ id: 'percent', value: '%', type: styles.number },
		{ id: 'zero', value: '0', type: styles.number },
		{ id: 'comma', value: '.', type: styles.number },

		{ id: 'equal', value: '=', type: styles.equal },
	]

	return (
		<>
			<h2>Calculator</h2>
			<div className={greenColorDisplay ? styles.displayEqual : styles.display}>
				{result ? <span>({result}) </span> : ''}
				{calc || '0'}
			</div>
			<div>
				<div>
					{buttonArr.slice(0, 4).map(({ id, value, type }) => (
						<button key={id} className={type}>
							{value}
						</button>
					))}
				</div>
				<div>
					<button className={buttonArr[4].type} onClick={reset}>
						C
					</button>
					{buttonArr.slice(5, 7).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={buttonArr[7].type} onClick={deleteLast}>
						del
					</button>
				</div>
				<div>
					{buttonArr.slice(10, 13).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={buttonArr[8].type} onClick={() => updateCalc('-')}>
						-
					</button>
				</div>
				<div>
					{buttonArr.slice(13, 16).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={buttonArr[9].type} onClick={() => updateCalc('+')}>
						+
					</button>
				</div>
				<div>
					{buttonArr.slice(16, 19).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={buttonArr[22].type} onClick={calculate}>
						=
					</button>
				</div>
				<div>
					{buttonArr.slice(19, 22).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={buttonArr[22].type} onClick={calculate}>
						=
					</button>
				</div>
			</div>
		</>
	)
}
