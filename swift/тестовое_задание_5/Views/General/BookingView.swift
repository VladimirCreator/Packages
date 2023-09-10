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
    @State private var tourists: [(String)] = []

    private let title: String = "Steigenberger Makadi"
    private let subtitle: String = "Madinat Makadi, Safaga Road, Makadi Bay, Египет"
    private let rating: (value: Int, name: String) = (5, "Превосходно")
    private let info: [(label: String, info: String)] = [ // 08:21 PM Sat Sep 2023
        (label: "Вылет из", info: "Санкт-Петербург"),
        (label: "Страна, город", info: "Египет, Хургада"),
        (label: "Даты", info: "19.09.2023 - 27.09.2023"),
        (label: "Кол-во ночей", info: "7"),
        (label: "Отель", info: "St Makadi"),
        (label: "Номер", info: "Стандартный с видом на бассйен или сад"),
        (label: "Питание", info: "Все включено")
    ]
    private let items: [(text: String, price: Int)] = [ // 08:03 PM Sat 9 Sep 2023
        (text: "Тур", price: 186_600),
        (text: "Топливный сбор", price: 9300),
        (text: "Сервисный сбор", price: 2136)
    ]

    private var totalPrice: Int {
        return items.reduce(Int.zero) {
            $0 + $1.price
        }
    }

    internal var body: some View {
        ScrollView {
            VStack(spacing: 8.0) {
                Card {
                    InfoSection(verbatim1: title, verbatim2: subtitle, literal3: rating)
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
                Button(action: {}) {
                    Text("Оплатить \(totalPrice) ₽")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
    }
}
