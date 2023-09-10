/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell5.swift | Initially Modified: 08:23 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell5.swift |      Last Modified: 08:31 PM Sat 9 Sep 2023
   /Views/Shared/Cell5.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder
 
   Sat 9 Sep 2023
   __:__ PM | `` | (+)
   #
*/

import SwiftUI

internal struct Cell5: View {
    internal let info: [(label: String, info: String)] // 8:27 Pm Sat 9 Sep 2023

    internal var body: some View {
        Grid(alignment: .leading, verticalSpacing: 16.0) {
            ForEach(info, id: \.label) { item in
                GridRow {
                    Text(item.label)
                        .textStyle(NePridumalNazvanieTextStyle(color: Color(.sRGB, red: 0.51, green: 0.53, blue: 0.59)))
                    Text(item.info)
                        .textStyle(NePridumalNazvanieTextStyle(color: .black))
                }
            }
        }
    }
}
