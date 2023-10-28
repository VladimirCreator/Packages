
/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Rooms.swift | Initially Modified: 09:57 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Rooms.swift |      Last Modified: 09: AM Wed 13 Sep 2023
   /Shared/Model/Room/Rooms.swift
   Wed 13 Sep 2023
     __:__ AM | | ()
     #
*/

internal struct Rooms: Decodable {
    internal let rooms: [Room]
}

extension Rooms { // Initially Modified: 10:27 AM Wed 13 Sep 2023
    static let zero: Rooms = .init(
        rooms: [
            .zero
        ]
    )
}
