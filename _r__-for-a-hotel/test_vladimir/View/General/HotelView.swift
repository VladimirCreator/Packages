import SwiftUI

internal struct HotelView: View {
	@Environment(\.backgroundStyle) private var background

	@StateObject private var hotelViewModel: HotelViewModel = .init()

	internal var body: some View {
		ScrollView {
			Card { Cell1(hotel: hotelViewModel.hotel) }
			Card { Cell2(hotel: hotelViewModel.hotel) }
		}
		.background(background ?? .init(.clear))
		.navigationTitle("Отель")
		.toolbar {
			ToolbarItem(placement: .bottomBar) { pickRoomButton }
		}
		.task {
			guard let hotel = try? await hotelViewModel.fetch(Hotel.self, from: HOTEL_URL) else { return }
			hotelViewModel.hotel = hotel
		}
	}

	private var pickRoomButton: some View {
		let hotelName: String = hotelViewModel.hotel.name

		return NavigationLink(value: RootView.PresentedView.room(hotelName)) {
			Text("К выбору номера")
		}
		.buttonStyle(.nePridumalNazvanie)
	}
}
