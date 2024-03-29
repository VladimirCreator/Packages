import SwiftUI

internal class PhoneNumberFormatter: Formatter {
	internal override func string(for obj: Any?) -> String? {
		guard var string = obj as? String else { return nil }
		guard string.count != 0 else { return nil }

		var template: String = "+7 (***) ***-**-**"
return template
		return template.reduce(template) { accumulator, character in
			if character == "*" {
				return accumulator.replacing("*", with: string.remove(at: string.startIndex).lowercased(), maxReplacements: 1)
			}
			return accumulator
		}
	}

	internal override func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool {
		obj?.pointee = string as AnyObject?
		return true
	}
}

internal struct Cell6: View {
	@Binding internal var consumer: Consumer
	private var formatted: String {
		consumer.phone.reduce("+7 (***) ***-**-**") {
			guard $1.isNumber else { return $0 }
			return $0.replacing(/\*/, with: [$1], maxReplacements: 1)
		}
	}

	@FocusState private var focused: Bool

	internal var body: some View {
		Markup(title: "Информация о покупателе", description: "Эти данные никому не передаются. После оплаты мы вышлем чек на указанный вами номер и почту") {
			VStack(alignment: .leading, spacing: 8.0) {
				NePridumalNazvanieTextField(
					title: Consumer.Field.phone.rawValue,formatter: nil,
					text: $consumer.phone
				) {
					Text(formatted)
							.frame(maxWidth: .infinity, alignment: .leading)
							.foregroundColor(.black)
							.opacity(focused || consumer.phone.count != 0 ? 1.0 : 0.0)
				}
				.foregroundColor(.clear)
				.focused($focused)

				NePridumalNazvanieTextField(
					title: Consumer.Field.mail.rawValue, formatter: nil,
					text: $consumer.mail
				) { EmptyView() }
			}
		} toolbar: { EmptyView() }
	}
}
