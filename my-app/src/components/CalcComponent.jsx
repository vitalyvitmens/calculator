import styles from './CalcComponent.module.css'
import { useState } from 'react'

const getTimeFromDate = (date) => date.toISOString().substring(11, 19)
const randomNumber = () => (Math.random() * 10000000).toFixed()

export const CalcComponent = (props) => {
	const [currentDate, setCurrentDate] = useState(new Date())
	setTimeout(() => {
		setCurrentDate(new Date())
	}, 1000)

	const [currentRandomNumber, setCurrentRandomNumber] = useState(randomNumber())
	setTimeout(() => {
		setCurrentRandomNumber(randomNumber())
	}, 1000)

	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

	const ops = ['/', '*', '+', '-', '.']

	const updateCalc = (value) => {
		if (
			(ops.includes(value) && calc === '') ||
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			console.log('updateCalc: return (/ * - +)')
			return
		}
		setCalc(calc + value)
		console.log('updateCalc: setCalc')

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString())
			console.log('updateCalc: setResult')
		}
	}

	const calculate = () => {
		if (calc === '') {
			return
		}
		setCalc(eval(calc).toString())
		console.log('calculate: setCalc')
		styles.display = styles.displayEqual
	}

	const deleteLast = () => {
		if (calc === '') {
      console.log('deleteLast: return')
			return
		}
		const value = calc.slice(0, -1)
		setCalc(value)
		setResult('0')
    console.log('deleteLast')
	}

	const reset = () => {
		if (calc === '') {
			console.log('reset: return')
			return
		}
		const value = calc.slice(0, 0)
		setCalc(value)
		setResult('0')
		console.log('reset')
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
			<div>{getTimeFromDate(currentDate)}</div>
			<div>{randomNumber(currentRandomNumber)}</div>
			<h1>Calculator</h1>
			<div className={styles.display}>
				{/* <div className={calc ? styles.displayEqual : styles.display}> */}
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
