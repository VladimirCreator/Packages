import SwiftUI

internal struct NePridumalNazavanieDisclosureGroupStyle: DisclosureGroupStyle {
	internal let title: String
	internal let action: () -> ()

	internal func makeBody(configuration: Configuration) -> some View {
		Markup(title: title, description: nil) {
			 configuration.content
				.frame(width: configuration.isExpanded ? nil : 0.0, height: configuration.isExpanded ? nil : 0.0)
				.clipped()
				.disabled(!configuration.isExpanded)
		}
		toolbar: {
			Button {
				withAnimation(.easeInOut(duration: 0.250)) {
					configuration.isExpanded.toggle()
					action()
				}
			} label: {
				Label { EmptyView() } icon: {
					Image(systemName: "chevron.up")
						.rotationEffect(configuration.isExpanded ? .zero : .degrees(180.0), anchor: .center)
				}
			}
			.buttonStyle(.disclose)
		}
		.padding(.bottom, configuration.isExpanded ? 0.0 : -20.0)
	}
}
