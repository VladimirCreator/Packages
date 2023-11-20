internal extension RootView {
	internal enum PresentedView: Hashable {
		case hotel
		case room(String)
		case booking
		case paidOrder
	}
}
