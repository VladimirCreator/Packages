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

    internal let (name, adress): (String, String) // self.0 // Initially Modified: 11:25 PM Sun 10 Sep 2023
                                                  // self.1 // Initially Modified: 11:26 PM Sun 10 Sep 2023

    internal let (minimal_price, price_for_it): (UInt, String) // self.0 // Initially Modified: 11:26 PM Sun 10 Sep 2023
                                                               // self.1 // Initially Modified: 11:26 PM Sun 10 Sep 2023

    internal let (rating, rating_name): (UInt, String) // self.0 // Initially Modified: 11:26 PM Sun 10 Sep 2023
                                                       // self.1 // Initially Modified: 11:28 PM Sun 10 Sep 2023

    internal let image_urls: [String] // Initially Modified: 11:29 PM Sun 10 Sep 2023

    internal let about_the_hotel: AboutTheHotel // Initially Modified: 11:30 PM Sun 10 Sep 2023
                                                // `(String, [String])` does not conform to `Decodable` :(

    internal struct AboutTheHotel {
        internal let description: String     // Initially Modified: 11:30 PM Sun 10 Sep 2023
        internal let peculiarities: [String] // Initially Modified: 11:30 PM Sun 10 Sep 2023
    }
}
