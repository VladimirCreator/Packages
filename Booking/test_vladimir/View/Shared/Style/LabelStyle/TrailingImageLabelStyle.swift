/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | TrailingImageLabelStyle.swift | Initially Modified: 06:31 PM Sun 10 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | TrailingImageLabelStyle.swift |      Last Modified: 06:35 PM Sun 10 Sep 2023
   /View/Shared/Style/LabelStyle/TrailingImageLabelStyle.swift
   Sun 10 Sep 2023
   __:__ PM | `` | ()
   #
*/

import SwiftUI

internal struct TrailingImageLabelStyle: LabelStyle {
    internal let imageOnly: Bool
    internal let foregroundColor: Color
    internal let backgroundColor: Color?

    internal func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: 2.0) {
            if !imageOnly {
                configuration.title
            }
            configuration.icon
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
