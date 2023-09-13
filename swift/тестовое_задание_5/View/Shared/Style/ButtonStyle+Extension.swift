/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ButtonStyle+Extension.swift | Initially Modified: 01:59 PM Thu 7 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ButtonStyle+Extension.swift |      Last Modified: 01:59 PM Thu 7 Sep 2023
   /Views/Shared/Styles/ButtonStyle+Extension.swift
   Thu 7 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal extension ButtonStyle where Self == NePridumalNazvanieButtonStyle {
    internal static var nePridumalNazvanie: NePridumalNazvanieButtonStyle {
        get {
            return NePridumalNazvanieButtonStyle()
        }
    }

    internal static var disclose: NePridumalNazvanieButtonStyle1 { // Initially: 11:41 AM Sun 10 Sep 2023
        get {
            let color: Color = .x0d72ff

            return NePridumalNazvanieButtonStyle1(
                foregroundColor: color,
                backgroundColor: color.opacity(0.1)
            )
        }
    }

    internal static var append: NePridumalNazvanieButtonStyle1 { // Initially: 11:45 AM Sun 10 Sep 2023
        get {
            let color: Color = .x0d72ff

            return NePridumalNazvanieButtonStyle1(
                foregroundColor: .white,
                backgroundColor: color
            )
        }
    }
}
