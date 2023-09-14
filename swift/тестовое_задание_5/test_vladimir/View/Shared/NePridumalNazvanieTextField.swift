/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift | Initially Modified: 09:25 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift |      Last Modified: 10:49 PM Sat 9 Sep 2023
 /Views/Shared/NePridumalNazvanieTextField.swift
 Sat 9 Sep 2023
 __:__ PM | `` | ()
 #
*/

import SwiftUI

internal class IdleFormatter: Formatter { // Initially Modified: 09:04 PM Tue 12 Sep 2023
                                          // Initially Modified: 09:09 PM Tue 12 Sep 2023
    internal override func string(for obj: Any?) -> String? {
        guard let string = obj as? String else { return nil }
        return string
    }

    internal override func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool { // 09:09 PM Tue 12 Sep 2023
        obj?.pointee = string as AnyObject? // What is this? Well, -> https://developer.apple.com/documentation/foundation/formatter/1408927-getobjectvalue
        return true
    }
}

internal struct NePridumalNazvanieTextField<Overlay>: View where Overlay : View {
    internal let title: String
    internal let formatter: Formatter? // Initially Modified: 08:27 PM Tue 12 Sep 20233
    @Binding internal var text: String

    internal let overlay: (() -> Overlay)?

    @FocusState private var isFocused: Bool // 12:27 AM Wed 12 Sep 2023

    internal var body: some View {
        VStack(alignment: .leading, spacing: 0.0) {
            if text.count != 0 || isFocused {
                prompt
                    .font(
                        .system(size: 12.0)
                    )
            }
            TextField(text: $text) {
                isFocused ? Text("") : prompt.font(
                    .system(size: 17.0)
                )
            }
            .overlay {
                if let overlay {
                    overlay()
                }
            }
            .focused($isFocused)
        }
        .padding(.horizontal, 16.0)
        .padding(.vertical, !isFocused && text.count == 0 ? 16.0 : 10.0)
        .background {
            RoundedRectangle(cornerRadius: 10.0, style: .circular)
                .fill(.xf6f6f9)
        }
    }

    private var prompt: Text { // 10:33 PM Sat 9 Sep 2023
        Text(title)
            .foregroundColor(.xa9abb7)
    }
}
