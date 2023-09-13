//
//  test_vladimirApp.swift
//  test_vladimir
//
//  Created by Vladimir Petrov on 13.09.2023.
//

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
