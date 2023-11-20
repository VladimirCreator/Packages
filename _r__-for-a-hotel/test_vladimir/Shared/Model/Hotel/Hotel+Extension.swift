extension Hotel {
	static let zero: Hotel = .init(
		id: .zero,
		name: "Название отеля",
		adress: "Адрес отеля",
		minimalPrice: .zero,
		priceForIt: "Описание цены",
		rating: .zero,
		ratingName: "Описание рейтинга",
		imageUrls: ["https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg"],
		aboutTheHotel: .init(
			description: "Описание отеля.",
			peculiarities: ["Особенность отеля №1"]
		)
	)
}
