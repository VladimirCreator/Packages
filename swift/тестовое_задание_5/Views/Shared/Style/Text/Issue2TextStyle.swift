/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Issue1TextStyle.swift | Initially Modified: 05:19 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Issue1TextStyle.swift |      Last Modified: 05:21 PM Sun 10 Sep 2023
   /View/Shared/Style/Issue1TextStyle.swift

   Swift
   - class
 
   Swift Playgrounds
     - file
     - folder

   Sun 10 Sep 2023
     __:__ PM | `` | ()
   #
*/

import SwiftUI

internal struct Issue2TextStyle: ViewModifier {
    internal func body(content: Content) -> some View {
        content
            .font(.system(size: 14))
            .fontWeight(.medium)
            .foregroundColor(.x0d72ff)
    }
}
