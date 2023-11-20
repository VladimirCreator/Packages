import Foundation
import Combine

internal class BookingViewModel: ObservableObject {
	private var subscriptions: Set<AnyCancellable> = .init()

	@Published internal var booking: Booking = .zero

	@Published internal var consumer: Consumer = .init(phone: "", mail: "")
	@Published internal var tourists: [Tourist] = [
		.init(firstName: "", lastName: "", birthDate: "", citizenship: "", abroadPassportNumber: "", abroadPassportVailidityDate: "")
	]

	internal init() {}
}
