import SwiftUI

internal struct Cell3: View {
	internal let room: Room

	internal var body: some View {
		VStack(alignment: .leading, spacing: 8.0) {
			PageView(considerToChangeDistance: 0.1, urls: room.imageUrls)
				.frame(height: 257)
			InfoSection(name: room.name, adress: nil, literal3: nil)

			NePridumalNazvanieLayout {
				ForEach(room.peculiarities, id: \.self) {
					Label($0, systemImage: "square")
						.labelStyle(
							Issue1LabelStyle(
								verbatimOnly: true,
								foregroundColor: .x828796, backgroundColor: .xfbfbfc
							)
						)
						.padding(.trailing, 8.0).padding(.bottom, 8.0)
				}
				Button {} label: {
					Label("Подробнее о номере", systemImage: "chevron.right")
						.labelStyle(
							TrailingImageLabelStyle(imageOnly: false, foregroundColor: .x0d72ff, backgroundColor: .xe7f1ff)
						)
						.padding(.trailing, 8.0).padding(.bottom, 8.0)
				}
			}
			.padding(.bottom, 8.0)

			PriceSection(minimalPrice: room.price, priceForIt: room.pricePer) {
				"\($0.formatted()) ₽"
			}
			.padding(.bottom, 8.0)

			NavigationLink(value: RootView.PresentedView.booking) {
				Text("Выбрать номер")
			}
			.buttonStyle(.nePridumalNazvanie)
		}
	}
}
