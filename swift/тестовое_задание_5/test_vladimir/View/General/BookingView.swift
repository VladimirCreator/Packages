/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift | Initially Modified: 01:25 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/BookingView.swift
   Tue 5 Sep 2023
     __:__ PM | `` | (+)
    #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct BookingView: View { // Странно, но техническое задание не говорит, что этому экрану нужен идентификатор номера.
    @Environment(\.backgroundStyle) private var background // Initially Modified: 11:01 AM Wed 13 Sep 2023

    @StateObject private var bookingViewModel: BookingViewModel = .init() // Initially Modified: 04:41 PM Tue 12 Sep 2023

    private var info: [(label: String, info: String)] { // 08:21 PM Sat Sep 2023
        return [
            (label: "Вылет из", info: bookingViewModel.booking.departure),
            (label: "Страна, город", info: bookingViewModel.booking.arrival_country),
            (label: "Даты", info: "\(bookingViewModel.booking.tour_date_start) - \(bookingViewModel.booking.tour_date_stop)"),
            (label: "Кол-во ночей", info: "\(bookingViewModel.booking.number_of_nights)"),
            (label: "Отель", info: bookingViewModel.booking.hotel_adress),
            (label: "Номер", info: bookingViewModel.booking.room),
            (label: "Питание", info: bookingViewModel.booking.nutrition)
        ]
    }

    private var items: [(text: String, price: UInt)] { // 08:03 PM Sat 9 Sep 2023
        return [
            (text: "Тур", price: bookingViewModel.booking.tour_price),
            (text: "Топливный сбор", price: bookingViewModel.booking.fuel_charge),
            (text: "Сервисный сбор", price: bookingViewModel.booking.service_charge)
        ]
    }

    private var totalPrice: UInt {
        return items.reduce(UInt.zero) {
            $0 + $1.price
        }
    }

    internal var body: some View {
        ScrollView {
            VStack(spacing: 8.0) {
                Card {
                    InfoSection(name: bookingViewModel.booking.hotel_name, adress: bookingViewModel.booking.hotel_adress, literal3: (value: bookingViewModel.booking.horating, name: bookingViewModel.booking.rating_name))
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                Card { // Initially: 8:19 PM Sat 9 Sep 2023
                    Cell5(info: info)
                        .frame(maxWidth: .infinity)
                }
                Card {
                    Cell6(consumer: $bookingViewModel.consumer)
                }
                Card {
                    ForEach(0..<bookingViewModel.tourists.count, id: \.self) { index in
                        Cell7 {
                            TouristForm(tourist: $bookingViewModel.tourists[index])
                        }
                        .disclosureGroupStyle(NePridumalNazavanieDisclosureGroupStyle(title: "\(index+1) турист") {})
                    }
                }
                Card {
                    Cell7 {
                        EmptyView()
                    }
                    .disclosureGroupStyle(
                        NePridumalNazavanieDisclosureGroupStyle1 {
                            bookingViewModel.tourists.append(.init(firstName: "", lastName: "", birthDate: "", citizenship: "", abroadPassportNumber: "", abroadPassportVailidityDate: ""))
                        }
                    )
                }
                Card {
                    Cell4(totalPrice: totalPrice, items: items)
                }
            }
        }
        .background(background ?? .init(.clear))
        .navigationTitle("Бронирование")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                NavigationLink(value: RootView.PresentedView.paidOrder) {
                    Text("Оплатить \(totalPrice) ₽")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
        .onAppear {
            Task {
                try? await bookingViewModel.fetch(Booking.self, from: BOOKING_URL) {
                    bookingViewModel.booking = $0
                }
            }
        }
    }
}
