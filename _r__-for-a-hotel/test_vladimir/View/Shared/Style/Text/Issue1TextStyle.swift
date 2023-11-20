/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfiSection.swift | Initially Modified: 05:15 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfoSection.swift |      Last Modified: 05:19 PM Sun 10 Sep 2023
   /View/Shared/Style/Issue1TextStyle.swift
   Sun 10 Sep 2023
     __:__ PM | `` | ()
     #
 */

import SwiftUI

internal struct Issue1TextStyle: ViewModifier {
    internal func body(content: Content) -> some View {
        content
            .font(.system(size: 22.0))
            .fontWeight(.medium)
    }
}
