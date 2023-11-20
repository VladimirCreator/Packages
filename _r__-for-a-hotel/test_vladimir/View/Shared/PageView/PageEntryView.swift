import SwiftUI

internal struct PageEntryView: View {
	internal let url: URL

	internal var body: some View {
		AsyncImage(
			url: url, content: { image in
				image.resizable()
					.aspectRatio(343/257, contentMode: .fit)
					.cornerRadius(15.0)
			},
			placeholder: { placeholder }
		)
	}

	internal var placeholder: some View {
		Text("placeholder".capitalized).font(.body)
	}
}
