import SwiftUI

internal struct Card<Content>: View where Content : View {
	internal let content: () -> Content

	internal var body: some View {
		content()
			.padding(16.0)
			.background(.white)
			.cornerRadius(12.0)
	}
}
