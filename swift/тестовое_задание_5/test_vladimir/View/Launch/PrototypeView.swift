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
                Cell1(
                    hotel: .init(
                        id: 0,
                        name: "Image",
                        adress: "Image",
                        minimal_price: 0,
                        price_for_it: "Image",
                        rating: 0,
                        rating_name: "Image",
                        image_urls: [
                            "https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/CollectionTypes_intro_2x.png", "https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/closureReferenceCycle02@2x.png", "https://github.com/apple/swift-book/blob/main/TSPL.docc/Assets/bitshiftSignedFour@2x.png"
                        ],
                        about_the_hotel: .init(
                            description: "Image",
                            peculiarities: [
                                "Image",
                                "Image"
                            ]
                        )
                    )
                )
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
                PriceSection(minimal_price: 0xFFFF, price_for_it: "fdsiofjdsklfj") {
                    "от \($0.formatted()) ₽"
                }
            ),
            "Info": AnyView(
                InfoSection(
                    name: true ? "Steigenberger Makadi" : "",
                    adress: true ? "Madinat Makadi, Safaga Road, Makadi Bay, Egypt" : nil,
                    literal3: true ? (value: 5, name: "Превосходно") : nil
                )
            ),
            "SharedCell3": AnyView(
                Cell3(room: room.rooms[0])
            ),
            "SharedCell4": AnyView(
                Cell4(totalPrice: 0, items: [
                    ("Тур", 186_600),
                    ("Топливный сбор", 9300),
                    ("Сервисный сбор", 2136)
                ])
            ),
            "SharedMarkup": AnyView(
                Markup(title: "Информация о покупателе", description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту") {
                    Text("ye")
                } toolbar: {
                    Text("tool")
                }
            ),
            "SharedCell6": AnyView(
                Cell6(consumer: .constant(.init(phone: "", mail: "")))
            ),
            "SharedCell7": AnyView(
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

    private var picker: some View {
        Picker("View", selection: $key) {
            ForEach(views.keys.sorted(), id: \.self) { key in
                Label(key, systemImage: "command")
                    .labelStyle(.titleOnly)
            }
        }
        .pickerStyle(.menu)
    }
}
