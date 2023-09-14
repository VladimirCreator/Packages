/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingViewModel.swift | Initially Modified: 04:39 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | BookingViewModel.swift |      Last Modified: __:__ PM Tue 12 Sep 2023
  /ViewModel/BookingViewModel.swift
   Tue 12 Sep 2023
   __:__ PM | `` | ()
   #
*/

import Foundation // Initially Modified: 10:13 AM Wed 13 Sep 2023
import Combine

internal class BookingViewModel: ObservableObject {
    private var subscriptions: Set<AnyCancellable> = .init() // Initially Modified: 03:15 AM Wed 13 Sep 2023

    @Published internal var booking: Booking = .zero

    @Published internal var consumer: Consumer = .init(phone: "", mail: "") // Initially Modified: 08:17 PM Tue 12 Sep 2023
    @Published internal var tourists: [Tourist] = [ // Initially Modified: 04:42 PM Tue 12 Sep 2023
        .init(firstName: "", lastName: "", birthDate: "", citizenship: "", abroadPassportNumber: "", abroadPassportVailidityDate: "")
    ]

    internal init() { // Initially Modified: 03:13 AM Wed 13 Sep 2023
    }
}