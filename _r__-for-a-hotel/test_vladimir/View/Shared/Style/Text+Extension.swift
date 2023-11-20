import SwiftUI

internal extension Text {
	internal func textStyle<Style: ViewModifier>(_ style: Style) -> some View {
		ModifiedContent(content: self, modifier: style)
	}
}
