import {
	handleMinus,
	handleDivision,
	handleMultiply,
	handleNum,
	handlePlus,
	handleReset,
	handleResult,
	handleDelLast,
} from './handlers'

export const getButtons = (state) => [
	{
		id: 'MC',
		label: 'MC',
		group: 'initialize',
		handler: (label) => handleNum(state, label),
	},
	{
		id: 'M+',
		label: 'M+',
		group: 'initialize',
		handler: (label) => handleNum(state, label),
	},
	{
		id: 'M-',
		label: 'M-',
		group: 'initialize',
		handler: (label) => handleNum(state, label),
	},
	{
		id: 'MR',
		label: 'MR',
		group: 'initialize',
		handler: (label) => handleNum(state, label),
	},

	{ id: 'C', label: 'C', group: 'operator', handler: () => handleReset(state) },
	{
		id: '/',
		label: '/',
		group: 'operator',
		handler: () => handleDivision(state),
	},
	{
		id: '*',
		label: '*',
		group: 'operator',
		handler: () => handleMultiply(state),
	},

	{
		id: 'del',
		label: 'del',
		group: 'operator',
		handler: () => handleDelLast(state),
	},

	{
		id: '7',
		label: '7',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '8',
		label: '8',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '9',
		label: '9',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},

	{ id: '-', label: '-', group: 'operator', handler: () => handleMinus(state) },

	{
		id: '4',
		label: '4',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '5',
		label: '5',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '6',
		label: '6',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},

	{ id: '+', label: '+', group: 'operator', handler: () => handlePlus(state) },

	{
		id: '1',
		label: '1',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '2',
		label: '2',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
	{
		id: '3',
		label: '3',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},

	{ id: '=', label: '=', group: 'equal', handler: () => handleResult(state) },

	{
		id: '%',
		label: '%',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},

	{
		id: '0',
		label: '0',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},

	{
		id: '.',
		label: '.',
		group: 'number',
		handler: (label) => handleNum(state, label),
	},
]
