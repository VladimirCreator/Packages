import SwiftUI

internal class IdleFormatter: Formatter {
	internal override func string(for obj: Any?) -> String? {
		guard let string = obj as? String else { return nil }
		return string
	}

	internal override func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool { // 09:09 PM Tue 12 Sep 2023
		obj?.pointee = string as AnyObject? // What is this? Well, -> https://developer.apple.com/documentation/foundation/formatter/1408927-getobjectvalue
		return true
	}
}

internal struct NePridumalNazvanieTextField<Overlay>: View where Overlay : View {
	internal let title: String
	internal let formatter: Formatter?
	@Binding internal var text: String

	internal let overlay: (() -> Overlay)?

	@FocusState private var isFocused: Bool

	internal var body: some View {
		VStack(alignment: .leading, spacing: 0.0) {
			if text.count != 0 || isFocused {
				prompt.font(.system(size: 12.0))
			}
			TextField(text: $text) {
				isFocused ? Text("") : prompt.font(
					.system(size: 17.0)
				)
			}
			.overlay {
				if let overlay { overlay() }
			}
			.focused($isFocused)
		}
		.padding(.horizontal, 16.0).padding(.vertical, !isFocused && text.count == 0 ? 16.0 : 10.0)
		.background {
			RoundedRectangle(cornerRadius: 10.0, style: .circular).fill(.xf6f6f9)
		}
	}

	private var prompt: Text {
		Text(title).foregroundColor(.xa9abb7)
	}
}
