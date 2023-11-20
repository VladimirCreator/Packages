/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfiSection.swift | Initially Modified: 05:25 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfoSection.swift |      Last Modified: 05:55 PM Sun 10 Sep 2023
   /View/Shared/Style/LabelStyle/Issue1LabelStyle.swift
   Sun 10 Sep 2023
     __:__ PM | `` | ()
     #file
*/

import SwiftUI

internal struct Issue1LabelStyle: LabelStyle { // 4:09 ?? Sep 2023
    internal let verbatimOnly: Bool
    internal let foregroundColor: Color
    internal let backgroundColor: Color?

    internal func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 2.0) {
            if !verbatimOnly {
                configuration.icon
            }
            configuration.title
        }
        .font(
            .system(size: 16.0)
        )
        .fontWeight(.medium)
        .padding(.horizontal, 10.0)
        .padding(.vertical, 5.0)
        .foregroundColor(foregroundColor)
        .background {
            backgroundColor ?? foregroundColor.opacity(0.2)
        }
        .cornerRadius(5.0)
    }
}
