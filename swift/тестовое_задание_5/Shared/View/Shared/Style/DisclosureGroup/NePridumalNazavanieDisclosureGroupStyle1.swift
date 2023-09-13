// Initially 12:32 Sep 10 last

import SwiftUI

internal struct NePridumalNazavanieDisclosureGroupStyle1: DisclosureGroupStyle {
    internal let action: () -> () // Initially: 7:32 PM Sun 10 Sep 2023

    internal func makeBody(configuration: Configuration) -> some View {
        Markup(title: "Добавить туриста", description: nil) {
            configuration.content
                .frame(height: configuration.isExpanded ? nil : 0.0)
                .clipped()
        } toolbar: {
            Button {
                withAnimation(.easeInOut(duration: 0.25)) {
                    action()
                }
            } label: {
                Label {
                    EmptyView()
                } icon: {
                    Image(systemName: "plus")
                }
            }
            .buttonStyle(.append)
        }
    }
}
