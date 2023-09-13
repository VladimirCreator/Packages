/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift | Initially Modified: 01:14 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift |      Last Modified: 09:22 AM Wed 13 Sep 2023
   /Shared/Model/Booking/Booking.swift
   Wed 13 Sep 2023
     09:23 AM | /Shared/Model/ -> /Shared/Model/Booking | (~)
     #folder
*/

internal struct Booking: Identifiable {
    internal typealias ID = UInt

    internal let id: Self.ID

    internal let (hotel_name, hotel_adress): (String, String)

    internal let (horating, rating_name): (UInt, String)

    internal let (departure, arrival_country): (String, String)

    internal let (tour_date_start, tour_date_stop): (String, String)

    internal let number_of_nights: UInt
    internal let room: String

    internal let nutrition: String

    internal let (tour_price, fuel_charge, service_charge): (UInt, UInt, UInt)
}
