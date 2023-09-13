/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfiSection.swift | Initially Modified: 09:16 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | InfoSection.swift |      Last Modified: 11:40 PM Fri 8 Sep 2023
   /Views/Shared/Sections/PriceSection.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Fri 8 Sep 2023
     11:22 PM | /Views/Shared/ -> /Views/Shared/Sections | (~)
     #file
*/

import SwiftUI

internal struct InfoSection: View {
    internal let name: String
    internal let adress: String?
    internal let literal3: (value: UInt, name: String)?

    internal var body: some View {
        VStack(alignment: .leading, spacing: 8.0) {
            issue1
            issue2
            issue3
        }
    }

    private var issue1: some View { // Initially Modified: _4:56 PM Sun 10 Sep 2023
        guard let literal3 else { return EmptyView() }
        let verbatim1: String = "\(literal3.value) \(literal3.name)"
        let verbatim2: String = "star.fill"

        return Label(verbatim1, systemImage: verbatim2)
            .labelStyle(Issue1LabelStyle(verbatimOnly: false, foregroundColor: .xffa800, backgroundColor: nil))
    }

    private var issue2: some View { // Initially Modified: _5:08 PM Sun 10 Sep 2023
        Text(name)
            .textStyle(Issue1TextStyle())
    }

    private var issue3: some View { // Initially Modified: _5:08 PM Sun 10 Sep 2023
        guard let adress else { return EmptyView() }

        // Оказывается, техническое задание утверждает, что эта надпись является кнопкой.
        //return Text(adress)
            //.textStyle(Issue2TextStyle())
        return Button(action: { print(true) }) {
            Text(adress)
                .textStyle(Issue2TextStyle())
        }
    }
}
