/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Consumer.swift | Initially Modified: 08:14 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Consumer.swift |      Last Modified: 08:16 PM Tue 12 Sep 2023
   /Shared/Model/Consumer.swift

   Swift
   - class

   Swift Playgrounds
 - file
 - folder

   Tue 12 Sep 2023
   __:__ PM | `` | ()
   #
 */

internal struct Consumer {
    internal var phone: String
    internal var mail: String
}

internal extension Consumer {
    internal enum Field: String, CaseIterable {
        case phone = "Номер телефона"
        case mail = "Почта"
    }
}
