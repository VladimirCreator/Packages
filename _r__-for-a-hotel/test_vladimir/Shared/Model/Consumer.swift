internal struct Consumer {
	internal var phone: String
	internal var mail: String
}

internal extension Consumer {
	internal enum Field: String, CaseIterable {
		case phone = "Номер телефона"
		case mail = "Почта"
	}

	internal static let zero: Consumer = .init(phone: "Номер телефона", mail: "Почта")
}
