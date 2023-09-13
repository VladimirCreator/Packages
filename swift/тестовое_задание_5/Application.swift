/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift | Initially Modified: 01:08 PM Tue 05 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Application.swift |      Last Modified: 03:46 PM Sun 10 Sep 2023
   /Application.swift
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
            case 0x00:
                //Text("0").monospaced(true)
                RootView()
            case 0x01:
                Text("1").monospaced(true)
                //PrototypeView()
            case 0x02:
                Text("2").monospaced(true)
                //JSONView()
            case 0x03: x03
            default: x__
            }
        }
    }

    private var x03: some View { // Initially Modified: 08:55 AM Wed 13 Sep 2023
        Text("3").monospaced(true)
    }

    private var x__: some View { // Initially Modified: 08:55 AM Wed 13 Sep 2023
        Text("default").monospaced(true)
    }
}
