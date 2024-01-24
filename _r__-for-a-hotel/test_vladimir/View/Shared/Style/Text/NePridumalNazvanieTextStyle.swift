import SwiftUI

internal struct NePridumalNazvanieTextStyle: ViewModifier {
	internal let color: Color

	internal func body(content: Content) -> some View {
		content.font(.system(size: 16.0))
			.foregroundColor(color)
	}
}
