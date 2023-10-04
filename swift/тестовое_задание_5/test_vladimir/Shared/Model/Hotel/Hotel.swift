/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel.swift | Initially Modified: 11:18 PM Tue 05 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel.swift |      Last Modified: 09:46 AM Wed 13 Sep 2023
   /Shared/Model/Hotel/Hotel.swift
   Wed 13 Sep 2023
     09:36 AM | /Shared/Model/ -> /Shared/Model/Hotel/ | (~)
     #folder
*/

import SwiftUI

internal struct Hotel: Identifiable {
    typealias ID = UInt
    internal let id: Self.ID

    internal let (name, adress): (String, String)

    internal let (minimal_price, price_for_it): (UInt, String)

    internal let (rating, rating_name): (UInt, String)

    internal let image_urls: [String]

    internal let about_the_hotel: AboutTheHotel // `(String, [String])`
                                                // does not conform to
                                                // `Decodable` :(

    internal struct AboutTheHotel {
        internal let description: String
        internal let peculiarities: [String]
    }
}
