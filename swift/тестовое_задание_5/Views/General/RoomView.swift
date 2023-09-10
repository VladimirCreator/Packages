/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift | Initially Modified: 01:23 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RoomView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/RoomView.swift
 
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

internal struct RoomView: View {
    internal var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            VStack(alignment: .center, spacing: 8.0) {
                ForEach(0..<2, id: \.self) { _ in
                    Card {
                        Cell3()
                    }
                }
            }
        }
        .navigationTitle("Title")
    }
}
