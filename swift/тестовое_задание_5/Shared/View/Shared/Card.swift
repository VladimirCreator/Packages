/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Card.swift | Initially Modified: 10:22 AM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Card.swift |      Last Modified: 10:__ AM Fri 8 Sep 2023
   /Views/Shared/Card.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Fri 8 Sep 2023
     10:52 AM | Background.swift -> Card.swift | (+)
     #file
*/

import SwiftUI

internal struct Card<Content>: View where Content : View {
    internal let content: () -> Content

    internal var body: some View {
        content()
            .padding(.all, 16.0)
            .background(.white)
            .cornerRadius(12.0)
    }
}
