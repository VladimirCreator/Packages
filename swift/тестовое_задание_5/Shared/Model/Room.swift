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
        
        guard let rooms = try? values.decode([Room].self, forKey: .rooms)
        else {
            fatalError("Rooms from decoder")
        }

        self.rooms = rooms
    }
}

internal struct Room: Identifiable { // 12:44 AM Mon 11 Sep 2023
    typealias ID = UInt
    let id: Self.ID

    let name: String

    let price: UInt
    let price_per: String

    let peculiarities: [String]

    let image_urls: [String]
}

extension Room: Decodable { // 12:45 AM Mon 11 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case id
        case name
        case price
        case price_per
        case peculiarities
        case image_urls
    }

    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        
        guard let id = try? values.decode(UInt.self, forKey: .id),
              let name = try? values.decode(String.self, forKey: .name),
              let price = try? values.decode(UInt.self, forKey: .price),
              let price_per = try? values.decode(String.self, forKey: .price_per),
              let peculiarities = try? values.decode([String].self, forKey: .peculiarities),
              let image_urls = try? values.decode([String].self, forKey: .image_urls)
        else {
            fatalError("Room from decoder")
        }
        self.id = id
        self.name = name
        self.price = price
        self.price_per = price_per
        self.peculiarities = peculiarities
        self.image_urls = image_urls
    }
}
