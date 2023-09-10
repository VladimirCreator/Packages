/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageEntryView.swift | Initially Modified: 12:52 PM Sat 09 Sep 2023
   -> 04:19 PM Last Modified: Add cornderRadius
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageEntryView.swift |      Last Modified: 01:18 PM Sat 09 Sep 2023
   /Views/Shared/PageView/PageEntryView.swift

   Swift
   - class

   Swift Playgrounds
   - file
   - folder

   Sat 9 Sep 2023
   12:51 PM | /Views/Shared/ -> /Views/Shared/PageView/ | (~)
   #folder
*/

import SwiftUI

internal struct PageEntryView: View {
    internal let url: URL

    internal var body: some View {
        AsyncImage(
            url: url,
            content: { image in
                image
                    .resizable()
                    .aspectRatio(343/257, contentMode: .fit)
                    .cornerRadius(15.0)
            },
            placeholder: { placeholder }
        )
    }

    internal var placeholder: some View { // Initially Modified: 12:54 PM Sat 9 Sep 2023
        Text("placeholder".capitalized)
            .font(.body)
    }
}
