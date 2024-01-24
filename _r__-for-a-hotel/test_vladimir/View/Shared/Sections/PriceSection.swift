import SwiftUI

internal struct PriceSection: View {
	internal let minimalPrice: UInt
	internal let priceForIt: String
	internal let priceForItStrategy: (UInt) -> String

	internal var body: some View {
		HStack(alignment: .lastTextBaseline, spacing: 8.0) {
			Text(priceForItStrategy(minimalPrice))
				.font(.system(size: 30.0)).fontWeight(.semibold)

			Text(priceForIt)
				.font(.system(size: 16.0))
				.foregroundColor(.x828796)
		}
	}
}
