/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift | Initially Modified: 01:14 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift |      Last Modified: 09:22 AM Wed 13 Sep 2023
   /Shared/Model/Booking/Booking.swift
   Wed 13 Sep 2023
     09:23 AM | /Shared/Model/ -> /Shared/Model/Booking | (~)
     #folder
*/

internal struct Booking: Identifiable, Decodable {
    internal typealias ID = UInt

    internal let id: Self.ID

    internal let (hotelName, hotelAdress): (String, String)

    internal let (horating, ratingName): (UInt, String)

    internal let (departure, arrivalCountry): (String, String)

    internal let (tourDateStart, tourDateStop): (String, String)

    internal let numberOfNights: UInt
    internal let room: String

    internal let nutrition: String

    internal let (tourPrice, fuelCharge, serviceCharge): (UInt, UInt, UInt)
}
