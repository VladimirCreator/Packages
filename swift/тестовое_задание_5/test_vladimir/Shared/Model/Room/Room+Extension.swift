/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room+Extension.swift | Initially Modified: 10:00 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room+Extension.swift |      Last Modified: 10:01 AM Wed 13 Sep 2023
   /Shared/Model/Room/Room+Extension.swift
   Wed 13 Sep 2023
     __:__ AM | | ()
     #
 */

internal extension Room {
    static let zero: Room = .init(
        id: .zero,
        name: "Название номера",
        price: .zero,
        pricePer: "Описание цены",
        peculiarities: [
            "Особенность номера №1"
        ],
        imageUrls: []
    )
}
