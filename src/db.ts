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
			'Poseen un gran valor nutricional y son utilizadas mayormente como acompañamiento.',
	},
	{
		url: 'assets/img/huevos.png',
		fondo: 'rgb(190, 182, 140)',
		titulo: 'huevos',
		descripcion:
			'Es un alimento muy práctico y altamente nutritivo que debe formar parte de la dieta habitual.',
	},
	{
		url: 'assets/img/brocoli.png',
		fondo: 'rgb(174, 254, 209)',
		titulo: 'Brocoli',
		descripcion:
			'Rico en proteínas, hierro, calcio, vitaminas y minerales, un producto esencial para aquellos que buscan un alimento saludable.',
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
		img: 'assets/img/wokVerduras.jpg',
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
		titulo: 'Falafel con Baba Ganoush',
		tiempo: '30min',
		costo: 200,
		img: 'assets/img/falafel.jpg',
		datos: {
			kcal: 350,
			prot: 10.1,
			grasas: 4.5,
			carbs: 85.1,
		},
		ingredientes: [
			{
				item: 'Pan de Pita',
				cant: '3 u',
			},
			{
				item: 'Chili',
				cant: '1 u',
			},
			{
				item: 'Cilantro',
				cant: '1/2 atado',
			},
			{
				item: 'Garbanzos',
				cant: '202 g',
			},
			{
				item: 'Lechuga',
				cant: '1/2 planta',
			},
			{
				item: 'Cebolla morada',
				cant: '1 u',
			},
			{
				item: 'Yogurt natural',
				cant: '100 ml',
			},
			{
				item: 'Lima',
				cant: '1 u',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Curry de Brócoli',
		tiempo: '25min',
		costo: 170,
		img: 'assets/img/curryBrocoli.jpg',
		datos: {
			kcal: 125,
			prot: 4.3,
			grasas: 0.6,
			carbs: 20.1,
		},
		ingredientes: [
			{
				item: 'Brócoli',
				cant: '3 plantas',
			},
			{
				item: 'Morron verde',
				cant: '1 u',
			},
			{
				item: 'Curry',
				cant: '1 cda',
			},
			{
				item: 'Cebolla',
				cant: '1 u',
			},
			{
				item: 'Leche',
				cant: '200 ml',
			},
			{
				item: 'Caldo de verdura',
				cant: '300 ml',
			},
			{
				item: 'Espinaca',
				cant: '1 atado',
			},
			{
				item: 'Ajo',
				cant: '2 dientes',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Berenjenas Parmesanas',
		tiempo: '30min',
		costo: 210,
		img: 'assets/img/berenjenasParme.jpg',
		datos: {
			kcal: 280,
			prot: 5.8,
			grasas: 3.3,
			carbs: 36.5,
		},
		ingredientes: [
			{
				item: 'berenjenas',
				cant: '1 Kilo',
			},
			{
				item: 'Harina',
				cant: '100 g',
			},
			{
				item: 'Queso parmesano',
				cant: '250 g',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Tomate triturado',
				cant: '500 g',
			},
			{
				item: 'Albahaca',
				cant: '1 atado',
			},
			{
				item: 'Mozarella',
				cant: '500 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Ensalada Thai de Fideos de Arroz',
		tiempo: '15min',
		costo: 120,
		img: 'assets/img/ensaladaThai.jpg',
		datos: {
			kcal: 102,
			prot: 1.2,
			grasas: 0.2,
			carbs: 6.1,
		},
		ingredientes: [
			{
				item: 'Brotes de soja',
				cant: '50 g',
			},
			{
				item: 'Chile',
				cant: '1 u',
			},
			{
				item: 'Cilantro',
				cant: '1/2 atado',
			},
			{
				item: 'Pepino',
				cant: '1 u',
			},
			{
				item: 'Lima',
				cant: '1 u',
			},
			{
				item: 'Cebolla morada',
				cant: '1 u',
			},
			{
				item: 'Morron rojo',
				cant: '1 u',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Receta de Ensalada de Pasta y Atún',
		tiempo: '20min',
		costo: 180,
		img: 'assets/img/ensaladaPasta.jpg',
		datos: {
			kcal: 230,
			prot: 8.1,
			grasas: 2.4,
			carbs: 38.6,
		},
		ingredientes: [
			{
				item: 'Rigatoni',
				cant: '300 g',
			},
			{
				item: 'Tomate',
				cant: '2 u',
			},
			{
				item: 'Albahaca',
				cant: '1 atado',
			},
			{
				item: 'Atún natural',
				cant: '300 g',
			},
			{
				item: 'Morrón rojo',
				cant: '1 u',
			},
			{
				item: 'Tomates secos hidratados',
				cant: '6 u',
			},
			{
				item: 'Aceite de Oliva',
				cant: '30 ml',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Pollo al Curry',
		tiempo: '20 min',
		costo: 160,
		img: 'assets/img/polloCurry.jpg',
		datos: {
			kcal: 141,
			prot: 6.2,
			grasas: 2.4,
			carbs: 11.3,
		},
		ingredientes: [
			{
				item: 'Pechuga de pollo',
				cant: '1 u',
			},
			{
				item: 'Tomate triturado',
				cant: '200 g',
			},
			{
				item: 'Cilantro',
				cant: '1/2 atado',
			},
			{
				item: 'Cebolla de verdeo',
				cant: '100 g',
			},
			{
				item: 'Curry',
				cant: '1 cda',
			},
			{
				item: 'Leche',
				cant: '200 ml',
			},
			{
				item: 'Arroz',
				cant: '200 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
]

export const desayunos: Receta[] = [
	{
		titulo: 'Crumble de Manzana',
		tiempo: '10min',
		costo: 70,
		img: 'assets/img/crumbleManzana.jpg',
		datos: {
			kcal: 189,
			prot: 2.2,
			grasas: 1.5,
			carbs: 42.1,
		},
		ingredientes: [
			{
				item: 'Manzana',
				cant: '2 u',
			},
			{
				item: 'Azucar integral',
				cant: '20 g',
			},
			{
				item: 'Avena',
				cant: '50 g',
			},
			{
				item: 'Pasas de uvas',
				cant: '30 g',
			},
			{
				item: 'Esencia de vainilla',
				cant: '5 ml',
			},
			{
				item: 'Canela',
				cant: '1 cda',
			},
			{
				item: 'harina',
				cant: '30 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Sandwich de Tofu',
		tiempo: '5min',
		costo: 100,
		img: 'assets/img/sandwichTofu.png',
		datos: {
			kcal: 135,
			prot: 5.1,
			grasas: 2.1,
			carbs: 36.2,
		},
		ingredientes: [
			{
				item: 'Pan Lactal integral',
				cant: '2 u',
			},
			{
				item: 'Tofu',
				cant: '100 g',
			},
			{
				item: 'Rúcula',
				cant: '1 u',
			},
			{
				item: 'Semillas de calabaza',
				cant: '10 g',
			},
			{
				item: 'Queso crema',
				cant: '10 g',
			},
			{
				item: 'Semilla de zapallo',
				cant: '10 g',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Yogur de macedonia de citricos',
		tiempo: '10min',
		costo: 130,
		img: 'assets/img/yogurCitrico.jpg',
		datos: {
			kcal: 80,
			prot: 0.4,
			grasas: 2.3,
			carbs: 15.8,
		},
		ingredientes: [
			{
				item: 'Yogur natural',
				cant: '250 g',
			},
			{
				item: 'Pomelo',
				cant: '1 u',
			},
			{
				item: 'Mandarina',
				cant: '1 u',
			},
			{
				item: 'Naranja',
				cant: '1 u',
			},
			{
				item: 'miel',
				cant: '1 cda',
			},
			{
				item: 'Semilla de zapallo',
				cant: '3 u',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Tostada con palta y huevo',
		tiempo: '5min',
		costo: 80,
		img: 'assets/img/panPalta.jpg',
		datos: {
			kcal: 136,
			prot: 4.5,
			grasas: 5.4,
			carbs: 26.1,
		},
		ingredientes: [
			{
				item: 'Pan Lactal integral',
				cant: '2 u',
			},
			{
				item: 'Palta',
				cant: '1 u',
			},
			{
				item: 'Heuvo',
				cant: '1 u',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
			{
				item: 'Pimienta',
				cant: '1 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Panqueque de Banana',
		tiempo: '10min',
		costo: 80,
		img: 'assets/img/tortillaBanana.jpg',
		datos: {
			kcal: 120,
			prot: 4.8,
			grasas: 1.2,
			carbs: 23.8,
		},
		ingredientes: [
			{
				item: 'Banana',
				cant: '2 u',
			},
			{
				item: 'huevo',
				cant: '2 u',
			},
			{
				item: 'Arandanos',
				cant: '10 u',
			},
			{
				item: 'Aceite de oliva',
				cant: '1 cda',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Crep de jamon y queso',
		tiempo: '10min',
		costo: 150,
		img: 'assets/img/crepJYQ.jpg',
		datos: {
			kcal: 189,
			prot: 6.2,
			grasas: 5.8,
			carbs: 42.1,
		},
		ingredientes: [
			{
				item: 'Huevo',
				cant: '1 u',
			},
			{
				item: 'Harina',
				cant: '10 g',
			},
			{
				item: 'Leche',
				cant: '100 ml',
			},
			{
				item: 'Jamon',
				cant: '30 g',
			},
			{
				item: 'Mozarela',
				cant: '40 g',
			},
			{
				item: 'Manteca',
				cant: '5 g',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Hummus con zanahoria',
		tiempo: '10min',
		costo: 60,
		img: 'assets/img/hummus.jpg',
		datos: {
			kcal: 120,
			prot: 9.2,
			grasas: 5.1,
			carbs: 6.8,
		},
		ingredientes: [
			{
				item: 'Garbanzos',
				cant: '200 g',
			},
			{
				item: 'Tahini',
				cant: '1 cda',
			},
			{
				item: 'Aceite de oliva',
				cant: '2 cda',
			},
			{
				item: 'Ajo',
				cant: '1 u',
			},
			{
				item: 'Zanahoria',
				cant: '1 u',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Galletitas de Banana',
		tiempo: '20min',
		costo: 190,
		img: 'assets/img/galletaBanana.jpg',
		datos: {
			kcal: 230,
			prot: 7.8,
			grasas: 5.8,
			carbs: 29.4,
		},
		ingredientes: [
			{
				item: 'Banana',
				cant: '2 u',
			},
			{
				item: 'Avena',
				cant: '50 g',
			},
			{
				item: 'Harina de almendra',
				cant: '50 g',
			},
			{
				item: 'Miel',
				cant: '50 g',
			},
			{
				item: 'Sal',
				cant: '3 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
]

export const defaultComidas: Receta[] = [
	{
		titulo: 'Tostada con palta y huevo',
		tiempo: '5min',
		costo: 80,
		img: 'assets/img/panPalta.jpg',
		datos: {
			kcal: 136,
			prot: 4.5,
			grasas: 5.4,
			carbs: 26.1,
		},
		ingredientes: [
			{
				item: 'Pan Lactal integral',
				cant: '2 u',
			},
			{
				item: 'Palta',
				cant: '1 u',
			},
			{
				item: 'Heuvo',
				cant: '1 u',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
			{
				item: 'Pimienta',
				cant: '1 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
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
		titulo: 'Crep de jamon y queso',
		tiempo: '10min',
		costo: 150,
		img: 'assets/img/crepJYQ.jpg',
		datos: {
			kcal: 189,
			prot: 6.2,
			grasas: 5.8,
			carbs: 42.1,
		},
		ingredientes: [
			{
				item: 'Huevo',
				cant: '1 u',
			},
			{
				item: 'Harina',
				cant: '10 g',
			},
			{
				item: 'Leche',
				cant: '100 ml',
			},
			{
				item: 'Jamon',
				cant: '30 g',
			},
			{
				item: 'Mozarela',
				cant: '40 g',
			},
			{
				item: 'Manteca',
				cant: '5 g',
			},
			{
				item: 'Sal',
				cant: '2 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
	{
		titulo: 'Berenjenas Parmesanas',
		tiempo: '30min',
		costo: 210,
		img: 'assets/img/berenjenasParme.jpg',
		datos: {
			kcal: 280,
			prot: 5.8,
			grasas: 3.3,
			carbs: 36.5,
		},
		ingredientes: [
			{
				item: 'berenjenas',
				cant: '1 Kilo',
			},
			{
				item: 'Harina',
				cant: '100 g',
			},
			{
				item: 'Queso parmesano',
				cant: '250 g',
			},
			{
				item: 'Harina',
				cant: '150 g',
			},
			{
				item: 'Tomate triturado',
				cant: '500 g',
			},
			{
				item: 'Albahaca',
				cant: '1 atado',
			},
			{
				item: 'Mozarella',
				cant: '500 g',
			},
		],
		pasos: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		],
	},
]
