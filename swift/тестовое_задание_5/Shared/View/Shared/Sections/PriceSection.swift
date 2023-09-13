/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PriceSection.swift | Initially Modified: 09:01 PM Fri 8 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PriceSection.swift |      Last Modified: 09:16 PM Fri 8 Sep 2023
   /Views/Shared/Sections/PriceSection.swift

   Swift
     - class

   Swift Playgrounds
     - file
     - folder

   Fri 8 Sep 2023
     09:36 PM | /Views/Shared/ -> /Views/Shared/Sections/ | (+)
     #file
*/

import SwiftUI

internal struct PriceSection: View {
    internal let minimal_price: UInt
    internal let price_for_it: String
    internal let price_for_it_strategy: (UInt) -> String // 09:12 PM Fri 8 Sep 2023

    internal var body: some View {
        HStack(alignment: .bottom, spacing: 8.0) {
            Text(price_for_it_strategy(minimal_price)) // 2:41 PM Thu 7 Sep 2023
                .font(.system(size: 30.0))
                .fontWeight(.semibold)

            Text(price_for_it) // 2:50 PM Thu 7 Sep 2023
                .font(.system(size: 16.0))
                .foregroundColor(.x828796)
        }
    }
}
