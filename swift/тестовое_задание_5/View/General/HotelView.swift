/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift | Initially Modified: 01:08 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/HotelView.swift
   Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct HotelView: View {
    @Environment(\.backgroundStyle) private var background // Initially Modified: 10:55 AM Wed 13 Sep 2023

    @EnvironmentObject private var navigationViewModel: NavigationViewModel
    @StateObject private var hotelViewModel: HotelViewModel = .init() // Initially Modified: 03:31 PM Tue 12 Sep 2023

    internal var body: some View {
        ScrollView {
            Card {
                Cell1(hotel: hotelViewModel.hotel)
            }
            Card {
                Cell2(hotel: hotelViewModel.hotel)
            }
        }
        .background(background ?? .init(.clear))
        .navigationTitle("Отель")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                pickRoomButton
            }
        }
        .onAppear {
            Task {
                try? await hotelViewModel.fetch()
            }
        }
    }

    private var pickRoomButton: some View { // Initially Modified: 03:40 PM Tue 12 Sep 2023
        Button("К выбору номера") {
            navigationViewModel.path.append(RootView.PresentedView.room(hotelViewModel.hotel.name))
        }
        .buttonStyle(.nePridumalNazvanie)
    }
}
