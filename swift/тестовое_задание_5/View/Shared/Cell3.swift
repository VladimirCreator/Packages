/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell3.swift | Initially Modified: 04:31 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell3.swift |      Last Modified: 04:48 PM Sat 9 Sep 2023
   /Views/Shared/Cell3.swift

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

internal struct Cell3: View {
    internal var body: some View {
        VStack(alignment: .leading, spacing: 8.0) {
            PageView(considerToChangeDistance: 0.1, urls: [
                "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg",
                "https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1250x703.jpg",
                "https://is3-ssl.mzstatic.com/image/thumb/UCZN3mY6yJIRxtxlPtxvPw/1250x703.jpg",
                "https://is5-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/1250x703.jpg"
            ])
            .frame(height: 257)
            InfoSection(verbatim1: "Стандартный с видом на бассйен или сад", verbatim2: nil, literal3: nil)
            
            NePridumalNazvanieLayout {
                ForEach(["Всё включено", "Кондиционер"], id: \.self) {
                    Label($0, systemImage: "")
                        .labelStyle(Issue1LabelStyle(verbatimOnly: true, foregroundColor: .x828796, backgroundColor: .xfbfbfc))
                        .padding(.trailing, 8.0)
                        .padding(.bottom, 8.0)
                }
                Label("Подробнее о номере", systemImage: "chevron.right")
                    .labelStyle(
                        TrailingImageLabelStyle(imageOnly: false, foregroundColor: .x0d72ff, backgroundColor: .xe7f1ff)
                    )
                    .padding(.trailing, 8.0)
                    .padding(.bottom, 8.0)
            }
            .padding(.bottom, 8.0)
            
            PriceSection(price: 186_600, description: "За 7 ночей с перелётом") {
                "\($0) ₽"
            }
            .padding(.bottom, 8.0)
            
            Button(action: {}) {
                Text("Выбрать номер")
            }
            .buttonStyle(.nePridumalNazvanie)
        }
    }
}
