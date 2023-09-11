/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Constants.swift | Initially Modified: 06:58 PM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Constants.swift |      Last Modified: __:__ _M ___ __ Sep 2023
   /Shared/Constants.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder

   Tue 5 Sep 2023
   __:__ PM | `` | (+)
   #
*/

import SwiftUI

// ...
fileprivate let decoder: JSONDecoder = .init()

// ...
internal let hotel = try! decoder.decode(Hotel.self, from: json[0]),
             room = try! decoder.decode(Rooms.self, from: json[1]), // 12:54 AM Mon 11 Sep 2023
             booking = try! decoder.decode(Booking.self, from: json[2]) // Initially Modified: 01:32 AM Mon 11 Sep 2023

fileprivate let json: [Data] = [
"""
{
    "id": 1,
    "name": "Лучший пятизвездочный отель в Хургаде, Египет",
    "adress": "Madinat Makadi, Safaga Road, Makadi Bay, Египет",
    "minimal_price": 134268,
    "price_for_it": "За тур с перелётом",
    "rating": 5,
    "rating_name": "Превосходно",
    "image_urls": [
        ""
    ],
    "about_the_hotel": {
        "description": "Отель VIP-класса с собственными гольф полями. Высокий уровнь сервиса. Рекомендуем для респектабельного отдыха. Отель принимает гостей от 18 лет!",
        "peculiarities": [
            "Бесплатный Wifi на всей территории отеля",
            "1 км до пляжа",
            "Бесплатный фитнес-клуб",
            "20 км до аэропорта"
        ]
    }
}
""",

"""
{
    "rooms": [
        {
            "id": 1,
            "name": "Стандартный номер с видом на бассейн",
            "price": 186600,
            "price_per": "За 7 ночей с перелетом",
            "peculiarities": [
                "Включен только завтрак",
                "Кондиционер"
            ],
            "image_urls": [
                ""
            ]
        },
        {
            "id": 2,
            "name": "Люкс номер с видом на море",
            "price": 289400,
            "price_per": "За 7 ночей с перелетом",
            "peculiarities": [
                "Все включено",
                "Кондиционер",
                "Собственный бассейн"
            ],
            "image_urls": [
                ""
            ]
        }
    ]
}
""",

// Initially Modified: 01:13 AM Mon 11 Sep 2023
"""
{
    "id": 1,
    "hotel_name": "Лучший пятизвездочный отель в Хургаде, Египет",
    "hotel_adress": "Madinat Makadi, Safaga Road, Makadi Bay, Египет",
    "horating": 5,
    "rating_name": "Превосходно",
    "departure": "Москва",
    "arrival_country": "Египет, Хургада",
    "tour_date_start": "19.09.2023",
    "tour_date_stop": "27.09.2023",
    "number_of_nights": 7,
    "room": "Люкс номер с видом на море",
    "nutrition": "Все включено",
    "tour_price": 289400,
    "fuel_charge": 9300,
    "service_charge": 2150
}
"""
].map { $0.data(using: .utf8)! }
