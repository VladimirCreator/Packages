/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Tourist.swift | Initially Modified: 04:13 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Tourist.swift |      Last Modified: __:__ PM Tue 12 Sep 2023
   /Shared/Model/Tourist.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder

   Tue 12 Sep 2023
     __:__ PM | `` | ()
     #
*/

internal struct Tourist {
    internal var firstName: String
    internal var lastName: String

    internal var birthDate: String
    internal var citizenship: String

    internal var abroadPassportNumber: String
    internal var abroadPassportVailidityDate: String
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
