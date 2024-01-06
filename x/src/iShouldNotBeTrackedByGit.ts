const root = {super:undefined,id:0,title:'Proportional',children:[1,2,3,4]}

const sections = [
	{super:0,id:1,title:'Жильё',children:[5,6],moniker:['человек','человек'],hsl:'text-red-500'},
	{super:0,id:2,title:'Рестораны',children:[7,8],moniker:['человек','человек'],hsl:'text-orange-500'},
	{super:0,id:3,title:'Мероприятия',children:[9,10],moniker:['гость','гостей'],hsl:'text-yellow-500'},
	{super:0,id:4,title:'Фигуры',children:[11,12],moniker:['угол','углов'],hsl:'text-green-500'}
]

const rows = [
	{super:1,id:5,title:'проспект Лнина 0',total:1,moniker:['доллар','долларов'],children:[14,15,16,17]},
	{super:1,id:6,title:'проспект Лнина 1',total:2,moniker:['доллар','долларов'],children:[18,19]},

	{super:2,id:7,title:'Чоризо феш',total:4,moniker:['доллар','долларов'],children:[20,21]},
	{super:2,id:8,title:'Цыпленок крри',total:8,moniker:['доллар','долларов'],children:[22,23]},

	{super:3,id:9,title:'WWDC 2',total:16,moniker:['доллар','долларов'],children:[24,25,26,27,28,29]},
	{super:3,id:10,title:'WWDC 2',total:32,moniker:['доллар','долларов'],children:[30,31,32]},

	{super:4,id:11,title:'Треугольник',total:180,moniker:['градус','градусов'],children:[33,34,35]},
	{super:4,id:12,title:'Квадрат',total:360,moniker:['градус','градусов'],children:[36,37,38,39]},
	{super:4,id:12,title:'Круг',total:360,moniker:['градус','градусов'],children:Array.from({length:360},(_,i)=>i+40)}
]

const entries = [
	{super:5,id:14,title:'Человек 1',proportion:50,children:[]},
	{super:5,id:15,title:'Человек 2',proportion:30,children:[]},
	{super:5,id:16,title:'Человек 3',proportion:10,children:[]},
	{super:5,id:17,title:'Человек 4',proportion:10,children:[]},

	{super:6,id:18,title:'Человек 5',proportion:50,children:[]},
	{super:6,id:19,title:'Человек 6',proportion:50,children:[]},

	{super:7,id:20,title:'Человек 7',proportion:50,children:[]},
	{super:7,id:21,title:'Человек 8',proportion:50,children:[]},

	{super:8,id:22,title:'Человек 9',proportion:50,children:[]},
	{super:8,id:23,title:'Человек 10',proportion:50,children:[]},

	Array.from({length:6},(_,i)=>({super:9,id:24+i,title:`Человек ${i+11}`,proportion:i+1,children:[]})),

	{super:10,id:30,title:'Человек 17',proportion:33,children:[]},
	{super:10,id:31,title:'Человек 18',proportion:33,children:[]},
	{super:10,id:32,title:'Человек 19',proportion:33,children:[]},

	{super:11,id:33,title:'Угол 1',proportion:33,children:[]},
	{super:11,id:34,title:'Угол 2',proportion:33,children:[]},
	{super:11,id:35,title:'Угол 3',proportion:33,children:[]},

	Array.from({length:4},(_,i)=>({super:12,id:36+i,title:`Угол ${i+1}`,proportion:25,children:[]})),
	Array.from({length:60},(_,i)=>({id:40+i,title:`Заголовок ${i+40}`,proportion:25,children:[]})),
]

export const iShouldNotBeTrackedByGit = [root, sections, rows, entries].flat(Infinity)
