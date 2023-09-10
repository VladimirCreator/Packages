/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel.swift | Initially Modified: 11:18 PM Tue 05 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel.swift |      Last Modified: 11:58 PM Sun 10 Sep 2023
   /Shared/Model/Hotel.swift

   Swift
 - class

   Swift Playgrounds
 - file
 - folder

   Sun 10 Sep 2023
 __:__ PM | `` | (+)
 #
*/

import SwiftUI

internal struct Hotel: Identifiable {
    typealias ID = UInt
    let id: Self.ID

    let label: String // 11:25 PM Sun 10 Sep 2023

    let address: String // 11:26 PM Sun 10 Sep 2023

    let price: UInt // // 11:26 PM Sun 10 Sep 2023
    let price_description: String // 11:26 PM Sun 10 Sep 2023

    let rating: UInt // // 11:26 PM Sun 10 Sep 2023
    let rating_description: String // // 11:28 PM Sun 10 Sep 2023

    let urls_of_images: [String] // 11:29 PM Sun 10 Sep 2023

    let about_hotel: HotelInfo // 11:30 PM Sun 10 Sep 2023

    struct HotelInfo {
        let description: String // 11:30 PM Sun 10 Sep 2023
        let peculiarities: [String] // 11:30 PM Sun 10 Sep 2023
    }
}

extension Hotel: Decodable { // 11:31 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey { // 11:32 PM Sun 10 Sep 2023, Last: 11:41 PM Sun 10 Sep 2023
        case id
        case label = "name"
        case address = "adress"
        case price = "minimal_price"
        case price_description = "price_for_it"
        case rating
        case rating_description = "rating_name"
        case urls_of_images = "image_urls"
        case about_hotel = "about_the_hotel"
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        let id = try? values.decode(UInt.self, forKey: .id)
        let label = try? values.decode(String.self, forKey: .label)
        let address = try? values.decode(String.self, forKey: .address)
        let price = try? values.decode(UInt.self, forKey: .price)
        let price_description = try? values.decode(String.self, forKey: .price_description)
        let rating = try? values.decode(UInt.self, forKey: .rating)
        let rating_description = try? values.decode(String.self, forKey: .rating_description)
        let urls_of_images = try? values.decode([String].self, forKey: .urls_of_images)
        let about_hotel = try? values.decode(HotelInfo.self, forKey: .about_hotel)

        guard let id,
              let label,
              let address,
              let price,
              let price_description,
              let rating,
              let rating_description,
              let urls_of_images,
              let about_hotel
        else {
            print(id)
            print(label)
            print(address)
            print(price)
            print(price_description)
            print(rating)
            print(rating_description)
            print(urls_of_images)
            print(about_hotel)
            fatalError("Hotel from decoder")
        }

        self.id = id
        self.label = label
        self.address = address
        self.price = price
        self.price_description = price_description
        self.rating = rating
        self.rating_description = rating_description
        self.urls_of_images = urls_of_images
        self.about_hotel = about_hotel
    }
}

extension Hotel.HotelInfo: Decodable { // 11:48 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case description
        case peculiarities
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        let description = try? values.decode(String.self, forKey: .description)
        let peculiarities = try? values.decode([String].self, forKey: .peculiarities)
        
        guard let description, let peculiarities else { fatalError("HotelInfo from decoder") }
        self.description = description
        self.peculiarities = peculiarities
    }
}
