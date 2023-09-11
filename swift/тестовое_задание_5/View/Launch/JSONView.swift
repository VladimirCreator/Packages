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
internal struct JSONView: View {
    internal let hotel: Hotel // Initially 07:03 PM Mon 11 Sep 2023
    internal let room: Rooms // 07:03 PM Mon 11 Sep 2023
    internal let booking: Booking // 07:03 PM Mon 11 Sep 2023

    @State private var pageIndex: Int = 0 // 12:26 AM Mon 11 Sep 2023

    internal var body: some View {
        NavigationStack {
            TabView(selection: $pageIndex) {
                issue1.tag(0)
                issue2.tag(1)
                issue3.tag(2)
            }
            .tabViewStyle(.page(indexDisplayMode: .always))
        }
    }

    private var issue1: some View { // 12:31 AM Mon 11 Sep 2023
        VStack {
            Text(hotel.id.description)
            Text(hotel.name)
            Text(hotel.adress)
            Text(hotel.minimal_price.description)
            Text(hotel.price_for_it)
            Text(hotel.rating.description)
            Text(hotel.rating_name)
            VStack {
                ForEach(hotel.image_urls, id: \.self) {
                    Text($0)
                }
            }
            Text(hotel.about_the_hotel.description)
            VStack {
                ForEach(hotel.about_the_hotel.peculiarities, id: \.self) {
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
                    Text(room.name)
                    Text(room.price.description)
                    Text(room.price_per)
                    VStack {
                        ForEach(room.peculiarities, id: \.self) {
                            Text($0)
                        }
                    }
                    VStack {
                        ForEach(room.image_urls, id: \.self) { url in
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
                Text(booking.hotel_name)
                Text(booking.hotel_adress)
                Text(booking.horating.description)
                Text(booking.rating_name)
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
