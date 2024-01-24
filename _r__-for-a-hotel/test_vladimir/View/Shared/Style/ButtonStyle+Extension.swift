import SwiftUI

internal extension ButtonStyle where Self == NePridumalNazvanieButtonStyle {
	internal static var nePridumalNazvanie: NePridumalNazvanieButtonStyle {
		get {
			return NePridumalNazvanieButtonStyle()
		}
	}

	internal static var disclose: NePridumalNazvanieButtonStyle1 {
		get {
			let color: Color = .x0d72ff

			return NePridumalNazvanieButtonStyle1(
				foregroundColor: color, backgroundColor: color.opacity(0.1)
			)
		}
	}

	internal static var append: NePridumalNazvanieButtonStyle1 {
		get {
			let color: Color = .x0d72ff

			return NePridumalNazvanieButtonStyle1(
				foregroundColor: .white, backgroundColor: color
			)
		}
	}
}
