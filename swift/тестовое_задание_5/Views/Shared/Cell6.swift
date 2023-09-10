/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift | Initially Modified: 09:07 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift |      Last Modified: __:__ PM Sat 9 Sep 2023
 /Views/Shared/Cell6.swift

 Swift
 - class
 
 Swift Playgrounds
 - file
 - folder
 
 Sat 9 Sep 2023
 __:__ PM | Cell6 -> Markup | (+)
 #
*/

import SwiftUI

internal struct Cell6: View {
    @State private var phoneNumber: String = ""
    @State private var email: String = ""

    internal var body: some View {
        Markup(
            title: "Информация о покупателе",
            description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту"
        ) {
            VStack(alignment: .leading, spacing: 8.0) {
                NePridumalNazvanieTextField(title: "Номер телефона", text: $phoneNumber)
                NePridumalNazvanieTextField(title: "Почта", text: $email)
            }
        } toolbar: {
            EmptyView()
        }
    }
}
