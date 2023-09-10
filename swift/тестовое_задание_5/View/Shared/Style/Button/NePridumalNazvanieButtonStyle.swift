/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift | Initially Modified: 08:10 PM Tue 5 Sep 2023
   ->               | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift |           Modified: 12:12 PM Fri 8 Sep 2023 // форматирование 
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NePridumalNazvanieStyle.swift |      Last Modified: 02:00 PM Thu 7 Sep 2023
   /Views/Shared/Styles/NePridumalNazvanieStyle.swift
 
   Swift
     - class
 
   Swift Playgrounds
     - file
     - folder
 
   Tue 5 Sep 2023
     09:16 PM | NePridumalNazvanieStyle.swift -> NePridumalNazvanieButtonStyle.swift | (~)
     #
*/

import SwiftUI

internal struct NePridumalNazvanieButtonStyle: ButtonStyle {
    internal func makeBody(configuration: Configuration) -> some View {
        return configuration.label
            // ...
            .font(
                .system(size: 16.0, weight: .medium)
            )
            // ...
            .frame(maxWidth: .infinity)
            .padding(.vertical, 15.0)
            // ...
            .foregroundColor(.white)
            .background {
                Color(.sRGB, red: 0.051, green: 0.447, blue: 1.0)
                Color("sky-500", bundle: nil) // <- #0D72FF
            }
            // ...
            .cornerRadius(15.0)
    }
}
