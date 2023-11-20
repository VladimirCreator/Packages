import SwiftUI

internal struct Hotel: Identifiable, Decodable {
	typealias ID = UInt
	internal let id: Self.ID

	internal let (name, adress): (String, String)

	internal let (minimalPrice, priceForIt): (UInt, String)

	internal let (rating, ratingName): (UInt, String)

	internal let imageUrls: [String]

	internal let aboutTheHotel: AboutTheHotel // `(String, [String])` does not conform to `Decodable` :(

	internal struct AboutTheHotel: Decodable {
		internal let description: String
		internal let peculiarities: [String]
	}
}
