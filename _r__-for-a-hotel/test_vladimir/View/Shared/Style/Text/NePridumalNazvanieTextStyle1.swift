import SwiftUI

internal struct NePridumalNazvanieTextStyle1: ViewModifier {
	internal func body(content: Content) -> some View {
		content.font(.system(size: 22.0))
			.fontWeight(.medium)
	}
}
