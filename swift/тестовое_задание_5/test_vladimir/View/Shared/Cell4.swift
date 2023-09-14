/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell4.swift | Initially Modified: 04:53 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell4.swift |      Last Modified: 08:19 PM Sat 9 Sep 2023
   /Views/Shared/Cell4.swift
 Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct Cell4: View {
    internal let totalPrice: UInt // Initially Modified: 8:13 PM Sat 9 Sep 2023
    internal let items: [(text: String, price: UInt)]

    internal var body: some View {
        VStack(alignment: .leading, spacing: 16.0) {
            ForEach(items, id: \.text) { item in
                HStack {
                    Text(item.text)
                        .textStyle(NePridumalNazvanieTextStyle(color: .x828796))
                    Spacer()
                    Text("\(item.price.formatted()) ₽")
                        .gridColumnAlignment(.trailing)
                }
            }
            HStack {
                Text("К оплате")
                    .textStyle(NePridumalNazvanieTextStyle(color: .x828796))
                Spacer()
                Text("\(totalPrice.formatted()) ₽")
                    .fontWeight(.semibold)
                    .textStyle(NePridumalNazvanieTextStyle(color: .x0d72ff))
                    .gridColumnAlignment(.trailing)
            }
        }
    }
}
