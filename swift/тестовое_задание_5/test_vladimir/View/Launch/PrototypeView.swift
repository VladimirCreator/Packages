/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PrototypeView.swift | Initially Modified: 02:17 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PrototypeView.swift |      Last Modified: __:__ PM ___ __ Sep 2023
   /View/Launch/PrototypeView.swift
   Sun 10 Sep 2023
     __:__ _M | `` | ()
     #
*/

import SwiftUI

internal struct PrototypeView: View {
    @State private var index: Int = 2
    @State private var key: String = "AnyView"

    private var views: [String: AnyView] {
        [
            "SharedCell1": AnyView(
                Cell1(hotel: .init(id: 0, name: "Image", adress: "Image", minimalPrice: 0, priceForIt: "Image", rating: 0, ratingName: "Image", imageUrls: ["https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/CollectionTypes_intro_2x.png", "https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/closureReferenceCycle02@2x.png", "https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/bitshiftSignedFour@2x.png"
                                                                                                                                                        ], aboutTheHotel: .init(description: "Image", peculiarities: ["Image", "Image"])))
            ),
            "SharedCell2": AnyView(Cell2(hotel: hotel)),
            "AnyView": AnyView(
                ScrollView {
                    VStack {
                        Card {
                            Cell6(consumer: .constant(.init(phone: "fd1", mail: "fas")))
                        }
                    }
                }
            ),
            "SectionPrice": AnyView(
                PriceSection(minimalPrice: 0xFFFF, priceForIt: "fdsiofjdsklfj") {
                    "от \($0.formatted()) ₽"
                }
            ),
            "Info": AnyView( // 09:20 PM Fri 8 Sep 2023
                InfoSection(
                    name: true ? "Steigenberger Makadi" : "",
                    adress: true ? "Madinat Makadi, Safaga Road, Makadi Bay, Egypt" : nil,
                    literal3: true ? (value: 5, name: "Превосходно") : nil
                )
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
                Cell6(consumer: .constant(.init(phone: "", mail: "")))
                                  ),
            "SharedCell7": AnyView( // 10:59 PM Sat 9 Sep 2023
                Cell7 {
                    Text("AnyView")
                }
                                  )
        ]
    }

    internal var body: some View {
        NavigationStack {
            TabView(selection: $key) {
                ForEach(views.keys.sorted(), id: \.self) {
                    views[$0]
                        .background(.orange)
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        .background(.red)
                        .toolbar {
                            ToolbarItem(placement: .automatic) {
                                picker
                            }
                        }
                        .tabItem {
                            Text(key)
                        }
                        .tag($0)
                }
            }
            .tabViewStyle(.page)
            .navigationTitle(key)
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
