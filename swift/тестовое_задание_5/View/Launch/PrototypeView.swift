/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PrototypeView.swift | Initially Modified: 02:17 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PrototypeView.swift |      Last Modified: __:__ PM ___ __ Sep 2023
   /View/Launch/PrototypeView.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Sun 10 Sep 2023
     __:__ _M | `` | ()
     #
*/

import SwiftUI

internal struct PrototypeView: View {
    @State private var index: Int = 0
    @State private var key: String = "SharedCell1"

    private var views: [String: AnyView] {
        [
            "SharedCell1": AnyView(
                Cell1(hotel: hotel)
            ),
            "SharedCell2": AnyView(Cell2(hotel: hotel)),
            "AnyView": AnyView(
                Card {
                    Text("|")
                }
            ),
            "SectionPrice": AnyView(
                PriceSection(minimal_price: 0xFFFF, price_for_it: "fdsiofjdsklfj") {
                    "от \($0.formatted()) ₽"
                }
            ),
            "Info": AnyView( // 09:20 PM Fri 8 Sep 2023
                InfoSection(
                    name: true ? "Steigenberger Makadi" : "",
                    adress: true ? "Madinat Makadi, Safaga Road, Makadi Bay, Egypt" : nil,
                    literal3: true ? (value: 5, name: "Превосходно") : nil
                )
                .background(.green)
            ),
            "SharedCell3": AnyView( // Initially 4:34 PM Sat 9 Sep 2023
                Cell3(room: room.rooms[0])
                                  ),
            "SharedCell4": AnyView( // Initially 4:55 PM Sat 9 Sep
                Cell4(totalPrice: 0, items: [
                    ("Тур", 186_600),
                    ("Топливный сбор", 9300),
                    ("Сервисный сбор", 2136)
                ])
                                  ),
            "SharedMarkup": AnyView( // Initially: 08:45 PM Sat 9 Sep 2023
                Markup(title: "Информация о покупателе", description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту") {
                    Text("ye")
                } toolbar: {
                    Text("tool")
                }
                                   ),
            "SharedCell6": AnyView( // 9 17 PM Sat 9 Sep 2023
                Cell6()
                                  ),
            "SharedCell7": AnyView( // 10:59 PM Sat 9 Sep 2023
                Cell7 {
                    Text("AnyView")
                }
                                  )
        ]
    }
    
    private let collection: [AnyView] = [
        AnyView(HotelView(hotel: hotel)),
        AnyView(RoomView(hotel_name: "Плотная", room: room)),
        AnyView(BookingView(booking: booking)),
        AnyView(PaidOrderView())
    ]
    
    internal var body: some View {
        TabView(selection: $index) {
            ForEach(collection.enumerated().sorted { $0.offset < $1.offset }, id: \.offset) { pair in
                NavigationStack {
                    pair.element
                        .navigationBarTitleDisplayMode(.inline)
                        .background(.xf6f6f9)
                }
                .tabItem {
                    Label("", systemImage: "\(pair.offset).square")
                }
            }
            views[key]
                .background {
                    true ? Color.clear : Color.red
                }
                .toolbar {
                    ToolbarItem(placement: .bottomBar) {
                        picker
                    }
                }
                .tabItem {
                    Label(key, systemImage: "4.square")
                }
                .tag(collection.count)
        }
    }
    
    private var picker: some View { // Initially Modified: _04:19 PM Sun 10 Sep 2023
        Picker("View", selection: $key) {
            ForEach(views.keys.sorted(), id: \.self) { key in
                Label(key, systemImage: "command")
                    .labelStyle(.titleOnly)
            }
        }
        .pickerStyle(.menu)
    }
}
