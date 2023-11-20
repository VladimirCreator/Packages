import SwiftUI

internal struct TrailingImageLabelStyle: LabelStyle {
	internal let imageOnly: Bool
	internal let foregroundColor: Color
	internal let backgroundColor: Color?

	internal func makeBody(configuration: Configuration) -> some View {
		HStack(spacing: 2.0) {
			if !imageOnly { configuration.title }
			configuration.icon
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
