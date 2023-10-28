/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking+Extension.swift | Initially Modified: 09:23 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking+Extension.swift |      Last Modified: 09:31 AM Wed 13 Sep 2023
   /Shared/Model/Booking/Booking+Extension.swift
   Wed 13 Sep 2023
     __:__ AM | `` | ()
     #
*/

internal extension Booking { // Initially Modified: 09:28 AM Wed 13 Sep 2023
    static let zero: Booking = .init(
        id: .zero,
        hotelName: "Имя отеля",
        hotelAdress: "Адрес отеля",
        horating: .zero,
        ratingName: "Оценка отеля",
        departure: "Вылет из",
        arrivalCountry: "Прибытие в",
        tourDateStart: "Today",
        tourDateStop: "Tomorrow",
        numberOfNights: .zero,
        room: "Описание номера",
        nutrition: "Описание питания",
        tourPrice: 1,
        fuelCharge: .zero,
        serviceCharge: .zero
    )
}
