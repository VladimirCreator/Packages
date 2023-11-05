// Tue 11 Jul 2023 01:59 AM

import { NextResponse } from 'next/server'

// Weird!
export async function GET(request: Request) {
    return NextResponse.json({
        data: [
            /* Root */
            { super: undefined, id: 0, title: 'Proportional', children: [1, 2, 3, 4] },

            /* Section */
            { super: 0, id: 1, title: 'Жильё', children: [5, 6], moniker: ['человек', 'человек'], hsl: 'text-red-500' },
            { super: 0, id: 2, title: 'Рестораны', children: [7, 8], moniker: ['человек', 'человек'], hsl: 'text-orange-500' },
            { super: 0, id: 3, title: 'Мероприятия', children: [9, 10], moniker: ['гость', 'гостей'], hsl: 'text-yellow-500' },
            { super: 0, id: 4, title: 'Фигуры', children: [11, 12], moniker: ['угол', 'углов'], hsl: 'text-green-500' },

            /* Row */
            { super: 1, id: 5, title: 'проспект Ленина 0', total: 1, moniker: ['доллар', 'долларов'], children: [14, 15, 16, 17] },
            { super: 1, id: 6, title: 'проспект Ленина 1', total: 2, moniker: ['доллар', 'долларов'], children: [18, 19] },

            { super: 2, id: 7, title: 'Чоризо фреш', total: 4, moniker: ['доллар', 'долларов'], children: [20, 21] },
            { super: 2, id: 8, title: 'Цыпленок карри', total: 8, moniker: ['доллар', 'долларов'], children: [22, 23] },

            { super: 3, id: 9, title: 'WWDC 23', total: 16, moniker: ['доллар', 'долларов'], children: [24, 25, 26, 27, 28, 29] },
            { super: 3, id: 10, title: 'WWDC 22', total: 32, moniker: ['доллар', 'долларов'], children: [30, 31, 32] },

            { super: 4, id: 11, title: 'Треугольник', total: 180, moniker: ['градус', 'градусов'], children: [33, 34, 35] },
            { super: 4, id: 12, title: 'Квадрат', total: 360, moniker: ['градус', 'градусов'], children: [36, 37, 38, 39] },
            { super: 4, id: 12, title: 'Круг', total: 360, moniker: ['градус', 'градусов'], children: [...Array.from(Array(360), (_, index) => index + 40)] },

            { super: 5, id: 14, title: 'Человек 1', proportion: 50, children: [] },
            { super: 5, id: 15, title: 'Человек 2', proportion: 30, children: [] },
            { super: 5, id: 16, title: 'Человек 3', proportion: 10, children: [] },
            { super: 5, id: 17, title: 'Человек 4', proportion: 10, children: [] },

            { super: 6, id: 18, title: 'Человек 5', proportion: 50, children: [] },
            { super: 6, id: 19, title: 'Человек 6', proportion: 50, children: [] },

            { super: 7, id: 20, title: 'Человек 7', proportion: 50, children: [] },
            { super: 7, id: 21, title: 'Человек 8', proportion: 50, children: [] },

            { super: 8, id: 22, title: 'Человек 9', proportion: 50, children: [] },
            { super: 8, id: 23, title: 'Человек 10', proportion: 50, children: [] },

            { super: 9, id: 24, title: 'Человек 11', proportion: 1, children: [] },
            { super: 9, id: 25, title: 'Человек 12', proportion: 2, children: [] },
            { super: 9, id: 26, title: 'Человек 13', proportion: 3, children: [] },
            { super: 9, id: 27, title: 'Человек 14', proportion: 4, children: [] },
            { super: 9, id: 28, title: 'Человек 15', proportion: 5, children: [] },
            { super: 9, id: 29, title: 'Человек 16', proportion: 85, children: [] },

            { super: 10, id: 30, title: 'Человек 17', proportion: 33, children: [] },
            { super: 10, id: 31, title: 'Человек 18', proportion: 33, children: [] },
            { super: 10, id: 32, title: 'Человек 19', proportion: 33, children: [] },

            { super: 11, id: 33, title: 'Угол 1', proportion: 33, children: [] },
            { super: 11, id: 34, title: 'Угол 2', proportion: 33, children: [] },
            { super: 11, id: 35, title: 'Угол 3', proportion: 33, children: [] },

            { super: 12, id: 36, title: 'Угол 1', proportion: 25, children: [] },
            { super: 12, id: 37, title: 'Угол 2', proportion: 25, children: [] },
            { super: 12, id: 38, title: 'Угол 3', proportion: 25, children: [] },
            { super: 12, id: 39, title: 'Угол 4', proportion: 25, children: [] },

            {id:40,title:"Title 40",children:[]},{id:41,title:"Title 41",children:[]},{id:42,title:"Title 42",children:[]},{id:43,title:"Title 43",children:[]},{id:44,title:"Title 44",children:[]},{id:45,title:"Title 45",children:[]},{id:46,title:"Title 46",children:[]},{id:47,title:"Title 47",children:[]},{id:48,title:"Title 48",children:[]},{id:49,title:"Title 49",children:[]},{id:50,title:"Title 50",children:[]},{id:51,title:"Title 51",children:[]},{id:52,title:"Title 52",children:[]},{id:53,title:"Title 53",children:[]},{id:54,title:"Title 54",children:[]},{id:55,title:"Title 55",children:[]},{id:56,title:"Title 56",children:[]},{id:57,title:"Title 57",children:[]},{id:58,title:"Title 58",children:[]},{id:59,title:"Title 59",children:[]},{id:60,title:"Title 60",children:[]},{id:61,title:"Title 61",children:[]},{id:62,title:"Title 62",children:[]},{id:63,title:"Title 63",children:[]},{id:64,title:"Title 64",children:[]},{id:65,title:"Title 65",children:[]},{id:66,title:"Title 66",children:[]},{id:67,title:"Title 67",children:[]},{id:68,title:"Title 68",children:[]},{id:69,title:"Title 69",children:[]},{id:70,title:"Title 70",children:[]},{id:71,title:"Title 71",children:[]},{id:72,title:"Title 72",children:[]},{id:73,title:"Title 73",children:[]},{id:74,title:"Title 74",children:[]},{id:75,title:"Title 75",children:[]},{id:76,title:"Title 76",children:[]},{id:77,title:"Title 77",children:[]},{id:78,title:"Title 78",children:[]},{id:79,title:"Title 79",children:[]},{id:80,title:"Title 80",children:[]},{id:81,title:"Title 81",children:[]},{id:82,title:"Title 82",children:[]},{id:83,title:"Title 83",children:[]},{id:84,title:"Title 84",children:[]},{id:85,title:"Title 85",children:[]},{id:86,title:"Title 86",children:[]},{id:87,title:"Title 87",children:[]},{id:88,title:"Title 88",children:[]},{id:89,title:"Title 89",children:[]},{id:90,title:"Title 90",children:[]},{id:91,title:"Title 91",children:[]},{id:92,title:"Title 92",children:[]},{id:93,title:"Title 93",children:[]},{id:94,title:"Title 94",children:[]},{id:95,title:"Title 95",children:[]},{id:96,title:"Title 96",children:[]},{id:97,title:"Title 97",children:[]},{id:98,title:"Title 98",children:[]},{id:99,title:"Title 99",children:[]}
        ]
    })
}