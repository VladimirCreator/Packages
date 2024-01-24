internal extension Booking {
	static let zero: Booking = .init(
		id: .zero,
		hotelName: "Имя отеля", hotelAdress: "Адрес отеля",
		horating: .zero,
		ratingName: "Оценка отеля",
		departure: "Вылет из",
		arrivalCountry: "Прибытие в",
		tourDateStart: "Today",
		tourDateStop: "Tomorrow",
		numberOfNights: .zero,
		room: "Описание номера",
		nutrition: "Описание питания",
		tourPrice: 1,
		fuelCharge: .zero,
		serviceCharge: .zero
	)
}
