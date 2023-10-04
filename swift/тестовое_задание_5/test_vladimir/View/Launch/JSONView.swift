/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | JSONView.swift | Initially Modified: 12:18 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | JSONView.swift |      Last Modified: 01:36 AM Mon 11 Sep 2023
   /View/Launch/JSONView.swift
   Mon 11 Sep 2023
     __:__ AM | `` | (+)
     #
*/

import SwiftUI

fileprivate let decoder: JSONDecoder = .init()

internal let hotel = try! decoder.decode(Hotel.self, from: json[0]),
             room = try! decoder.decode(Rooms.self, from: json[1]),
             booking = try! decoder.decode(Booking.self, from: json[2])

fileprivate let json: [Data] = [
    """
    {"id":1,"name":"Лучший пятизвездочный отель в Хургаде, Египет","adress":"Madinat Makadi, Safaga Road, Makadi Bay, Египет","minimal_price":134268,"price_for_it":"За тур с перелётом","rating":5,"rating_name":"Превосходно","image_urls":[""],"about_the_hotel":{"description":"Отель VIP-класса с собственными гольф полями. Высокий уровнь сервиса. Рекомендуем для респектабельного отдыха. Отель принимает гостей от 18 лет!","peculiarities":["Бесплатный Wifi на всей территории отеля","1 км до пляжа","Бесплатный фитнес-клуб","20 км до аэропорта"]}}
    """,
    """
    {"rooms":[{"id":1,"name":"Стандартный номер с видом на бассейн","price":186600,"price_per":"За 7 ночей с перелетом","peculiarities":["Включен только завтрак","Кондиционер"],"image_urls":[""]},{"id":2,"name":"Люкс номер с видом на море","price":289400,"price_per":"За 7 ночей с перелетом","peculiarities":["Все включено","Кондиционер","Собственный бассейн"],"image_urls":[""]}]}
    """,
    """
    {"id":1,"hotel_name":"Лучший пятизвездочный отель в Хургаде, Египет","hotel_adress":"Madinat Makadi, Safaga Road, Makadi Bay, Египет","horating":5,"rating_name":"Превосходно","departure":"Москва","arrival_country":"Египет, Хургада","tour_date_start":"19.09.2023","tour_date_stop":"27.09.2023","number_of_nights":7,"room":"Люкс номер с видом на море","nutrition":"Все включено","tour_price":289400,"fuel_charge":9300,"service_charge":2150}
    """
].map { $0.data(using: .utf8)! }

internal struct JSONView: View {
    @State private var pageIndex: Int = 0

    internal var body: some View {
        NavigationStack {
            TabView(selection: $pageIndex) {
                issue1.tag(0)
                issue2.tag(1)
                issue3.tag(2)
            }
            .background(.background)
            .tabViewStyle(.page)
        }
    }

    private var issue1: some View {
        VStack(alignment: .leading, spacing: .zero) {
            Text(hotel.id.description)
            Text(hotel.name)
            Text(hotel.adress)
            Text(hotel.minimal_price.description)
            Text(hotel.price_for_it)
            Text(hotel.rating.description)
            Text(hotel.rating_name)
            ForEach(hotel.image_urls, id: \.self) {
                Text($0)
            }
            Text(hotel.about_the_hotel.description)
            ForEach(hotel.about_the_hotel.peculiarities, id: \.self) {
                Text($0)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(.red)
    }

    private var issue2: some View {
        VStack(alignment: .leading, spacing: .zero) {
            ForEach(room.rooms) { room in
                Text(room.id.description)
                Text(room.name)
                Text(room.price.description)
                Text(room.price_per)
                ForEach(room.peculiarities, id: \.self) {
                    Text($0)
                }
                ForEach(room.image_urls, id: \.self) { url in
                    Text(url)
                }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(.orange)
    }

    private var issue3: some View {
        VStack(alignment: .leading, spacing: .zero) {
            Text(booking.id.description)
            Text(booking.hotel_name)
            Text(booking.hotel_adress)
            Text(booking.horating.description)
            Text(booking.rating_name)
            Text(booking.departure)
            Text(booking.arrival_country)
            Text(booking.tour_date_start)
            Text(booking.tour_date_stop)
            ForEach(0..<1, id: \.self) { _ in // 5.9 will allow me to get rid of this `ForEach`.
                Text(booking.number_of_nights.description)
                Text(booking.room)
                Text(booking.nutrition)
                Text(booking.tour_price.description)
                Text(booking.fuel_charge.description)
                Text(booking.service_charge.description)
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(.yellow)
    }
}
