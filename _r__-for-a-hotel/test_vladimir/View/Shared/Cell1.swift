import SwiftUI

internal struct Cell1: View {
	internal let hotel: Hotel

	internal var body: some View {
		VStack(alignment: .leading, spacing: 16.0) {
			PageView(considerToChangeDistance: 0.1, urls: hotel.imageUrls)
				.frame(height: 257)

			InfoSection(name: hotel.name, adress: hotel.adress, literal3: (5, "Превосходно"))
			PriceSection(minimalPrice: hotel.minimalPrice, priceForIt: hotel.priceForIt) {
				return "\($0.formatted()) ₽"
			}
		}
	}

	private var image: some View {
		RoundedRectangle(cornerRadius: 15.0, style: .circular)
			.aspectRatio(343/257, contentMode: .fill)
	}
}
