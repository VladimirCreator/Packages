internal struct Room: Identifiable, Decodable {
	typealias ID = UInt
	let id: Self.ID

	let name: String
	let (price, pricePer): (UInt, String)

	let peculiarities: [String]

	let imageUrls: [String]
}
