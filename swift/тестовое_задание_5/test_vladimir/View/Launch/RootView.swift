/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift | Initially Modified: 09:45 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift |      Last Modified: __:__ PM Sun 10 Sep 2023
   /_.swift
   Fri 8 Sep 2023
     __:__ PM | `` | (+)
     #
   Sat 9 Sep 2023
     08:35 PM | Placeholder -> Playground | (~)
     #struct

   Sun 10 Sep 2023
     2:10 PM | _ -> Content | (~)
     #file
     2:13 PM | Content -> RootView | (~)
     #file
     2:16 PM | / -> /View/Launch/
     #folder
*/

import SwiftUI

internal struct RootView: View {
    @StateObject private var navigationViewModel: NavigationViewModel = .init()

    internal init() {
        // Weird!
        UINavigationBar.appearance().backgroundColor = .white
        UINavigationBar.appearance().isTranslucent = false
        UINavigationBar.appearance().shadowImage = nil

        // Weird again!
        UIToolbar.appearance().backgroundColor = .white
        UIToolbar.appearance().isTranslucent = false
    }

    internal var body: some View {
        NavigationStack(path: $navigationViewModel.path) {
            HotelView()
                .navigationBarTitleDisplayMode(.inline)
                .navigationDestination(for: RootView.PresentedView.self) { requestedView in
                    switch requestedView {
                    case .room(let hotel_name):
                        RoomView(hotel_name: hotel_name)
                    case .booking:
                        BookingView()
                    case .paidOrder:
                        PaidOrderView()
                    default:
                        Text("default").monospaced(true)
                    }
                }
        }
        .accentColor(.black)
        .preferredColorScheme(.light)
        .environment(\.backgroundStyle, .init(.xf6f6f9))
        .environmentObject(navigationViewModel)
    }
}
