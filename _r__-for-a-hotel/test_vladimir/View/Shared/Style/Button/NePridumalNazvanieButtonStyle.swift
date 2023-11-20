import SwiftUI

internal struct NePridumalNazvanieButtonStyle: ButtonStyle {
	internal func makeBody(configuration: Configuration) -> some View {
		configuration.label
			.font(.system(size: 16.0, weight: .medium))
			.frame(maxWidth: .infinity)
			.padding(.vertical, 15.0)
			.foregroundColor(.white)
			.background {
				RoundedRectangle(cornerRadius: 15.0).fill(.x0d72ff)
			}
	}
}
