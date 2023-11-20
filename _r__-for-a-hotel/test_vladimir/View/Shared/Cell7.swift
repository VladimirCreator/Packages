import SwiftUI

internal struct Cell7<Content>: View where Content : View {
	@State private var isExpanded: Bool = false

	internal let content: () -> Content

	internal var body: some View {
		DisclosureGroup("", isExpanded: $isExpanded) {
			content()
		}
	}
}
