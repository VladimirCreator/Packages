import SwiftUI

internal struct Cell5: View {
	internal let info: [(label: String, info: String)]

	internal var body: some View {
		Grid(alignment: .leading, verticalSpacing: 16.0) {
			ForEach(info, id: \.label) { item in
				GridRow {
					Text(item.label).textStyle(NePridumalNazvanieTextStyle(color: .x828796))
					Text(item.info).textStyle(NePridumalNazvanieTextStyle(color: .black))
				}
			}
		}
	}
}
