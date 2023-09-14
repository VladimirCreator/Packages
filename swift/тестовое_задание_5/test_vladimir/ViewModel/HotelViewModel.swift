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

internal protocol FetchViewModel: AnyObject { // Initially Modified: 12:21 AM Thu 14 Sep 2023
    func fetch<T>(_ type: T.Type, from url: String, _ handle: @escaping (T) -> Void) async throws -> Void where T : Decodable
}

extension FetchViewModel { // Initially Modified: 12:21 AM Thu 14 Sep 2023
                           //      Last Modified: 12:31 AM Thu 14 Sep 2023
    func fetch<T>(_ type: T.Type, from url: String, _ handle: @escaping (T) -> Void) async throws -> Void where T : Decodable {
        guard false else { return }
        
        guard let url: URL = .init(string: url) else { return }
        let request: URLRequest = .init(url: url)
        let (data, _) = try await URLSession.shared.data(for: request)
        
        Task { @MainActor in
            let decoder: JSONDecoder = .init()
            let instance: T = try decoder.decode(type, from: data)

            handle(instance)
        }
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
    internal var hotel: Hotel = .zero // Initially Modified: 03:28 PM Tue 12 Sep 2023
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

extension HotelViewModel: FetchViewModel { // Initially Modified: 12:43 AM Thu 14 Sep 2023
}
extension RoomViewModel: FetchViewModel { // Initially Modified: 12:34 AM Thu 14 Sep 2023
}
extension BookingViewModel: FetchViewModel { // Initially Modified: 12:44 AM Thu 14 Sep 2023
}

