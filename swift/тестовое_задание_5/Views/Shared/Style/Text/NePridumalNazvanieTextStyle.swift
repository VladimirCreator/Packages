/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle.swift | Initially Modified: 05:04 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle.swift |      Last Modified: 05:11 PM Sat 9 Sep 2023
   /Views/Shared/Styles/Text/NePridumalNazvaniteTextStyle.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct NePridumalNazvanieTextStyle: ViewModifier {
    internal let color: Color

    internal func body(content: Content) -> some View {
        content
            .font(
                .system(size: 16.0)
            )
            .foregroundColor(color)
    }
}
