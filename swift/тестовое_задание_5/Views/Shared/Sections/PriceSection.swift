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
    internal let price: Int
    internal let description: String
    internal let priceCallback: (Int) -> String // 09:12 PM Fri 8 Sep 2023

    internal var body: some View {
        HStack(alignment: .bottom, spacing: 8.0) {
            Text(priceCallback(price)) // 2:41 PM Thu 7 Sep 2023
                .font(.system(size: 30.0))
                .fontWeight(.semibold)
            
            Text(description) // 2:50 PM Thu 7 Sep 2023
                .font(.system(size: 16.0))
                .foregroundColor(.init(.sRGB, red: 0.51, green: 0.53, blue: 0.59))//.foregroundColor(Color("", bundle: nil)) // <- #828796
        }
    }
}
