import SwiftUI

internal struct PageView: View {
	internal let considerToChangeDistance: Double
	@State private var gestureProgress: CGFloat = 0
	@State private var urlIndex: Int = 0
	internal let urls: [String]

	@State private var progress: Double = .zero

	internal var body: some View {
		ZStack(alignment: .bottom) {
			ScrollViewReader { reader in
				ScrollView(.horizontal, showsIndicators: false) {
					HStack {
						ForEach(urls.enumerated().sorted { $0.offset < $1.offset }, id: \.offset) { tuple in
							if let url = URL(string: tuple.element) {
								PageEntryView(url: url)
							}
						}
					}
					.gesture(
						DragGesture(minimumDistance: 0.0)
							.onChanged {
								let traveledDistance: Double
								if gestureProgress < 1.0 {
									traveledDistance = 1 - gestureProgress
								}
								else {
									traveledDistance = gestureProgress - 1
								}

								progress = traveledDistance / considerToChangeDistance * 100
								gestureProgress = $0.location.x / $0.startLocation.x
							}
							.onEnded { _ in
								urlIndex += gestureProgress < 1.0 ? 1 : -1
							}
						// 100% = 0.1
						// x%   = 0.01
						//
						// 1.0 = 0.1
						// x%  = 0.01
						// 0.1 * x = 0.01
						//
						// x = 0.1 * 100 = 10%
					)
				}
				.onChange(of: urlIndex) { index in
					reader.scrollTo(index, anchor: .center)
				}
			}
			.cornerRadius(15.0)
			PageIndicatorView(count: urls.count, selection: $urlIndex)
		}
	}
}
