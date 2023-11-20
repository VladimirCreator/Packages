internal struct Rooms: Decodable {
	internal let rooms: [Room]
}

extension Rooms {
	static let zero: Rooms = .init(rooms: [.zero])
}
