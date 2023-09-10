/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift | Initially Modified: 01:08 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /Application.swift

      Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal enum Key {
    case hotel
    case rooms
    case booking
}

internal let stdin: [Key: String] = [
    .hotel:   """
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
    .rooms:   """
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
    .booking: """
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
]

@main
fileprivate struct Application: App {
    fileprivate var body: some Scene {
        WindowGroup {
            NavigationStack {
                Playground()
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Playground.swift | Initially Modified: 09:45 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Playground.swift |      Last Modified: __:__ PM Fri 8 Sep 2023
   /_.swift

      Fri 8 Sep 2023
     __:__ PM | `` | (+)
     #
   Sat 9 Sep 2023
     08:35 PM | Placeholder -> Playground | (~)
     #struct
*/

import SwiftUI

internal struct Playground: View {
    @State private var text: String = ""

    @State internal var key: String = "SharedCell7"

    // PageIndicatorView.swift
    @State private var imageIndex: Int = 0 // 1:4_ PM Sat 9 sep 2023

    private var views: [String: AnyView] {
        [
            "ViewHotel": AnyView(HotelView()),
            "ViewRoom": AnyView(RoomView()),
            "ViewBooking": AnyView(BookingView()),
            "ViewPaidOrder": AnyView(PaidOrderView()),
            "SharedCell1": AnyView(Cell1()),
            "SharedCell2": AnyView(Cell2()),
            "AnyView": AnyView(
                /*
                VStack {
                    ForEach(0..<3, id: \.self) { _ in
                        Card {
                            Text("I am from America")
                        }
                    }
                }
                */
                // 2:29 PM Sat 9 Sep 2023
                /*VStack {
                    ForEach(0..<5, id: \.self) {
                        Text("\(formula (bad))")
                    }
                }*/
                Text("AnyView")
            ),
            "SectionPrice": AnyView(
                PriceSection(price: 0xFFFF, description: "fdsiofjdsklfj") {
                    "от \($0.formatted()) ₽"
                }
            ),
            "SectionInfo": AnyView( // 09:20 PM Fri 8 Sep 2023
                VStack(spacing: 0.0) {
                    InfoSection(title: "Ntcnjd", subtitle: nil, rating: nil)
                    Divider()
                    InfoSection(title: "Тестовый заголовок", subtitle: "dslkcxjvklj", rating: nil)
                    Divider()
                    InfoSection(title: "fdsfds", subtitle: "fdsfsd", rating: (value: 5, name: "Превосходно"))
                }
            ),
            "SharedTextField": AnyView( // 11:25 PM Fri 8 Sep 2023
                NePridumalNazvanieTextField(title: "Номер телефона", text: $text)
            ),/*
            "ViewPage": AnyView( // 11:58 PM Fri 8 Sep 2023
                PageView(considerToChangeDistance: 0.1, urls: [
                    "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1250x703.jpg",
                    "https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1250x703.jpg"
                ])
            ),
            "ViewPageEntry": AnyView( // Initially: 12:58 PM Sat 9 Sep 2023
                PageEntryView(
                    url: URL(string: "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg")!
                )
            ),
            "ViewPageIndicator": AnyView( // 1:33 Pm Sat 9
                PageIndicatorView(count: 5, selection: $imageIndex)
                    .toolbar {
                        ToolbarItemGroup(placement: .bottomBar) {
                            Button("+=") {
                                imageIndex += 1
                            }
                            Button("-=") {
                                imageIndex -= 1
                            }
                        }
                    }
            ),*/
            "SharedCell3": AnyView( // Initially 4:34 PM Sat 9 Sep 2023
                Cell3()
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

    @State private var tabIndex: Int = 0

    internal var body: some View {
        discover
    }

    private var discover: some View {
        ZStack {
            Color(.sRGB, red: 0.96, green: 0.96, blue: 0.98)//.background(.init("neutral-100", bundle: nil)) // <- #F6F6F9
            views[key]
        }
        .preferredColorScheme(.light)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Picker("View", selection: $key) {
                    ForEach(views.keys.sorted().reduce([String]()) {
                        guard let letter: String = $1.first?.lowercased() else { fatalError() }

                        guard $0.contains(letter) else {
                            var letters = $0; letters.append(letter)
                            return letters
                        }

                        return $0
                    }, id: \.self) { letters in
                        Section {
                            ForEach(views.keys.sorted(), id: \.self) { key in
                                if letters.contains(key.first!.lowercased()) {
                                    Text(key)
                                        .tag(key)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift | Initially Modified: 01:23 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /Views/RoomView.swift

      Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct RoomView: View {
    internal var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack {
                ForEach(0..<2, id: \.self) { _ in
                    Cell3()
                }
            }
        }
        .navigationTitle("Title")
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PaidOrderView.swift | Initially Modified: 05:34 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PaidOrderView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /Application.swift

      Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct PaidOrderView: View {
    internal var body: some View {
        ZStack {
            Color.white
            VStack(alignment: .center, spacing: 0.0) { // 5:42 PM Tue 5 Sep 2023
                graphic
                title
                description
            }
        }
        .navigationTitle("Заказ оплачен")
        .toolbar(.visible, for: .bottomBar)
        .toolbarBackground(.red, for: .bottomBar)
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button(action: { print(true) }) {
                    Text("Супер!")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
        .environment(\.multilineTextAlignment, .center)
    }

    private var graphic: some View { // 06:49 PM Tue 5 Sep 2023
        Circle()
            .fill(Color(.sRGB, red: 0.96, green: 0.96, blue: 0.98))
            //.fill(.init("neutral-100", bundle: nil)) // <- #F6F6F9
            .frame(width: 94, height: 94)
            .overlay(
                Text("🎉")
                    .font(
                        .system(size: 44.0)
                    )
            )
            .padding(.bottom, 32.0)
    }

    private var title: some View { // 06:3_ PM Tue 5 Sep 2023
        Text("Ваш заказ принят в работу")
            .font(
                .system(size: 22.0, weight: .medium)
            )
            .padding(.bottom, 20.0)
    }

    private var description: some View { // 06:38 PM Tue 5 Sep 2023
        Text("Подтверждение заказа №\(UInt.random(in: UInt.zero...UInt.max)) может занять некоторое время (от 1 часа до суток).\nКак только мы получим ответ от туроператора, вам на почту придёт уведомление.")
            .font(
                .system(size: 16.0)
            )
            .foregroundColor(Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59))
            .foregroundColor(Color("gray-400", bundle: nil)) // <- #828796
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift | Initially Modified: 01:08 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /Views/HotelView.swift

      Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct HotelView: View {
    internal var body: some View {
        ScrollView {
            Cell1()
                .toolbarBackground(.visible)
                .toolbarBackground(.white, for: .navigationBar)
                .toolbarBackground(.red, for: .bottomBar)

            Cell2()
        }
        .navigationTitle("Отель")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button("К выбору номера") {
                    print(true)
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift | Initially Modified: 01:25 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /Views/BookingView.swift

      Tue 5 Sep 2023
     __:__ PM | `` | (+)
    #
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
            VStack {
                Card {
                    InfoSection(title: title, subtitle: subtitle, rating: rating)
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
                        .disclosureGroupStyle(NePridumalNazavanieDisclosureGroupStyle(title: "\($0) турист"))
                    }
                }
                Card {
                    Cell7 {
                        EmptyView()
                    }
                    .disclosureGroupStyle(NePridumalNazavanieDisclosureGroupStyle1())
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

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Card.swift | Initially Modified: 10:22 AM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Card.swift |      Last Modified: 10:__ AM Fri 8 Sep 2023
   /Views/Shared/Card.swift

      Fri 8 Sep 2023
     10:52 AM | Background.swift -> Card.swift | (+)
     #file
*/

import SwiftUI

internal struct Card<Content>: View where Content : View {
    internal let content: () -> Content

    internal var body: some View {
        content()
            .padding(.all, 16.0)
            .background(.white)
            .cornerRadius(12.0)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift | Initially Modified: 02:36 PM Thu 7 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift |      Last Modified: __:__ PM Thu 7 Sep 2023
   /Views/Shared/Cell1.swift

      Thu 7 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

struct A: LabelStyle { // 4:09
    internal func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 2.0) {
            configuration.icon
            configuration.title
        }
        .font(.system(size: 16.0))
        .fontWeight(.medium)
        .padding(.horizontal, 10.0)
        .padding(.vertical, 5.0)
        .foregroundColor(Color(.sRGB, red: 1, green: 0.66, blue: 0))
        .background(Color(.sRGB, red: 1, green: 0.66, blue: 0, opacity: 0.2))
        .cornerRadius(5.0)
    }
}

internal struct Cell1: View {
    private let name: String = "Лучший пятизвездочный отель в Хургаде, Египет"
    private let rating: UInt = 5
    private let rating_name: String = "Превосходно"
    private let address: String = "Madinat Makadi, Safaga Road, Makadi Bay, Египет"

    internal var body: some View {
        Card {
            VStack(alignment: .leading, spacing: 16.0) {
                PageView(considerToChangeDistance: 0.1, urls: [
                    "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1250x703.jpg",
                    "https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1250x703.jpg"
                ])
                .frame(height: 257)
                InfoSection(title: "Steigenberger Makadi", subtitle: "Madinat Makadi, Safaga Road, Makadi Bay, Египет", rating: (5, "Превосходно"))
                PriceSection(price: 134_673, description: "за тур с перелётом") {
                    return "\($0.formatted()) ₽"
                }
            }
        }
    }

    private var image: some View {
        RoundedRectangle(cornerRadius: 15.0, style: .circular)
            .aspectRatio(343/257, contentMode: .fill)
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell2.swift | Initially Modified: 06:12 PM Thu 7 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell2.swift |      Last Modified: __:__ PM Thu 7 Sep 2023
 /Views/Shared/Cell2.swift

  Thu 7 Sep 2023
 __:__ PM | `` | (+)
 #
 */

import SwiftUI

struct B: LabelStyle { // 6:14
    internal func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 2.0) {
            configuration.icon
            configuration.title
        }
        .font(.system(size: 16.0))
        .fontWeight(.medium)
        .padding(.horizontal, 10.0)
        .padding(.vertical, 5.0)
        .foregroundColor(Color(.sRGB, red: 1, green: 0.66, blue: 0))
        .background(Color(.sRGB, red: 1, green: 0.66, blue: 0, opacity: 0.2))
        .cornerRadius(5.0)
        .padding(.bottom, 8.0)
    }
}

internal struct Cell2: View {
    internal var body: some View { // 6:16 PM Thu 7 Sep 2023
        Card {
            VStack(alignment: .leading, spacing: 16.0) {
                about
                nePridumalNazvanie
                description
                oida
            }
        }

    }

    private var about: some View { // 6:17 PM Thu 7 Sep 2023
        Text("Об отеле")
            .textStyle(NePridumalNazvanieTextStyle1())
    }

    private var nePridumalNazvanie: some View {
        NePridumalNazvanieLayout {
            ForEach(["3-я линия", "Платный Wi-Fi в фойе", "30 км до аэропорта", "1 км до пляжа"], id: \.self) { label in
                Label(label, systemImage: "")
                    .labelStyle(A())
            }
        }
    }

    private var description: some View { // 6:19 PM Thu 7 Sep 2023
        Text("Отель VIP-класса с собственными гольф полями. Высокий уровень сервиса. Рекомендуем для респектабельного отдыха. Отель принимает гостей от 18 лет!")
            .font(.system(size: 16.0))
            .padding(.top, -4.0)
    }

    private var oida: some View { // 06:43 PM Fri 8 Sep 2023
        VStack(spacing: 20.0) {
            HStack(spacing: 12.0) {
                Image(systemName: "poweroutlet.type.k.square")
                    .resizable()
                    .frame(width: 24.0, height: 24.0)
                VStack(alignment: .leading) {
                    Text("Удобства")
                        .font(.system(size: 16.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.17, green: 0.19, blue: 0.21)) // <- #2C3035
                    Text("Самое необходимое")
                        .font(.system(size: 14.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59)) // 828796
                }
                Spacer()
                Image(systemName: "chevron.right")
            }
            HStack(spacing: 12.0) {
                Image(systemName: "checkmark.square")
                    .resizable()
                    .frame(width: 24.0, height: 24.0)
                VStack(alignment: .leading) {
                    Text("Что включено")
                        .font(.system(size: 16.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.17, green: 0.19, blue: 0.21)) // <- #2C3035
                    Text("Самое необходимое")
                        .font(.system(size: 14.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59)) // 828796
                }
                Spacer()
                Image(systemName: "chevron.right")
            }
            HStack(spacing: 12.0) {
                Image(systemName: "xmark.square")
                    .resizable()
                    .frame(width: 24.0, height: 24.0)
                VStack(alignment: .leading) {
                    Text("Что включено")
                        .font(.system(size: 16.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.17, green: 0.19, blue: 0.21)) // <- #2C3035
                    Text("Самое необходимое")
                        .font(.system(size: 14.0, weight: .medium))
                        .foregroundColor(Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59)) // 828796
                }
                Spacer()
                Image(systemName: "chevron.right")
            }
        }
        .padding(.all, 15.0)
        .background {
            Color(.sRGB, red: 0.98, green: 0.98, blue: 0.99)
        }
        .cornerRadius(15.0)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell3.swift | Initially Modified: 04:31 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell3.swift |      Last Modified: 04:48 PM Sat 9 Sep 2023
   /Views/Shared/Cell3.swift

      Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct Cell3: View {
    internal var body: some View {
        Card {
            VStack(alignment: .leading, spacing: 8.0) {
                PageView(considerToChangeDistance: 0.1, urls: [
                    "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1250x703.jpg",
                    "https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1250x703.jpg"
                ])
                .frame(height: 257)
                InfoSection(title: "Стандартный с видом на бассйен или сад", subtitle: nil, rating: nil)

                NePridumalNazvanieLayout {
                    ForEach(["Всё включено", "Кондиционер"], id: \.self) {
                        Label($0, systemImage: "")
                            .labelStyle(B())
                    }
                }
                .padding(.bottom, 8.0)

                PriceSection(price: 186_600, description: "За 7 ночей с перелётом") {
                    "\($0) ₽"
                }
                .padding(.bottom, 8.0)

                Button(action: {}) {
                    Text("Выбрать номер")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell4.swift | Initially Modified: 04:53 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell4.swift |      Last Modified: 08:19 PM Sat 9 Sep 2023
   /Views/Shared/Cell4.swift

    Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

/*internal struct Cell4: View {
    internal let items: [(text: String, price: Int)]
    private var totalPrice: Int {
        return items.reduce(Int.zero) { $0 + $1.price }
    }

    internal var body: some View {
        VStack(spacing: 16.0) {
            ForEach(items, id: \.text) { entry in
                Cell4Row {
                    Text(entry.text)
                        .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59))) // <- #828796
                } trailingContent: {
                    Text("\(entry.price.formatted()) ₽")
                        .textStyle(NePridumalNazvanieTextStyle(color: .black))
                }
            }
            Cell4Row {
                Text("К оплате")
                    .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59))) // <- #828796
            } trailingContent: {
                Text("\(totalPrice.formatted()) ₽")
                    .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.05, green: 0.45, blue: 1.0))) // <- #0D72FF
                    .fontWeight(.semibold)
            }
        }
    }
}

private struct Cell4Row<LeadingContent, TrailingContent>: View where LeadingContent : View, TrailingContent: View { // 5:23 PM Sat 9 Sep 2023
    fileprivate let leadingContent: () -> LeadingContent
    fileprivate let trailingContent: () -> TrailingContent

    internal var body: some View {
        HStack {
            leadingContent()
            Spacer()
            trailingContent()
        }
    }
}
*/

internal struct Cell4: View {
    internal let totalPrice: Int // 8:13 PM Sat 9 Sep 2023
    internal let items: [(text: String, price: Int)]

    internal var body: some View {
        Grid(alignment: .leading, verticalSpacing: 16.0) {
            ForEach(items, id: \.text) { item in
                GridRow {
                    Text(item.text)
                        .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59))) // <- #828796
                    Text("\(item.price.formatted()) ₽")
                        .gridColumnAlignment(.trailing)
                }
            }
            GridRow {
                Text("К оплате")
                    .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59))) // <- #828796
                Text("\(totalPrice.formatted()) ₽")
                    .fontWeight(.semibold)
                    .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.05, green: 0.45, blue: 1.0))) // <- #0D72FF
                    .gridColumnAlignment(.trailing)
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell5.swift | Initially Modified: 08:23 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell5.swift |      Last Modified: 08:31 PM Sat 9 Sep 2023
   /Views/Shared/Cell5.swift

      Sat 9 Sep 2023
   __:__ PM | `` | (+)
   #
*/

import SwiftUI

internal struct Cell5: View {
    internal let info: [(label: String, info: String)] // 8:27 Pm Sat 9 Sep 2023

    internal var body: some View {
        Grid(alignment: .leading, verticalSpacing: 16.0) {
            ForEach(info, id: \.label) { item in
                GridRow {
                    Text(item.label)
                        .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59)))
                    Text(item.info)
                        .textStyle(NePridumalNazvanieTextStyle(color: .black))
                }
            }
        }
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift | Initially Modified: 09:07 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift |      Last Modified: __:__ PM Sat 9 Sep 2023
 /Views/Shared/Cell6.swift

  Sat 9 Sep 2023
 __:__ PM | Cell6 -> Markup | (+)
 #
*/

import SwiftUI

internal struct Cell6: View {
    @State private var phoneNumber: String = ""
    @State private var email: String = ""

    internal var body: some View {
        Markup(
            title: "Информация о покупателе",
            description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту"
        ) {
            VStack(alignment: .leading, spacing: 8.0) {
                NePridumalNazvanieTextField(title: "Номер телефона", text: $phoneNumber)
                NePridumalNazvanieTextField(title: "Почта", text: $email)
            }
        } toolbar: {
            EmptyView()
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell7.swift | Initially Modified: 10:59 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell7.swift |      Last Modified: : PM Sat 9 Sep 2023
   /Views/Shared/Cell7.swift

  Sat 9 Sep 2023
 __:__ PM | `` | ()
 #
 */

import SwiftUI

internal struct Cell7<Content>: View where Content : View {
    @State private var isExpanded: Bool = false // 11:05 PM Sat 9 Sep 2023

    internal let content: () -> Content

    internal var body: some View {
        DisclosureGroup("", isExpanded: .constant(true)) {
            content()
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift | Initially Modified: 09:25 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift |      Last Modified: 10:49 PM Sat 9 Sep 2023
 /Views/Shared/NePridumalNazvanieTextField.swift

  Sat 9 Sep 2023
 __:__ PM | `` | ()
 #
*/

import SwiftUI

internal struct NePridumalNazvanieTextField: View {
    internal let title: String
    @Binding internal var text: String

    internal var body: some View {
        VStack(alignment: .leading, spacing: 0.0) {
            if !text.isEmpty {
                prompt
                    .font(
                        .system(size: 12.0)
                    )
            }
            TextField(
                title,
                text: $text,
                prompt: prompt.font(
                    .system(size: 17.0)
                )
            )
        }
        .padding(.horizontal, 16.0)
        .padding(.vertical, text.isEmpty ? 16.0 : 10.0)
        .background {
            RoundedRectangle(cornerRadius: 10.0, style: .circular)
                .fill(Color(.sRGB, red: 0.96, green: 0.96, blue: 0.98)) // <- #F6F6F9
        }
    }

    private var prompt: Text { // 10:33 PM Sat 9 Sep 2023
        Text(title)
            .foregroundColor(Color(.sRGB, red: 0.66, green: 0.67, blue: 0.72)) // <- #A9ABB7
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift | Initially Modified: 08:44 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift |      Last Modified: 09:16 PM Sat 9 Sep 2023
 /Views/Shared/Cell6.swift

  Sat 9 Sep 2023
 08:50 PM | Cell6 -> Markup | (+)
 #
*/

import SwiftUI

internal struct Markup<Content, Toolbar>: View where Content : View, Toolbar : View {
    internal let title: String
    internal let description: String? // 08:5_ PM Sat 9 Sep 2023
    internal let content: () -> Content // 09:02 PM Sat 9 Sep 2023
    internal let toolbar: () -> Toolbar // 09:03 PM Sat 9 Sep 2023

    internal var body: some View {
        VStack(alignment: .leading, spacing: 20.0) {
            HStack {
                Text(title)
                    .textStyle(NePridumalNazvanieTextStyle1())
                Spacer()
                toolbar()
            }

            content()

            if let description {
                Text(description)
                    .textStyle(NePridumalNazvanieTextStyle2())
                    .padding(.top, -12.0)
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Text+Extension.swift | Initially Modified: 05:11 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Text+Extension.swift |      Last Modified: 05:14 PM Sat 9 Sep 2023
   /Views/Shared/Styles/Text+Extension.swift

    Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal extension Text {
    internal func textStyle<Style: ViewModifier>(_ style: Style) -> some View {
        ModifiedContent(content: self, modifier: style)
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | DisclosureGroup+Extension.swift | Initially Modified: 12:05 PM Sun 10 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | DisclosureGroup+Extension.swift |      Last Modified: 12:18 PM Sun 10 Sep 2023
 /Views/Shared/Styles/DisclosureGroup+Extension.swift

  Sun 10 Sep 2023
 : PM | `` | ()
 #
*/

import SwiftUI

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ButtonStyle+Extension.swift | Initially Modified: 01:59 PM Thu 7 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ButtonStyle+Extension.swift |      Last Modified: 01:59 PM Thu 7 Sep 2023
   /Views/Shared/Styles/ButtonStyle+Extension.swift

      Thu 7 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal extension ButtonStyle where Self == NePridumalNazvanieButtonStyle {
    internal static var nePridumalNazvanie: NePridumalNazvanieButtonStyle {
        get {
            return NePridumalNazvanieButtonStyle()
        }
    }

    internal static var disclose: NePridumalNazvanieButtonStyle1 { // Initially: 11:41 AM Sun 10 Sep 2023
        get {
            let color: Color = .init(.sRGB, red: 0.05, green: 0.45, blue: 1) // <- #0D72FF

            return NePridumalNazvanieButtonStyle1(
                foregroundColor: color,
                backgroundColor: color.opacity(0.1)
            )
        }
    }

    internal static var append: NePridumalNazvanieButtonStyle1 { // Initially: 11:45 AM Sun 10 Sep 2023
        get {
            let color: Color = .init(.sRGB, red: 0.05, green: 0.45, blue: 1) // <- #0D72FF

            return NePridumalNazvanieButtonStyle1(
                foregroundColor: .white,
                backgroundColor: color
            )
        }
    }
}


/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextStyle2.swift | Initially Modified: 08:56 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextStyle2.swift |      Last Modified: 08:58 PM Sat 9 Sep 2023
 /Views/Shared/Cell6.swift

  Sat 9 Sep 2023
 __:__ PM | Cell6 -> Markup | (+)
 #
*/

import SwiftUI

internal struct NePridumalNazvanieTextStyle2: ViewModifier {
    internal func body(content: Content) -> some View {
        content
            .font(
                .system(size: 14.0)
            )
            .foregroundColor(
                Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59) // <- #828796
            )
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle1.swift | Initially Modified: 05:17 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle1.swift |      Last Modified: 08:49 PM Sat 9 Sep 2023
 /Views/Shared/Styles/Text/NePridumalNazvaniteTextStyle1.swift

  Sat 9 Sep 2023
 __:__ PM | `` | (+)
 #
 */

import SwiftUI

internal struct NePridumalNazvanieTextStyle1: ViewModifier {
    internal func body(content: Content) -> some View {
        content
            .font(.system(size: 22.0))
            .fontWeight(.medium)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle.swift | Initially Modified: 05:04 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle.swift |      Last Modified: 05:11 PM Sat 9 Sep 2023
   /Views/Shared/Styles/Text/NePridumalNazvaniteTextStyle.swift

      Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct NePridumalNazvanieTextStyle: ViewModifier {
    internal let color: Color

    internal func body(content: Content) -> some View {
        content
            .font(
                .system(size: 16.0)
            )
            .foregroundColor(color)
    }
}

// Initially 12:32 Sep 10 last

import SwiftUI

internal struct NePridumalNazavanieDisclosureGroupStyle1: DisclosureGroupStyle {
    internal func makeBody(configuration: Configuration) -> some View {
        Markup(title: "Добавить туриста", description: nil) {
            configuration.content
                .frame(height: configuration.isExpanded ? nil : 0.0)
                .clipped()
        } toolbar: {
            Button {
            } label: {
                Label {
                    EmptyView()
                } icon: {
                    Image(systemName: "plus")
                }
            }
            .buttonStyle(.append)
        }
    }
}

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieDisclosureGroupStyle.swift | Initially Modified: 11:47 AM Sun 10 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieDisclosureGroupStyle.swift |      Last Modified: 11:49 AM Sun 10 Sep 2023
 /Views/Shared/Styles/NePridumalNazvanieDisclosureGroupStyle.swift

  Sun 10 Sep 2023
 : PM | `` | ()
 #
*/

import SwiftUI

internal struct NePridumalNazavanieDisclosureGroupStyle: DisclosureGroupStyle { // Initially: 11:17 PM Sat 9 Sep 2023
    internal let title: String  // 11:21 PM Sat 9 Sep 2023

    internal func makeBody(configuration: Configuration) -> some View {
        Markup(title: title, description: nil) {
            configuration.content
                .frame(height: configuration.isExpanded ? nil : 0.0)
                .clipped()
        } toolbar: {
            Button {
                withAnimation(.easeInOut(duration: 0.250)) {
                    configuration.isExpanded.toggle()
                }
            } label: {
                Label {
                    EmptyView()
                } icon: {
                    Image(systemName: "chevron.up")
                        .rotationEffect(configuration.isExpanded ? .zero : .degrees(180.0), anchor: .center)
                }
            }
            .buttonStyle(.disclose)
        }
        .padding(.bottom, configuration.isExpanded ? 0.0 : -20.0)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle1.swift | Initially Modified: __:__ AM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle1.swift |      Last Modified: 11:40 AM Sun 10 Sep 2023
   /Views/Shared/Styles/NePridumalNazvanieStyle1.swift

      Sun 10 Sep 2023
     : PM | `` | ()
     #
*/

import SwiftUI

internal struct NePridumalNazvanieButtonStyle1: ButtonStyle {
    internal let foregroundColor: Color
    internal let backgroundColor: Color // 11:40 AM Sun 10 Sep 2023

    internal func makeBody(configuration: Configuration) -> some View {
        return configuration.label
        // ...
            .frame(width: 32.0, height: 32.0)
        // ...
            .foregroundColor(foregroundColor)
            .background {
                RoundedRectangle(cornerRadius: 6.0, style: .circular)
                    .fill(backgroundColor)
            }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift | Initially Modified: 08:10 PM Tue 5 Sep 2023
   ->               | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift |           Modified: 12:12 PM Fri 8 Sep 2023 // форматирование
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift |      Last Modified: 02:00 PM Thu 7 Sep 2023
   /Views/Shared/Styles/NePridumalNazvanieStyle.swift

      Tue 5 Sep 2023
     09:16 PM | NePridumalNazvanieStyle.swift -> NePridumalNazvanieButtonStyle.swift | (~)
     #
*/

import SwiftUI

internal struct NePridumalNazvanieButtonStyle: ButtonStyle {
    internal func makeBody(configuration: Configuration) -> some View {
        return configuration.label
            // ...
            .font(
                .system(size: 16.0, weight: .medium)
            )
            // ...
            .frame(maxWidth: .infinity)
            .padding(.vertical, 15.0)
            // ...
            .foregroundColor(.white)
            .background {
                Color(.sRGB, red: 0.051, green: 0.447, blue: 1.0)
                Color("sky-500", bundle: nil) // <- #0D72FF
            }
            // ...
            .cornerRadius(15.0)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PriceSection.swift | Initially Modified: 09:01 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PriceSection.swift |      Last Modified: 09:16 PM Fri 8 Sep 2023
   /Views/Shared/Sections/PriceSection.swift

      Fri 8 Sep 2023
     09:36 PM | /Views/Shared/ -> /Views/Shared/Sections/ | (+)
     #file
*/

import SwiftUI

internal struct PriceSection: View {
    internal let price: Int
    internal let description: String
    internal let priceCallback: (Int) -> String // 09:12 PM Fri 8 Sep 2023

    internal var body: some View {
        HStack(alignment: .bottom, spacing: 8.0) {
            Text(priceCallback(price)) // 2:41 PM Thu 7 Sep 2023
                .font(.system(size: 30.0))
                .fontWeight(.semibold)

            Text(description) // 2:50 PM Thu 7 Sep 2023
                .font(.system(size: 16.0))
                .foregroundColor(.init(.sRGB, red: 0.51, green: 0.53, blue: 0.59))//.foregroundColor(Color("", bundle: nil)) // <- #828796
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfiSection.swift | Initially Modified: 09:16 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfoSection.swift |      Last Modified: 11:40 PM Fri 8 Sep 2023
   /Views/Shared/Sections/PriceSection.swift

      Fri 8 Sep 2023
     11:22 PM | /Views/Shared/ -> /Views/Shared/Sections | (~)
     #file
*/

import SwiftUI

internal struct InfoSection: View {
    internal let title: String
    internal let subtitle: String?
    internal let rating: (value: Int, name: String)?

    internal var body: some View {
        VStack(alignment: .leading, spacing: 8.0) {
            if let rating {
                Label("\(rating.value) \(rating.name)", systemImage: "star.fill")
                    .labelStyle(A())
            }

            Text(title)
                .font(.system(size: 22.0))
                .fontWeight(.medium)

            if let subtitle {
                Text(subtitle)
                    .font(.system(size: 14))
                    .fontWeight(.medium)
                    .foregroundColor(.init(.sRGB, red: 0.05, green: 0.45, blue: 1))
            }
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageView.swift | Initially Modified: 11:47 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageView.swift |      Last Modified: __:__ PM Sat 9 Sep 2023
   /Views/Shared/PageView/PageView.swift

      Fri 8 Sep 2023
     11:48 PM | CarouselView -> PageView | (~)
     #file

   Sat 9 Sep 2023
     12:51 PM | /Views/Shared/ -> /Views/Shared/PageView/ | (~)
     #folder
*/

import SwiftUI

internal struct PageView: View {
    internal let considerToChangeDistance: Double // 05:05 AM Sat 9 2023
    @State private var gestureProgress: CGFloat = 0 // 04:48 AM Sat 9 Sep 2023
    @State private var urlIndex: Int = 0 // 12:04 AM Sat 9 Sep 2023
    internal let urls: [String]

    @State private var progress: Double = .zero // 11:33 AM Sat 9 Sep 2023

    internal var body: some View {
        ZStack(alignment: .bottom) {
            ScrollViewReader { reader in
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack {
                        ForEach(urls.enumerated().sorted { $0.offset < $1.offset }, id: \.offset) { tuple in
                            if let url = URL(string: tuple.element) {
                                PageEntryView(url: url)
                            }
                        }
                    }
                    .gesture(
                        DragGesture(minimumDistance: 0.0)
                            .onChanged {
                                let traveledDistance: Double
                                if gestureProgress < 1.0 {
                                    traveledDistance = 1 - gestureProgress
                                }
                                else {
                                    traveledDistance = gestureProgress - 1
                                }

                                progress = traveledDistance / considerToChangeDistance * 100
                                gestureProgress = $0.location.x / $0.startLocation.x
                            }
                            .onEnded { _ in
                                urlIndex += gestureProgress < 1.0 ? 1 : -1
                            }
                        // 100% = 0.1
                        // x%   = 0.01
                        //
                        // 1.0 = 0.1
                        // x%  = 0.01
                        // 0.1 * x = 0.01
                        //
                        // x = 0.1 * 100 = 10%
                    )
                }
                .onChange(of: urlIndex) { index in
                    reader.scrollTo(index, anchor: .center)
                }
            }
            .cornerRadius(15.0)
            PageIndicatorView(count: urls.count, selection: $urlIndex)
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageIndicatorView.swift | Initially Modified: 01:33 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageIndicatorView.swift |      Last Modified: __:__ PM Sat 9 Sep 2023
   /Views/Shared/PageView/PageIndicatorView.swift

      Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct PageIndicatorView: View {
    internal let count: Int // 1:37 Sat 9 Sep 2023

    @Binding internal var selection: Int // 1:47 PM Sat 9 Sep 2023

    internal var body: some View {
        HStack(alignment: .center, spacing: 5.0) {
            ForEach(0..<count, id: \.self) { index in
                Circle()
                    .fill(
                        index == selection ? .black : .gray
                    )
                    .frame(width: 7.0, height: 7.0)
            }
        }
        .padding(.horizontal, 10.0)
        .padding(.vertical, 5.0)
        .background {
            Color.white
        }
        .cornerRadius(5.0)
        .padding(.bottom, 8.0)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageEntryView.swift | Initially Modified: 12:52 PM Sat 09 Sep 2023
   -> 04:19 PM Last Modified: Add cornderRadius
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageEntryView.swift |      Last Modified: 01:18 PM Sat 09 Sep 2023
   /Views/Shared/PageView/PageEntryView.swift

      Sat 9 Sep 2023
   12:51 PM | /Views/Shared/ -> /Views/Shared/PageView/ | (~)
   #folder
*/

import SwiftUI

internal struct PageEntryView: View {
    internal let url: URL

    internal var body: some View {
        AsyncImage(
            url: url,
            content: { image in
                image
                    .resizable()
                    .aspectRatio(343/257, contentMode: .fit)
                    .cornerRadius(15.0)
            },
            placeholder: { placeholder }
        )
    }

    internal var placeholder: some View { // Initially Modified: 12:54 PM Sat 9 Sep 2023
        Text("placeholder".capitalized)
            .font(.body)
    }
}

import SwiftUI

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | _ | View.swift | Initially Modified: 01:45 PM Wed 6 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | _ | View.swift |      Last Modified: 06:08 PM Fri 08 Seo 2023

  Wed 6 Seo 2023
 __:__ _M | `private Recipe` | (+)
 #typealias
 */

internal struct NePridumalNazvanieLayout: Layout { // 3:29 PM Fri Sep 2023
    // This is code is not safe!
    // The Reason: It assumes that `proposal.width` is not `nil`.
    internal func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize { // Initially Modified: __:__ PM Fri 8 Sep 2023
                           //      Last Modified: 06:08 PM Fri 8 Sep 2023
        guard let availableWidth: CGFloat = proposal.width else { fatalError("`proposal.width` is `nil`") }

        var occupiedWidth: CGFloat = .zero
        return subviews.reduce(CGSize.zero) { accumulator, view in
            let size: CGSize = view.sizeThatFits(.unspecified)
            occupiedWidth += size.width

            if occupiedWidth > availableWidth {
                occupiedWidth = size.width
                return CGSize(width: availableWidth, height: accumulator.height + size.height)
            }
            return CGSize(width: availableWidth, height: accumulator.height == .zero ? size.height : accumulator.height)
        }
    }

    internal func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) { // Last Modified: __:__ PM Fri 8 Sep 2023
        var occupiedWidth: CGFloat = .zero
        var occupiedHeight: CGFloat = .zero

        subviews.forEach { view in
            let size = view.sizeThatFits(.unspecified)
            if occupiedWidth + size.width > bounds.width {
                occupiedWidth = .zero; occupiedHeight += size.height
            }

            let x = bounds.origin.x + size.width / 2 + occupiedWidth
            let y = bounds.origin.y + size.height / 2 + occupiedHeight

            occupiedWidth += size.width
            view.place(at: CGPoint(x: x, y: y), anchor: .center, proposal: proposal)
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ArrayLayout.swift | Initially Modified: 12:08 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ArrayLayout.swift |      Last Modified: 12:36 PM Sat 9 Sep 2023

      Sat 9 Sep 2023
     12:43 PM | Deprecate it. | ()
     #file
*/

import SwiftUI

internal struct ArrayLayout: Layout {
    internal func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize { // Last Modified: 12:33 PM Sat 9 PM 2023
        let maxHeight: CGFloat = subviews.max { // 12:11 PM Sat 9 Sep 2023
            $0.sizeThatFits(.unspecified).height > $1.sizeThatFits(.unspecified).height
        }!.sizeThatFits(proposal).height

        return subviews.reduce(CGSize.zero) { accumulator, view in
            return CGSize(
                width: accumulator.width + view.sizeThatFits(proposal).width,
                height: maxHeight
            )
        }
    }

    internal func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {  // Last Modified: 12:36 PM Sat 9 PM 2023
        var occupiedWidth: CGFloat = .zero

        subviews.forEach { view in
            let size: CGSize = view.sizeThatFits(proposal)

            view.place(
                at: CGPoint(x: bounds.origin.x + size.width / 2 + occupiedWidth, y: bounds.origin.y + size.height / 2),
                anchor: .center,
                proposal: proposal
            )
            occupiedWidth += size.width
        }
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Functions.swift | Initially Modified: 01:08 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Functions.swift |           Last Modified: __:__ PM Sat 9 Sep 2023
   /Mathematics/Functions.swift

      Sat 9 Sep 2023
     __:__ PM | `` | ()
     #
*/

import SwiftUI

internal func log(base: Double, x: Double) -> Double {
    log(x + 1) / log(base)
}
