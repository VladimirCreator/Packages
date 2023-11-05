/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room.swift | Initially Modified: 12:40 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Room.swift |      Last Modified: 09:56 AM Wed 13 Sep 2023
   /Shared/Model/Room/Room.swift
   Wed 13 Sep 2023
     09:54 AM | /Shared/Model/ -> /Shared/Model/Room/ | (~)
     #folder
*/

internal struct Room: Identifiable, Decodable {
    typealias ID = UInt
    let id: Self.ID

    let name: String
    let (price, pricePer): (UInt, String)

    let peculiarities: [String]

    let imageUrls: [String]
}
