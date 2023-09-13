/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingViewModel.swift | Initially Modified: 04:39 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingViewModel.swift |      Last Modified: __:__ PM Tue 12 Sep 2023
  /ViewModel/BookingViewModel.swift

   Swift
 - class

   Swift Playgrounds
 - file
 - folder

   Tue 12 Sep 2023
   __:__ PM | `` | ()
   #
*/

import Combine
import SwiftUI

internal class BookingViewModel: ObservableObject {
    @Published internal var booking: Booking? = nil

    @Published internal var consumer: Consumer = .init(phone: "", mail: "") // Initially Modified: 08:17 PM Tue 12 Sep 2023
    @Published internal var tourists: [Tourist] = [ // Initially Modified: 04:42 PM Tue 12 Sep 2023
        .init(firstName: "", lastName: "", birthDate: "", citizenship: "", abroadPassportNumber: "", abroadPassportVailidityDate: "")
    ]

    //internal let booking: Booking = Booking(id: 0, hotel_name: "а", hotel_adress: "фывфы", horating: 0, rating_name: "фывфы", departure: "фывфыв", arrival_country: "фывфыв", tour_date_start: "фывфы", tour_date_stop: "", number_of_nights: 7, room: "фывыф", nutrition: "фывфыв", tour_price: 0, fuel_charge: 0, service_charge: 0) // Initially Modified: 04:48 PM Tue 12 Sep 2023

    private let phoneSubject: PassthroughSubject<Consumer, Never> = .init()
    private var cancellables: Set<AnyCancellable> = [] // 03:15 AM Wed 13 Sep 2023

    internal init() { // 03:13 AM Wed 13 Sep 2023
        $consumer.filter { !$0.phone.contains { !$0.isNumber } }.subscribe(phoneSubject).store(in: &cancellables)
        phoneSubject.filter { !$0.phone.contains { !$0.isNumber } }.sink {
            print($0)
        }.store(in: &cancellables)
    }

    internal func fetch() async throws -> Void { // Initially Modified: 04:50 AM Wed 13 Sep 2023
        guard false else { return }
        guard let url = URL(string: BOOKING_URL) else { return }

        let (data, _) = try await URLSession.shared.data(for: URLRequest(url: url))

        Task { @MainActor in
            let decoder: JSONDecoder = .init()
            self.booking = try decoder.decode(Booking.self, from: data)
        }
    }
}
