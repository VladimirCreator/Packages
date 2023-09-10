/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift | Initially Modified: 02:36 PM Thu 7 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift |      Last Modified: __:__ PM Thu 7 Sep 2023
   /Views/Shared/Cell1.swift
 
   Swift
     - class
 
   Swift Playgrounds
     - file
     - folder
 
   Thu 7 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct Cell1: View {
    private let name: String = "Лучший пятизвездочный отель в Хургаде, Египет"
    private let rating: UInt = 5
    private let rating_name: String = "Превосходно"
    private let address: String = "Madinat Makadi, Safaga Road, Makadi Bay, Египет"
    
    internal var body: some View {
        VStack(alignment: .leading, spacing: 16.0) {
            PageView(considerToChangeDistance: 0.1, urls: [
                "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg",
                "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg",
                "https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1250x703.jpg",
                "https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1250x703.jpg"
            ])
            .frame(height: 257)
            InfoSection(verbatim1: "Steigenberger Makadi", verbatim2: "Madinat Makadi, Safaga Road, Makadi Bay, Египет", literal3: (5, "Превосходно"))
            PriceSection(price: 134_673, description: "за тур с перелётом") {
                return "\($0.formatted()) ₽"
            }
        }
    }
    
    private var image: some View {
        RoundedRectangle(cornerRadius: 15.0, style: .circular)
            .aspectRatio(343/257, contentMode: .fill)
    }
}
