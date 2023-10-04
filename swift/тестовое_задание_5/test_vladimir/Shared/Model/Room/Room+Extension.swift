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
        price_per: "Описание цены",
        peculiarities: ["Особенность номера №1"],
        image_urls: []
    )
}

extension Room: Decodable {
    private enum JSONKeys: String, CodingKey {
        case id
        case name
        case price
        case price_per
        case peculiarities
        case image_urls
    }

    internal init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let id = try? values.decode(UInt.self, forKey: .id),
              let name = try? values.decode(String.self, forKey: .name),
              let price = try? values.decode(UInt.self, forKey: .price),
              let price_per = try? values.decode(String.self, forKey: .price_per),
              let peculiarities = try? values.decode([String].self, forKey: .peculiarities),
              let image_urls = try? values.decode([String].self, forKey: .image_urls)
        else {
            fatalError("\(#function)")
        }
        self.id = id
        self.name = name
        self.price = price
        self.price_per = price_per
        self.peculiarities = peculiarities
        self.image_urls = image_urls
    }
}
