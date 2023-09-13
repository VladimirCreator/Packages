/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ArrayLayout.swift | Initially Modified: 12:08 PM Sat 9 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | ArrayLayout.swift |      Last Modified: 12:36 PM Sat 9 Sep 2023
   Sat 9 Sep 2023
     12:43 PM | Deprecate it. | ()
     #file
*/

import SwiftUI

internal struct ArrayLayout: Layout {
    internal func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize { // Last Modified: 12:33 PM Sat 9 PM 2023
        let maxHeight: CGFloat = subviews.max { // 12:11 PM Sat 9 Sep 2023
            $0.sizeThatFits(.unspecified).height > $1.sizeThatFits(.unspecified).height
        }!.sizeThatFits(proposal).height

        return subviews.reduce(CGSize.zero) { accumulator, view in
            return CGSize(
                width: accumulator.width + view.sizeThatFits(proposal).width,
                height: maxHeight
            )
        }
    }

    internal func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {  // Last Modified: 12:36 PM Sat 9 PM 2023
        var occupiedWidth: CGFloat = .zero

        subviews.forEach { view in
            let size: CGSize = view.sizeThatFits(proposal)

            view.place(
                at: CGPoint(x: bounds.origin.x + size.width / 2 + occupiedWidth, y: bounds.origin.y + size.height / 2),
                anchor: .center,
                proposal: proposal
            )
            occupiedWidth += size.width
        }
    }
}
