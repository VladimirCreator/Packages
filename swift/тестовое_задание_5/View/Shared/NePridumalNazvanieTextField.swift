/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift | Initially Modified: 09:25 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieTextField.swift |      Last Modified: 10:49 PM Sat 9 Sep 2023
 /Views/Shared/NePridumalNazvanieTextField.swift

 Swift
 - class

 Swift Playgrounds
 - file
 - folder
 
 Sat 9 Sep 2023
 __:__ PM | `` | ()
 #
*/

import SwiftUI

internal struct NePridumalNazvanieTextField: View {
    internal let title: String
    @Binding internal var text: String
    
    internal var body: some View {
        VStack(alignment: .leading, spacing: 0.0) {
            if !text.isEmpty {
                prompt
                    .font(
                        .system(size: 12.0)
                    )
            }
            TextField(
                title,
                text: $text,
                prompt: prompt.font(
                    .system(size: 17.0)
                )
            )
        }
        .padding(.horizontal, 16.0)
        .padding(.vertical, text.isEmpty ? 16.0 : 10.0)
        .background {
            RoundedRectangle(cornerRadius: 10.0, style: .circular)
                .fill(Color(.sRGB, red: 0.96, green: 0.96, blue: 0.98)) // <- #F6F6F9
        }
    }

    private var prompt: Text { // 10:33 PM Sat 9 Sep 2023
        Text(title)
            .foregroundColor(Color(.sRGB, red: 0.66, green: 0.67, blue: 0.72)) // <- #A9ABB7
    }
}
