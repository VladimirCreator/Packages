/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift | Initially Modified: 01:08 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/HotelView.swift
 
   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct HotelView: View {
    @EnvironmentObject private var navigationViewModel: NavigationViewModel

    internal let hotel: Hotel // 07:07 PM Mon 11 Sep 2023

    internal var body: some View {
        ScrollView {
            Card {
                Cell1(hotel: hotel)
                    .toolbarBackground(.visible)
                    .toolbarBackground(.white, for: .navigationBar)
                    .toolbarBackground(.red, for: .bottomBar)
            }
            Card {
                Cell2(hotel: hotel)
            }
        }
        .navigationTitle("Отель")
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button("К выбору номера") {
                    navigationViewModel.path.append(RootView.PresentedView.room)
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
    }
}
