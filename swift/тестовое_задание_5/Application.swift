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
            switch 1 {
            case 0: RootView()
            case 1: PrototypeView()
            default: Text("body").monospaced(true)
            }
        }
    }

}
