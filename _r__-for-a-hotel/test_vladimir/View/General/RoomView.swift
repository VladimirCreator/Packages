import SwiftUI

internal struct RoomView: View {
	@Environment(\.backgroundStyle) private var background

	@StateObject private var roomViewModel: RoomViewModel = .init()
	internal let hotelName: String // Требование технического задания.

	internal var body: some View {
		ScrollView(.vertical, showsIndicators: false) {
			VStack(alignment: .center, spacing: 8.0) {
				ForEach(roomViewModel.room.rooms, id: \.id) { room in
					Card { Cell3(room: room) }
				}
			}
		}
		.background(background ?? .init(.clear))
		.navigationTitle(hotelName)
		.task {
			guard let room = try? await roomViewModel.fetch(Rooms.self, from: ROOM_URL) else {
				return
			}
			roomViewModel.room = room
		}
	}
}
