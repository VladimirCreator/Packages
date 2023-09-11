/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift | Initially Modified: 01:08 PM Tue 05 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift |      Last Modified: 03:46 PM Sun 10 Sep 2023
   /Application.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

@main
fileprivate struct Application: App {

    fileprivate var body: some Scene {
        WindowGroup() {
            switch 0 {
            case 0:
                //Text("0").monospaced(true)
                RootView()
            case 1:
                //Text("1").monospaced(true)
                PrototypeView()
            case 2:
                Text("2").monospaced(true)
                //JSONView(hotel: hotel, room: room, booking: booking)
            default:
                Text("default").monospaced(true)
            }
        }
    }

}
