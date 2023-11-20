import SwiftUI

internal struct Issue2TextStyle: ViewModifier {
	internal func body(content: Content) -> some View {
		content.font(.system(size: 14))
			.fontWeight(.medium)
			.foregroundColor(.x0d72ff)
	}
}
