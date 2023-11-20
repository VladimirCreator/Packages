/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | FetchViewModel.swift | Initially Modified: 12:56 AM Thu 14 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | FetchViewModel.swift |      Last Modified: 12:56 AM Thu 14 Sep 2023
   /ViewModel/Protocol/FetchViewModel.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder

   Thu 14 Sep 2023
     __:__ AM | `` | ()
     #
*/

import Foundation

internal protocol FetchViewModel: AnyObject {
    func fetch<T>(_ type: T.Type, from url: String) async throws -> T where T : Decodable
}

extension FetchViewModel {
    func fetch<T>(_ type: T.Type, from url: String) async throws -> T where T : Decodable { //guard false else { return }
        guard let url: URL = .init(string: url) else { return /* I do not know how to handle it gracefully. */ }
        async let (data, _) = try URLSession.shared.data(from: url)

        return try await JSONDecoder().decode(type, from: data)
    }
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelViewModel.swift | Initially Modified: 03:26 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelViewModel.swift |      Last Modified: __:__ PM Tue 12 Sep 2023
   /ViewModel/HotelViewModel.swift
   Tue 12 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import Foundation
import Combine

internal class HotelViewModel: ObservableObject {
    @Published
    internal var hotel: Hotel = .zero
}

/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | FetchViewModel+Extension.swift | Initially Modified: 01:12 AM Thu 14 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | FetchViewModel+Extension.swift |      Last Modified: 01:12 AM Thu 14 Sep 2023
   /ViewModel/Protocol/FetchViewModel+Extension.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder

   Thu 14 Sep 2023
   12:14 AM | Foundation | (+)
   #import
*/

extension HotelViewModel: FetchViewModel {
}
extension RoomViewModel: FetchViewModel {
}
extension BookingViewModel: FetchViewModel {
}

