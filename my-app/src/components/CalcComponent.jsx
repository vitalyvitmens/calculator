import styles from './CalcComponent.module.css'

export const CalcComponent = (props) => {
	// const programmingLanguages = [
	// 	{ id: '1', name: 'Python' },
	// 	{ id: '2', name: 'Dart' },
	// 	{ id: '3', name: 'JavaScript' },
	// ]

	// const clickProgrammingLanguages = () =>
	// 	console.log(
	// 		`Вы кликнули по объекту: ${JSON.stringify(programmingLanguages)}`
	// 	)

	const buttonsArr = [
		{ value: 'MC', type: 'initialize', id: 'mc' },
		{ value: 'M+', type: 'operator', id: 'mMult' },
		{ value: 'M-', type: 'operator', id: 'mDiv' },
		{ value: 'MR', type: 'operator', id: 'mr' },

    { value: 'C', type: 'initialize', id: 'reset' },
		{ value: '/', type: 'operator', id: 'div' },
		{ value: 'X', type: 'operator', id: 'mult' },
		{ value: 'del', type: 'operator', id: 'pop' },

		{ value: '7', type: 'number', id: 'seven' },
		{ value: '8', type: 'number', id: 'eight' },
		{ value: '9', type: 'number', id: 'nine' },
		{ value: '-', type: 'operator', id: 'min' },

		{ value: '4', type: 'number', id: 'four' },
		{ value: '5', type: 'number', id: 'five' },
		{ value: '6', type: 'number', id: 'six' },
		{ value: '+', type: 'operator', id: 'add' },

		{ value: '1', type: 'number', id: 'one' },
		{ value: '2', type: 'number', id: 'two' },
		{ value: '3', type: 'number', id: 'three' },
		{ value: '=', type: 'equal', id: 'equal' },

		{ value: '%', type: 'operator', id: 'percent' },
		{ value: '0', type: 'number', id: 'zero' },
		{ value: ',', type: 'decimal', id: 'comma' },
		{ value: '=', type: 'equal', id: 'equal' },
	]

	return (
		<>
			<h1>Calculator</h1>
      <input placeholder='0'></input>
			<ul>
				<li>
					{buttonsArr.slice(0, 4).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(4, 8).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(8, 12).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(12, 16).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(16, 20).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
				<li>
					{buttonsArr.slice(20, 24).map(({ id, value }) => (
						<button key={id} className={styles.button}>
							{value}
						</button>
					))}
				</li>
			</ul>
		</>
	)
}
