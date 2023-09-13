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

    let name: String   // Initially Modified: 11:25 PM Sun 10 Sep 2023
    let adress: String // Initially Modified: 11:26 PM Sun 10 Sep 2023

    let minimal_price: UInt  // Initially Modified: 11:26 PM Sun 10 Sep 2023
    let price_for_it: String // Initially Modified: 11:26 PM Sun 10 Sep 2023

    let rating: UInt        // Initially Modified: 11:26 PM Sun 10 Sep 2023
    let rating_name: String // Initially Modified: 11:28 PM Sun 10 Sep 2023

    let image_urls: [String] // Initially Modified: 11:29 PM Sun 10 Sep 2023

    let about_the_hotel: AboutTheHotel // Initially Modified: 11:30 PM Sun 10 Sep 2023

    struct AboutTheHotel {
        let description: String     // Initially Modified: 11:30 PM Sun 10 Sep 2023
        let peculiarities: [String] // Initially Modified: 11:30 PM Sun 10 Sep 2023
    }
}

extension Hotel: Decodable { // Initially Modified: 11:31 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey { // Initially Modified: 11:32 PM Sun 10 Sep 2023, Last: 11:41 PM Sun 10 Sep 2023
        case id
        case name
        case adress
        case minimal_price
        case price_for_it
        case rating
        case rating_name
        case image_urls
        case about_the_hotel
        case description
        case peculiarities
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let id = try? values.decode(UInt.self, forKey: .id),
              let name = try? values.decode(String.self, forKey: .name),
              let adress = try? values.decode(String.self, forKey: .adress),
              let minimal_price = try? values.decode(UInt.self, forKey: .minimal_price),
              let price_for_it = try? values.decode(String.self, forKey: .price_for_it),
              let rating = try? values.decode(UInt.self, forKey: .rating),
              let rating_name = try? values.decode(String.self, forKey: .rating_name),
              let image_urls = try? values.decode([String].self, forKey: .image_urls),
              let about_the_hotel = try? values.decode(AboutTheHotel.self, forKey: .about_the_hotel)
        else {
            fatalError("Hotel from decoder")
        }

        self.id = id
        self.name = name
        self.adress = adress
        self.minimal_price = minimal_price
        self.price_for_it = price_for_it
        self.rating = rating
        self.rating_name = rating_name
        self.image_urls = image_urls
        self.about_the_hotel = about_the_hotel
    }
}

extension Hotel.AboutTheHotel: Decodable { // 11:48 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case description
        case peculiarities
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let description = try? values.decode(String.self, forKey: .description),
              let peculiarities = try? values.decode([String].self, forKey: .peculiarities)
        else {
            fatalError("HotelInfo from decoder")
        }
        self.description = description
        self.peculiarities = peculiarities
    }
}

extension Hotel { // Initially Modified: 03:47 PM Tue 12 Sep 2023
    static let abstractHotel: Hotel = .init(id: 0, name: "Абстрактный отель", adress: "Абстрактный адрес", minimal_price: 0, price_for_it: "Абстрактное описание", rating: 0, rating_name: "Абстрактный рейтинг", image_urls: ["https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg"], about_the_hotel: .init(description: "Абстрактное описание.", peculiarities: ["Абстрактная особенность 1"]))
}
