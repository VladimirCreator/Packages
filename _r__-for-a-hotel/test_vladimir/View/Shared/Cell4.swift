import SwiftUI

internal struct Cell4: View {
	internal let totalPrice: UInt
	internal let items: [(text: String, price: UInt)]

	internal var body: some View {
		VStack(alignment: .leading, spacing: 16.0) {
			ForEach(items, id: \.text) { item in
				HStack {
					Text(item.text)
						.textStyle(NePridumalNazvanieTextStyle(color: .x828796))
					Spacer()
					Text("\(item.price.formatted()) ₽")
						.gridColumnAlignment(.trailing)
				}
			}
			HStack {
				Text("К оплате")
					.textStyle(NePridumalNazvanieTextStyle(color: .x828796))
				Spacer()
				Text("\(totalPrice.formatted()) ₽")
					.fontWeight(.semibold)
					.textStyle(NePridumalNazvanieTextStyle(color: .x0d72ff))
					.gridColumnAlignment(.trailing)
			}
		}
	}
}
