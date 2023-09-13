/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell7.swift | Initially Modified: 10:59 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell7.swift |      Last Modified: : PM Sat 9 Sep 2023
   /Views/Shared/Cell7.swift
 Sat 9 Sep 2023
 __:__ PM | `` | ()
 #
 */

import SwiftUI

internal struct Cell7<Content>: View where Content : View {
    @State private var isExpanded: Bool = false // 11:05 PM Sat 9 Sep 2023

    internal let content: () -> Content

    internal var body: some View {
        DisclosureGroup("", isExpanded: $isExpanded) {
            content()
        }
    }
}
