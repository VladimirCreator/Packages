/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Tourist.swift | Initially Modified: 04:13 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Tourist.swift |      Last Modified: 10:04 AM Wed 13 Sep 2023
   /Shared/Model/Tourist.swift
   Tue 12 Sep 2023
     __:__ PM | `` | ()
     #
*/

internal struct Tourist {
    internal var (firstName, lastName): (String, String)

    internal var birthDate: String
    internal var citizenship: String

    internal var (abroadPassportNumber, abroadPassportVailidityDate): (String, String)
}

internal extension Tourist { // Initially Modified: 04:34 PM Tue 12 Sep 2023
    internal enum Field: String, CaseIterable {
        case firstName = "Имя"
        case lastName = "Фамилия"
        case birthDate = "Дата рождения"
        case citizenship = "Гражданство"
        case abroadPassportNumber = "Номер загранпаспорта"
        case abroadPassportVailidityDate = "Срок действия загранпаспорта"
    }
}
