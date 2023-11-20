import SwiftUI

internal struct Issue1LabelStyle: LabelStyle {
	internal let verbatimOnly: Bool
	internal let foregroundColor: Color
	internal let backgroundColor: Color?

	internal func makeBody(configuration: Configuration) -> some View {
		HStack(spacing: 2.0) {
			if !verbatimOnly { configuration.icon }
			configuration.title
		}
		.font(.system(size: 16.0)).fontWeight(.medium)
		.padding(.horizontal, 10.0).padding(.vertical, 5.0)
		.foregroundColor(foregroundColor)
		.background {
			backgroundColor ?? foregroundColor.opacity(0.2)
		}
		.cornerRadius(5.0)
	}
}
