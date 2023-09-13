/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Text+Extension.swift | Initially Modified: 05:11 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Text+Extension.swift |      Last Modified: 05:14 PM Sat 9 Sep 2023
   /Views/Shared/Styles/Text+Extension.swift

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

internal extension Text {
    internal func textStyle<Style: ViewModifier>(_ style: Style) -> some View {
        ModifiedContent(content: self, modifier: style)
    }
}
