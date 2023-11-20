import SwiftUI

/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | _ | View.swift | Initially Modified: 01:45 PM Wed 6 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | _ | View.swift |      Last Modified: 06:08 PM Fri 08 Seo 2023
 Wed 6 Seo 2023
 __:__ _M | `private Recipe` | (+)
 #typealias
 */

internal struct NePridumalNazvanieLayout: Layout {
    // This is code is not safe!
    // The Reason: It assumes that `proposal.width` is not `nil`.
    internal func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        guard let availableWidth: CGFloat = proposal.width else { fatalError("`proposal.width` is `nil`") }

        var heights: Set<CGFloat> = []
        var occupiedWidth: CGFloat = .zero
        return subviews.reduce(CGSize.zero) { accumulator, view in
            let size: CGSize = view.sizeThatFits(proposal)
            occupiedWidth += size.width
            heights.insert(size.height)
                let biggestHeightInRow = heights.max()
            if occupiedWidth > availableWidth {
                occupiedWidth = size.width
                return CGSize(width: availableWidth, height: accumulator.height + biggestHeightInRow!)
            }
            return CGSize(width: availableWidth, height: accumulator.height == .zero ? biggestHeightInRow! : accumulator.height)
        }
    }

    internal func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        var occupiedWidth: CGFloat = .zero
        var occupiedHeight: CGFloat = .zero

        for i in subviews.indices {
            let size = subviews[i].sizeThatFits(proposal)
            if occupiedWidth + size.width > bounds.width {
                occupiedWidth = .zero; occupiedHeight += size.height
            }

            let x = bounds.origin.x + size.width / 2 + occupiedWidth
            let y = bounds.origin.y + size.height / 2 + occupiedHeight

            subviews[i].place(at: .init(x: x, y: y), anchor: .center, proposal: proposal)
            occupiedWidth += size.width
        }
    }
}
