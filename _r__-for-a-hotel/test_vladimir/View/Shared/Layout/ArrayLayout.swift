import SwiftUI

internal struct ArrayLayout: Layout {
	internal func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
		let maxHeight: CGFloat = subviews.max {
			$0.sizeThatFits(.unspecified).height > $1.sizeThatFits(.unspecified).height
		}!.sizeThatFits(proposal).height

		return subviews.reduce(CGSize.zero) { accumulator, view in
			return CGSize(
				width: accumulator.width + view.sizeThatFits(proposal).width,
				height: maxHeight
			)
		}
	}

	internal func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
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
