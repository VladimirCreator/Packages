import SwiftUI

internal struct PrototypeView: View {
	@State private var index: Int = 2
	@State private var key: String = "AnyView"

	private var views: [String: AnyView] { [/* See examples in git history. */] }

	internal var body: some View {
		NavigationStack {
			TabView(selection: $key) {
				ForEach(views.keys.sorted(), id: \.self) {
					views[$0]
						.background(.orange)
						.frame(maxWidth: .infinity, maxHeight: .infinity)
						.background(.red)
						.toolbar {
							ToolbarItem(placement: .automatic) { picker }
						}
						.tabItem { Text(key) }
						.tag($0)
				}
			}
			.tabViewStyle(.page)
			.navigationTitle(key)
		}
	}

	private var picker: some View {
		Picker("View", selection: $key) {
			ForEach(views.keys.sorted(), id: \.self) { key in
				Label(key, systemImage: "command")
					.labelStyle(.titleOnly)
			}
		}
		.pickerStyle(.menu)
	}
}
