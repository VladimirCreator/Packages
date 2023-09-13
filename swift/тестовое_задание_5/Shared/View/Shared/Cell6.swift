/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift | Initially Modified: 09:07 PM Sat 9 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell6.swift |      Last Modified: 08:20 PM Tue 12 Sep 2023
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

internal class PhoneNumberFormatter: Formatter { // 08:32 PM TUe 12 Sep 2023
    internal override func string(for obj: Any?) -> String? {
        guard var string = obj as? String else { return nil }
        guard string.count != 0 else { return nil }

        var template: String = "+7 (***) ***-**-**"
return template
        return template.reduce(template) { accumulator, character in
            if character == "*" {
                return accumulator.replacing("*", with: string.remove(at: string.startIndex).lowercased(), maxReplacements: 1)
            }
            return accumulator
        }
    }

    internal override func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool {
        obj?.pointee = string as AnyObject?
        return true
    }
}

internal struct Cell6: View {
    @Binding internal var consumer: Consumer // 08:19 PM Tue 12 Sep 2023
    private var formatted: String { // 02:47 AM Wed 13 Sep 2023
        consumer.phone.reduce("+7 (***) ***-**-**") {
            guard $1.isNumber else { return $0 }
            return $0.replacing(/\*/, with: [$1], maxReplacements: 1)
        }
    }

    @FocusState private var focused: Bool // 01:40 AM Wed 13 Sep 2023

    internal var body: some View {
        Markup(
            title: "Информация о покупателе",
            description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту"
        ) {
            VStack(alignment: .leading, spacing: 8.0) {
                NePridumalNazvanieTextField(
                    title: Consumer.Field.phone.rawValue,
                    formatter: nil,
                    text: $consumer.phone
                ) {
                    Text(formatted)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .foregroundColor(.black)
                            .opacity(focused || consumer.phone.count != 0 ? 1.0 : 0.0)
                }
                .foregroundColor(.clear)
                .focused($focused)

                NePridumalNazvanieTextField(
                    title: Consumer.Field.mail.rawValue,
                    formatter: nil,
                    text: $consumer.mail
                ) { EmptyView() }
            }
        } toolbar: {
            EmptyView()
        }
    }
}
