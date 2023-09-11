/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift | Initially Modified: 01:25 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/BookingView.swift
 
   Swift
     - class
 
   Swift Playgrounds
     - file
     - folder
 
   Tue 5 Sep 2023
     __:__ PM | `` | (+)
    #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct BookingView: View {
    @EnvironmentObject private var navigationViewModel: NavigationViewModel // 9 27 PM Mon 11 Sep 2023

    internal let booking: Booking // Initially Modified: 08:21 PM Mon 11 Sep 2023

    @State private var tourists: [(String)] = []

    private var info: [(label: String, info: String)] { // 08:21 PM Sat Sep 2023
        return [
            (label: "Вылет из", info: booking.departure),
            (label: "Страна, город", info: booking.arrival_country),
            (label: "Даты", info: "\(booking.tour_date_start) - \(booking.tour_date_stop)"),
            (label: "Кол-во ночей", info: "\(booking.number_of_nights)"),
            (label: "Отель", info: booking.hotel_adress),
            (label: "Номер", info: booking.room),
            (label: "Питание", info: booking.nutrition)
        ]
    }

    private var items: [(text: String, price: UInt)] { // 08:03 PM Sat 9 Sep 2023
        return [
            (text: "Тур", price: booking.tour_price),
            (text: "Топливный сбор", price: booking.fuel_charge),
            (text: "Сервисный сбор", price: booking.service_charge)
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
                    InfoSection(name: booking.hotel_name, adress: booking.hotel_adress, literal3: (value: booking.horating, name: booking.rating_name))
                        .scaledToFill()
                }
                Card { // Initially: 8:19 PM Sat 9 Sep 2023
                    Cell5(info: info)
                }
                Card {
                    Cell6()
                }
                Card {
                    ForEach(0..<tourists.count, id: \.self) {
                        Cell7 {
                            VStack(alignment: .leading, spacing: 8.0) {
                                ForEach(["Имя", "Фамилия", "Дата рождения", "Гражданство", "Номер загранпаспорта", "Срок действия загранпаспорта"], id: \.self) {
                                    NePridumalNazvanieTextField(title: $0, text: .constant(""))
                                }
                            }
                        }
                        .disclosureGroupStyle(NePridumalNazavanieDisclosureGroupStyle(title: "\($0) турист") {
                            print("D")
                        })
                    }
                }
                Card {
                    Cell7 {
                        EmptyView()
                    }
                    .disclosureGroupStyle(NePridumalNazavanieDisclosureGroupStyle1() {
                        tourists.append(("asd"))
                    })
                }
                Card {
                    Cell4(totalPrice: totalPrice, items: items)
                }
            }
        }
        .navigationTitle("Бронирование")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button(action: { navigationViewModel.path.append(RootView.PresentedView.paidOrder) }) {
                    Text("Оплатить \(totalPrice) ₽")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
    }
}
