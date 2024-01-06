import SwiftUI

internal struct ShouldPopToRoot: EnvironmentKey {
	static let defaultValue: Binding<Bool> = .constant(false)
}

extension EnvironmentValues {
	internal var shouldPopToRoot: Binding<Bool> {
		get {
			self[ShouldPopToRoot.self]
		}
		set {
			self[ShouldPopToRoot.self] = newValue
		}
	}
}

internal struct RootView: View {
	@State private var path: NavigationPath = .init()
	@State private var shouldPopToRoot: Bool = false

	internal init() {
		// Weird!
		UINavigationBar.appearance().backgroundColor = .white
		UINavigationBar.appearance().isTranslucent = false
		UINavigationBar.appearance().shadowImage = nil

		// Weird again!
		UIToolbar.appearance().backgroundColor = .white
		UIToolbar.appearance().isTranslucent = false
	}

	internal var body: some View {
		NavigationStack(path: $path) {
			HotelView()
				.navigationBarTitleDisplayMode(.inline)
				.navigationDestination(for: RootView.PresentedView.self) { requestedView in
					switch requestedView {
					case .room(let hotelName):
						RoomView(hotelName: hotelName)
					case .booking:
						BookingView()
					case .paidOrder:
						PaidOrderView()
					default:
						Text("default").monospaced(true)
					}
				}
				.onChange(of: shouldPopToRoot) {
					guard $0 else { return }
					shouldPopToRoot = false
					path.removeLast(path.count)
				}
		}
		.accentColor(.black)
		.preferredColorScheme(.light)
		.environment(\.backgroundStyle, .init(.xf6f6f9))
		.environment(\.shouldPopToRoot, $shouldPopToRoot)
	}
}
