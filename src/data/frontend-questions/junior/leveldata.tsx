type LevelType = {
	'level-1': { title: string; tech: string[] }[]
	'level-2': { title: string; tech: string[] }[]
	'level-3': { title: string; tech: string[] }[]
	[key: string]: { title: string; tech: string[] }[]
}

export const levelData: LevelType = {
	'level-1': [
		{
			title: 'Front-end Junior 1 level',
			tech: ['Html', 'Css', 'JavaScript', 'React'],
		},
	],
	'level-2': [
		{
			title: 'Front-end Junior 2 level',
			tech: [
				'Html-2',
				'Css-2',
				'JavaScript-2',
				'DOM',
				'Тестирование',
				'Работа с датой',
				'Мобильные браузеры',
			],
		},
	],
	'level-3': [
		{
			title: 'Front-end Junior 3 level',
			tech: [
				'Системы сборки',
				'Работа с данными',
				'Html-3',
				'Css-3',
				'JavaScript-4',
				'React-2',
				'Git',
				'API',
				'Тестирование',
			],
		},
	],
}
