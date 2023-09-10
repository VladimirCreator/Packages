/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift | Initially Modified: 09:45 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | HotelView.swift |      Last Modified: __:__ PM Sun 10 Sep 2023
   /_.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

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
    internal var body: some View {
        NavigationStack {
            HotelView()
                .background {
                    Color.xf6f6f9
                }
                .preferredColorScheme(.light)
                .navigationBarTitleDisplayMode(.inline)
        }
    }
}
