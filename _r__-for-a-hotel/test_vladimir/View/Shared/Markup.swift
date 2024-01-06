import SwiftUI

internal struct Markup<Content, Toolbar>: View where Content : View, Toolbar : View {
	internal let title: String
	internal let description: String?
	internal let content: () -> Content
	internal let toolbar: () -> Toolbar

	internal var body: some View {
		VStack(alignment: .leading, spacing: 20.0) {
			HStack {
				Text(title)
					.textStyle(NePridumalNazvanieTextStyle1())
				Spacer()
				toolbar()
			}

			content()

			if let description {
				Text(description)
					.textStyle(NePridumalNazvanieTextStyle2())
					.padding(.top, -12.0)
			}
		}
	}
}
