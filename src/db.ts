interface Ingrediente {
	item: string
	cant: string
}

export interface Preferencia {
	url: string
	fondo: string
	titulo: string
	descripcion: string
}

interface Nutrientes {
	kcal: number
	prot: number
	grasas: number
	carbs: number
}

export interface Receta {
	titulo: string
	tiempo: string
	costo: number
	img: string
	datos: Nutrientes
	ingredientes: Ingrediente[]
	pasos: string[]
}

export const preferencias: Preferencia[] = [
	{
		url: 'assets/img/chili.png',
		fondo: ' rgb(255,173, 154)',
		titulo: 'Chili',
		descripcion:
			'Pimenton, ajos o morrones de diversos tipos. Son utilizados en diversas recetas.',
	},

	{
		url: 'assets/img/ostras.png',
		fondo: 'rgb(174, 254, 209)',
		titulo: 'Ostras',
		descripcion:
			'Poseen un gran valor nutricional y son utilizadas mayormente como acompañamiento',
	},
	{
		url: 'assets/img/huevos.png',
		fondo: 'rgb(190, 182, 140)',
		titulo: 'huevos',
		descripcion:
			'xxxx xxxxx xxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxx',
	},
	{
		url: 'assets/img/brocoli.png',
		fondo: 'rgb(174, 254, 209)',
		titulo: 'Brocoli',
		descripcion:
			'xxxx xxxxx xxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxx',
	},
]

export const recetas: Receta[] = [
	{
		titulo: 'Pollo al limón con verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 242,
			prot: 7.8,
			grasas: 6.5,
			carbs: 36.6,
		},
		ingredientes: [
			{
				item: 'Pollo',
				cant: '1 kilo',
			},
			{
				item: 'Huevos',
				cant: '2 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Wok de verduras',
		tiempo: '15min',
		costo: 150,
		img: 'assets/img/polloAlLimon.jpg',
		datos: {
			kcal: 152,
			prot: 3.1,
			grasas: 1.5,
			carbs: 12.1,
		},
		ingredientes: [
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '300 ml',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Pan rallado',
				cant: '200 g',
			},
			{
				item: 'Sal',
				cant: '5 g',
			},
			{
				item: 'Crema bajas caloría',
				cant: '100 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
]
