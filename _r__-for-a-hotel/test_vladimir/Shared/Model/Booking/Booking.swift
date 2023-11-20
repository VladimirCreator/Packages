internal struct Booking: Identifiable, Decodable {
	internal typealias ID = UInt

	internal let id: Self.ID

	internal let (hotelName, hotelAdress): (String, String)

	internal let (horating, ratingName): (UInt, String)

	internal let (departure, arrivalCountry): (String, String)

	internal let (tourDateStart, tourDateStop): (String, String)

	internal let numberOfNights: UInt
	internal let room: String

	internal let nutrition: String

	internal let (tourPrice, fuelCharge, serviceCharge): (UInt, UInt, UInt)
}
