/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | JSONView.swift | Initially Modified: 12:18 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | JSONView.swift |      Last Modified: 01:36 AM Mon 11 Sep 2023
   /View/Launch/JSONView.swift

   Swift
 - class

   Swift Playgrounds
 - file
 - folder

   Mon 11 Sep 2023
 __:__ AM | `` | (+)
 #
*/

import SwiftUI

// ...
fileprivate let decoder: JSONDecoder = .init()

// ...
fileprivate let hotel = try! decoder.decode(Hotel.self, from: json[0])
fileprivate let room = try! decoder.decode(Rooms.self, from: json[1]) // 12:54 AM Mon 11 Sep 2023
fileprivate let booking = try! decoder.decode(Booking.self, from: json[2]) // Initially Modified: 01:32 AM Mon 11 Sep 2023

// ...
internal struct JSONView: View {
    @State private var isJsonPressed: Bool = false // 12:34 AM Mon 11 Sep 2023
    @State private var pageIndex: Int = 0 // 12:26 AM Mon 11 Sep 2023

    internal var body: some View {
        NavigationStack {
            TabView(selection: $pageIndex) {
                issue1.tag(0)
                issue2.tag(1)
                issue3.tag(2)
            }
            .toolbar {
                ToolbarItem(placement: .bottomBar) {
                    Button("JSON") {
                        isJsonPressed.toggle()
                    }
                }
            }
            .tabViewStyle(.page(indexDisplayMode: .always))
            .fullScreenCover(isPresented: $isJsonPressed) {
                ScrollView {
                    Text(String(data: json[pageIndex], encoding: .utf8)!)
                        .monospaced(true)
                }
                .onTapGesture {
                    isJsonPressed.toggle()
                }
            }
        }
    }

    private var issue1: some View { // 12:31 AM Mon 11 Sep 2023
        VStack {
            Text(hotel.id.description)
            Text(hotel.label)
            Text(hotel.address)
            Text(hotel.price.description)
            Text(hotel.price_description)
            Text(hotel.rating.description)
            Text(hotel.rating_description)
            VStack {
                ForEach(hotel.urls_of_images, id: \.self) {
                    Text($0)
                }
            }
            Text(hotel.about_hotel.description)
            VStack {
                ForEach(hotel.about_hotel.peculiarities, id: \.self) {
                    Text($0)
                }
            }
        }
    }

    private var issue2: some View { // 12:55 AM Mon 11 Sep 2023
        ScrollView {
            VStack {
                ForEach(room.rooms) { room in
                    Text(room.id.description)
                    Text(room.label)
                    Text(room.price.description)
                    Text(room.price_description)
                    VStack {
                        ForEach(room.peculiarities, id: \.self) {
                            Text($0)
                        }
                    }
                    VStack {
                        ForEach(room.urls_of_images, id: \.self) { url in
                            Text(url)
                        }
                    }
                }
            }
        }
    }

    private var issue3: some View { // Initially: 01:32 AM Mon 11 Sep 2023
        VStack {
            VStack {
                Text(booking.id.description)
                Text(booking.label)
                Text(booking.address)
                Text(booking.rating.description)
                Text(booking.rating_description)
                Text(booking.departure)
            }
            Text(booking.arrival_country)
            Text(booking.tour_date_start)
            Text(booking.tour_date_stop)
            Text(booking.number_of_nights.description)
            Text(booking.room)
            Text(booking.nutrition)
            Text(booking.tour_price.description)
            Text(booking.fuel_charge.description)
            Text(booking.service_charge.description)
        }
    }
}

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
                "https://www.atorus.ru/sites/default/files/upload/image/News/56871/%D1%80%D0%B8%D0%BA%D1%81%D0%BE%D1%81%20%D1%81%D0%B8%D0%B3%D0%B5%D0%B9%D1%82.jpg",
                "https://q.bstatic.com/xdata/images/hotel/max1024x768/267647265.jpg?k=c8233ff42c39f9bac99e703900a866dfbad8bcdd6740ba4e594659564e67f191&o=",
                "https://worlds-trip.ru/wp-content/uploads/2022/10/white-hills-resort-5.jpeg"
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
                "https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b1j0_roskdc_00_p_1024x768.jpg?ritok=65&twic=v1/cover=800x600",
                "https://www.google.com/search?q=%D0%BD%D0%BE%D0%BC%D0%B5%D1%80+%D0%BB%D1%8E%D0%BA%D1%81+%D0%B2+%D0%BE%D1%82%D0%B5%D0%BB%D0%B8+%D0%B5%D0%B3%D0%B8%D0%BF%D1%82%D0%B0+%D1%81+%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC+%D0%B1%D0%B0%D1%81%D1%81%D0%B5%D0%B9%D0%BD%D0%BE%D0%BC&tbm=isch&ved=2ahUKEwilufKp-4KBAxUfJxAIHR4uAToQ2-cCegQIABAA&oq=%D0%BD%D0%BE%D0%BC%D0%B5%D1%80+%D0%BB%D1%8E%D0%BA%D1%81+%D0%B2+%D0%BE%D1%82%D0%B5%D0%BB%D0%B8+%D0%B5%D0%B3%D0%B8%D0%BF%D1%82%D0%B0+%D1%81+%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC+%D0%B1%D0%B0%D1%81%D1%81%D0%B5%D0%B9%D0%BD%D0%BE%D0%BC&gs_lcp=CgNpbWcQAzoECCMQJ1CqAVi6HGDmHWgAcAB4AIABXIgB3wySAQIyNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Y3fuZOX7KJ_OwPAPntyE0AM&bih=815&biw=1440#imgrc=Nr2wzh3vuY4jEM&imgdii=zTCXWbFgrQ5HBM",
                "https://tour-find.ru/thumb/2/bsb2EIEFA8nm22MvHqMLlw/r/d/screenshot_3_94.png"
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
