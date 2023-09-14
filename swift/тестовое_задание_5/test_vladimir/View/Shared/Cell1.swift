/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift | Initially Modified: 02:36 PM Thu 7 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell1.swift |      Last Modified: __:__ PM Thu 7 Sep 2023
   /Views/Shared/Cell1.swift
   Thu 7 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct Cell1: View {
    internal let hotel: Hotel

    internal var body: some View {
        VStack(alignment: .leading, spacing: 16.0) {
            PageView(considerToChangeDistance: 0.1, urls: hotel.image_urls)
                .frame(height: 257)

            InfoSection(name: hotel.name, adress: hotel.adress, literal3: (5, "Превосходно"))
            PriceSection(minimal_price: hotel.minimal_price, price_for_it: hotel.price_for_it) {
                return "\($0.formatted()) ₽"
            }
        }
    }

    private var image: some View {
        RoundedRectangle(cornerRadius: 15.0, style: .circular)
            .aspectRatio(343/257, contentMode: .fill)
    }
}
