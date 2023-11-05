/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle1.swift | Initially Modified: 05:17 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvaniteTextStyle1.swift |      Last Modified: 08:49 PM Sat 9 Sep 2023
 /Views/Shared/Styles/Text/NePridumalNazvaniteTextStyle1.swift
 Sat 9 Sep 2023
 __:__ PM | `` | (+)
 #
 */

import SwiftUI

internal struct NePridumalNazvanieTextStyle1: ViewModifier {
    internal func body(content: Content) -> some View {
        content
            .font(.system(size: 22.0))
            .fontWeight(.medium)
    }
}
