import SwiftUI

internal struct NePridumalNazvanieButtonStyle: ButtonStyle {
    internal func makeBody(configuration: Configuration) -> some View {
        return configuration.label
            .font(.system(size: 16.0))
            .fontWeight(.medium)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 15.0)
            .foregroundColor(.white)
            .background(Color(.sRGB, red: 0.051, green: 0.447, blue: 1.0))// replace this line later with `.background(Color("sky-500", bundle: nil)) // <- #0D72FF`
            .cornerRadius(15.0)
    }
}
