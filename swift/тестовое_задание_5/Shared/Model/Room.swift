/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room.swift | Initially Modified: 12:40 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room.swift |      Last Modified: 12:51 AM Mon 11 Sep 2023
   /Shared/Model/Room.swift

   Swift
   - class
 
   Swift Playgrounds
 - file
 - folder

   Mon 11 Sep 2023
 __:__ PM | `` | (+)
 #
*/

internal struct Rooms: Decodable {
    private enum JSONKeys: String, CodingKey {
        case rooms
    }

    let rooms: [Room]

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        let rooms = try? values.decode([Room].self, forKey: .rooms)
        guard let rooms else { fatalError("Rooms from decoder") }

        self.rooms = rooms
    }
}

internal struct Room: Identifiable { // 12:44 AM Mon 11 Sep 2023
    typealias ID = UInt
    let id: Self.ID

    let label: String

    let price: UInt
    let price_description: String

    let peculiarities: [String]

    let urls_of_images: [String]
}

extension Room: Decodable { // 12:45 AM Mon 11 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case id
        case label = "name"
        case price
        case price_description = "price_per"
        case peculiarities
        case urls_of_images = "image_urls"
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        let id = try? values.decode(UInt.self, forKey: .id)
        let label = try? values.decode(String.self, forKey: .label)
        let price = try? values.decode(UInt.self, forKey: .price)
        let price_description = try? values.decode(String.self, forKey: .price_description)
        let peculiarities = try? values.decode([String].self, forKey: .peculiarities)
        let urls_of_images = try? values.decode([String].self, forKey: .urls_of_images)
        
        guard let id,
            let label,
            let price,
            let price_description,
            let peculiarities,
            let urls_of_images
        else {
            fatalError("Room from decoder")
        }
        self.id = id
        self.label = label
        self.price = price
        self.price_description = price_description
        self.peculiarities = peculiarities
        self.urls_of_images = urls_of_images
    }
}
