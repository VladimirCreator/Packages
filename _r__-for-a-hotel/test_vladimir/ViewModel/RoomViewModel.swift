/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomViewModel.swift | Initially Modified: 04:45 PM Wed 13 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomViewModel.swift |      Last Modified: __:__ PM Wed 13 Sep 2023
   /ViewModel/RoomViewModel.swift

   Wed 13 Sep 2023

   04:01 PM | /View/ -> /View/General/ | (~)
   #folder
*/

import Foundation
import Combine

internal class RoomViewModel: ObservableObject {
    @Published
    internal var room: Rooms = .zero
}
