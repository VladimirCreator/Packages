/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageIndicatorView.swift | Initially Modified: 01:33 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PageIndicatorView.swift |      Last Modified: __:__ PM Sat 9 Sep 2023
   /Views/Shared/PageView/PageIndicatorView.swift
   Sat 9 Sep 2023
     __:__ PM | `` | (+)
     #
*/

import SwiftUI

internal struct PageIndicatorView: View {
    internal let count: Int // 1:37 Sat 9 Sep 2023

    @Binding internal var selection: Int // 1:47 PM Sat 9 Sep 2023

    internal var body: some View {
        HStack(alignment: .center, spacing: 5.0) {
            ForEach(0..<count, id: \.self) { index in
                Circle()
                    .fill(
                        index == selection ? .black : .gray
                    )
                    .frame(width: 7.0, height: 7.0)
            }
        }
        .padding(.horizontal, 10.0)
        .padding(.vertical, 5.0)
        .background {
            Color.white
        }
        .cornerRadius(5.0)
        .padding(.bottom, 8.0)
    }
}
