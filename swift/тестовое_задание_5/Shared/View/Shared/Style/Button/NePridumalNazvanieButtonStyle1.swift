/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle1.swift | Initially Modified: __:__ AM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle1.swift |      Last Modified: 11:40 AM Sun 10 Sep 2023
   /Views/Shared/Styles/NePridumalNazvanieStyle1.swift

   Swift
     - class

   Swift Playgrounds
   - file
   - folder

   Sun 10 Sep 2023
     : PM | `` | ()
     #
*/

import SwiftUI

internal struct NePridumalNazvanieButtonStyle1: ButtonStyle {
    internal let foregroundColor: Color
    internal let backgroundColor: Color // 11:40 AM Sun 10 Sep 2023

    internal func makeBody(configuration: Configuration) -> some View {
        return configuration.label
        // ...
            .frame(width: 32.0, height: 32.0)
        // ...
            .foregroundColor(foregroundColor)
            .background {
                RoundedRectangle(cornerRadius: 6.0, style: .circular)
                    .fill(backgroundColor)
            }
    }
}
