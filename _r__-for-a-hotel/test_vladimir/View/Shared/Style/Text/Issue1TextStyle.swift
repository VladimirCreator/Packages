import SwiftUI

internal struct Issue1TextStyle: ViewModifier {
    internal func body(content: Content) -> some View {
        content.font(.system(size: 22.0)).fontWeight(.medium)
    }
}
