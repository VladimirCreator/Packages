/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieDisclosureGroupStyle.swift | Initially Modified: 11:47 AM Sun 10 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieDisclosureGroupStyle.swift |      Last Modified: 11:49 AM Sun 10 Sep 2023
 /Views/Shared/Styles/NePridumalNazvanieDisclosureGroupStyle.swift
 Sun 10 Sep 2023
 : PM | `` | ()
 #
*/

import SwiftUI

internal struct NePridumalNazavanieDisclosureGroupStyle: DisclosureGroupStyle { // Initially: 11:17 PM Sat 9 Sep 2023
    internal let title: String
    internal let action: () -> ()

    internal func makeBody(configuration: Configuration) -> some View {
        Markup(title: title, description: nil) {
             configuration.content
                .frame(width: configuration.isExpanded ? nil : 0.0, height: configuration.isExpanded ? nil : 0.0)
                .clipped()
                .disabled(!configuration.isExpanded)
        } toolbar: {
            Button {
                withAnimation(.easeInOut(duration: 0.250)) {
                    configuration.isExpanded.toggle()
                    action()
                }
            } label: {
                Label {
                    EmptyView()
                } icon: {
                    Image(systemName: "chevron.up")
                        .rotationEffect(configuration.isExpanded ? .zero : .degrees(180.0), anchor: .center)
                }
            }
            .buttonStyle(.disclose)
        }
        .padding(.bottom, configuration.isExpanded ? 0.0 : -20.0)
    }
}
