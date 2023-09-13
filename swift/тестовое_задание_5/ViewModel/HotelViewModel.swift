/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelViewModel.swift | Initially Modified: 03:26 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelViewModel.swift |      Last Modified: __:__ PM Tue 12 Sep 2023
   /ViewModel/HotelViewModel.swift

 Swift
 - class

 Swift Playgrounds
 - file
 - folder

 Tue 12 Sep 2023
   04:01 PM | /View/ -> /View/General/ | (~)
   #folder
*/

import SwiftUI

internal class HotelViewModel: ObservableObject {

    @Published
    internal var hotel: Hotel? = nil // Initially Modified: 03:28 PM Tue 12 Sep 2023

    internal func fetch() async throws -> Void {
        guard false else { return }
        guard let url = URL(string: HOTEL_URL) else { return }

        let (data, _) = try await URLSession.shared.data(for: URLRequest(url: url))

        Task { @MainActor in
            let decoder: JSONDecoder = .init()
            self.hotel = try decoder.decode(Hotel.self, from: data)
        }
    }

}
