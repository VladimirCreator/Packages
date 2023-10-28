/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift | Initially Modified: 08:44 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift |      Last Modified: 09:16 PM Sat 9 Sep 2023
 /Views/Shared/Cell6.swift
 Sat 9 Sep 2023
 08:50 PM | Cell6 -> Markup | (+)
 #
*/

import SwiftUI

internal struct Markup<Content, Toolbar>: View where Content : View, Toolbar : View {
    internal let title: String
    internal let description: String?
    internal let content: () -> Content
    internal let toolbar: () -> Toolbar

    internal var body: some View {
        VStack(alignment: .leading, spacing: 20.0) {
            HStack {
                Text(title)
                    .textStyle(NePridumalNazvanieTextStyle1())
                Spacer()
                toolbar()
            }

            content()

            if let description {
                Text(description)
                    .textStyle(NePridumalNazvanieTextStyle2())
                    .padding(.top, -12.0)
            }
        }
    }
}
