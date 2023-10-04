
/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Rooms.swift | Initially Modified: 09:57 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Rooms.swift |      Last Modified: 09: AM Wed 13 Sep 2023
   /Shared/Model/Room/Rooms.swift
   Wed 13 Sep 2023
     __:__ AM | | ()
     #
*/

internal struct Rooms: Decodable {
    private enum JSONKeys: String, CodingKey {
        case rooms
    }

    internal let rooms: [Room]

    internal init(rooms: [Room]) {
        self.rooms = rooms
    }

    internal init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let rooms = try? values.decode([Room].self, forKey: .rooms) else {
            fatalError("\(#function)")
        }
        self.rooms = rooms
    }
}

extension Rooms {
    static let zero: Rooms = .init(rooms: [.zero])
}
