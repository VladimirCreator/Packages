/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel+Extension.swift | Initially Modified: 09:46 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel+Extension.swift |      Last Modified: 09:51 AM Wed 13 Sep 2023
   /Shared/Model/Hotel/Hotel+Extension.swift
   Wed 13 Sep 2023
     __:__ AM |  | ()
     #
*/

extension Hotel { // Initially Modified: 03:47 PM Tue 12 Sep 2023
    static let zero: Hotel = .init(id: .zero, name: "Название отеля", adress: "Адрес отеля", minimal_price: .zero, price_for_it: "Описание цены", rating: .zero, rating_name: "Описание рейтинга", image_urls: ["https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg"], about_the_hotel: .init(description: "Описание отеля.", peculiarities: ["Особенность отеля №1"]))
}

extension Hotel: Decodable { // Initially Modified: 11:31 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey { // Initially Modified: 11:32 PM Sun 10 Sep 2023
                                               //      Last Modified: 11:41 PM Sun 10 Sep 2023
        case id
        case name
        case adress
        case minimal_price
        case price_for_it
        case rating
        case rating_name
        case image_urls
        case about_the_hotel
    }

    internal init(from decoder: Decoder) throws {
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
            fatalError("\(#function)")
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

extension Hotel.AboutTheHotel: Decodable { // Initially Modified: 11:48 PM Sun 10 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case description
        case peculiarities
    }

    internal init(from decoder: Decoder) throws {
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
