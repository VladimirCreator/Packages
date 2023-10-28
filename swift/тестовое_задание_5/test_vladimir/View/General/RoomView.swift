/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift | Initially Modified: 01:23 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/RoomView.swift
   Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct RoomView: View {
    @Environment(\.backgroundStyle) private var background // Initially Modified: 11:00 AM Wed 13 Sep 2023

    @StateObject private var roomViewModel: RoomViewModel = .init() // Initially Modified: 04:5_ AM Wed 13 Sep 2023
    internal let hotelName: String // Требование технического задания.

    internal var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack(alignment: .center, spacing: 8.0) {
                ForEach(roomViewModel.room.rooms, id: \.id) { room in
                    Card {
                        Cell3(room: room)
                    }
                }
            }
        }
        .background(background ?? .init(.clear))
        .navigationTitle(hotelName)
        .onAppear {
            Task {
                try? await roomViewModel.fetch(Rooms.self, from: ROOM_URL) {
                    roomViewModel.room = $0
                }
            }
        }
    }
}
