internal struct Tourist {
	internal var (firstName, lastName): (String, String)

	internal var birthDate: String
	internal var citizenship: String

	internal var (abroadPassportNumber, abroadPassportVailidityDate): (String, String)
}

internal extension Tourist {
	internal enum Field: String, CaseIterable {
		case firstName = "Имя"
		case lastName = "Фамилия"
		case birthDate = "Дата рождения"
		case citizenship = "Гражданство"
		case abroadPassportNumber = "Номер загранпаспорта"
		case abroadPassportVailidityDate = "Срок действия загранпаспорта"
	}
}
