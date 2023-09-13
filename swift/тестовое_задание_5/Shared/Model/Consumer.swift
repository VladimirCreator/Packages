/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Consumer.swift | Initially Modified: 08:14 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Consumer.swift |      Last Modified: 08:16 PM Tue 12 Sep 2023
   /Shared/Model/Consumer.swift
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

    internal static let zero: Consumer = .init(phone: "Номер телефона", mail: "Почта") // Initially Modified: 09:52 AM Wed 13 Sep 2023
}
