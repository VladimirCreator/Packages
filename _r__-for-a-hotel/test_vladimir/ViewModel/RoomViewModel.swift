import Foundation
import Combine

internal class RoomViewModel: ObservableObject {
	@Published
	internal var room: Rooms = .zero
}
