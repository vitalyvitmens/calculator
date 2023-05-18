import styles from './CalcComponent.module.css'
import { useState } from 'react'

export const CalcComponent = (props) => {
	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

	const ops = ['/', '*', '+', '-', '.']

	const updateCalc = (value) => {
		if (
			(ops.includes(value) && calc === '') ||
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			return
		}
		setCalc(calc + value)

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString())
		}
	}

	const calculate = () => {
		setCalc(eval(calc).toString())
    //! Задай другой цвет результату на дисплее после нажатия =
    // equalArr.type = styles.operator

	}

	const deleteLast = () => {
		if (calc === '') {
			return
		}
		const value = calc.slice(0, -1)
		setCalc(value)
		setResult('0')
	}

	const reset = () => {
		if (calc === '') {
			return
		}
		const value = calc.slice(0, 0)
		setCalc(value)
		setResult('0')
	}

	const initializesArr = [
		{ id: 'mc', value: 'MC', type: styles.initialize },
		{ id: 'mMult', value: 'M+', type: styles.initialize },
		{ id: 'mDiv', value: 'M-', type: styles.initialize },
		{ id: 'mr', value: 'MR', type: styles.initialize },
	]

	const operatorsArr = [
		{ id: 'reset', value: 'C', type: styles.operator },
		{ id: 'div', value: '/', type: styles.operator },
		{ id: 'mult', value: '*', type: styles.operator },
		{ id: 'pop', value: 'del', type: styles.operator },
		{ id: 'min', value: '-', type: styles.operator },
		{ id: 'add', value: '+', type: styles.operator },
	]

	const numbersArr = [
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
	]

	const equalArr = [{ id: 'equal', value: '=', type: styles.equal }]

	return (
		<>
			<h1>Calculator</h1>
			<div className={styles.display}>
				{result ? <span>({result}) </span> : ''}
				{calc || '0'}
			</div>
			<ul>
				<li>
					{initializesArr.map(({ id, value, type }) => (
						<button key={id} className={type}>
							{value}
						</button>
					))}
				</li>
				<li>
					<button className={operatorsArr[0].type} onClick={reset}>
						C
					</button>
					{operatorsArr.slice(1, 3).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={operatorsArr[3].type} onClick={deleteLast}>
						del
					</button>
				</li>
				<li>
					{numbersArr.slice(0, 3).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button
						className={operatorsArr[4].type}
						onClick={() => updateCalc('-')}
					>
						-
					</button>
				</li>
				<li>
					{numbersArr.slice(3, 6).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button
						className={operatorsArr[5].type}
						onClick={() => updateCalc('+')}
					>
						+
					</button>
				</li>
				<li>
					{numbersArr.slice(6, 9).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={equalArr[0].type} onClick={calculate}>
						=
					</button>
				</li>
				<li>
					{numbersArr.slice(9, 12).map(({ id, value, type }) => (
						<button key={id} className={type} onClick={() => updateCalc(value)}>
							{value}
						</button>
					))}
					<button className={equalArr[0].type} onClick={calculate}>
						=
					</button>
				</li>
			</ul>
		</>
	)
}
