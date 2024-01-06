import SwiftUI

internal struct PageIndicatorView: View {
	internal let count: Int

	@Binding internal var selection: Int

	internal var body: some View {
		HStack(alignment: .center, spacing: 5.0) {
			ForEach(0..<count, id: \.self) { index in
				Circle()
					.fill(index == selection ? .black : .gray)
					.frame(width: 7.0, height: 7.0)
			}
		}
		.padding(.horizontal, 10.0).padding(.vertical, 5.0)
		.background(Color.white)
		.cornerRadius(5.0)
		.padding(.bottom, 8.0)
	}
}
