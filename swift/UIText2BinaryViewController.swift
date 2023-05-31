import UIKit

internal final class UIText2BinaryViewController: UIViewController {

    private var converter = [0:""] {
        didSet {
            guard let tableView = view as? UITableView else { return }
            tableView.reloadData()
        }
    }

    internal override func loadView() {
        view = UITableView(frame: .zero, style: .grouped)
    }

    internal override func viewDidLoad() {
        super.viewDidLoad()
        guard let tableView = view as? UITableView else { return }

        tableView.dataSource = self
        tableView.delegate = self

        title = "Demo View Controller"
    }

}

// MARK:- `UITableViewDataSource` & `UITableViewDelegate`
extension UIText2BinaryViewController: UITableViewDataSource, UITableViewDelegate {

    internal func numberOfSections(in tableView: UITableView) -> Int {
        return converter.keys.count
    }

    internal func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let tableViewCell =  UITableViewCell(style: .default, reuseIdentifier: nil)
        let textField = UITextField(frame: .zero)

        textField.delegate = self
        textField.translatesAutoresizingMaskIntoConstraints = false
        textField.text = converter[indexPath.section]

        tableViewCell.contentView.addSubview(textField)
        NSLayoutConstraint.activate([
            textField.widthAnchor.constraint(equalTo: tableViewCell.layoutMarginsGuide.widthAnchor, multiplier: 1.0),
            textField.heightAnchor.constraint(equalTo: tableViewCell.safeAreaLayoutGuide.heightAnchor, multiplier: 1.0),
            textField.centerXAnchor.constraint(equalTo: tableViewCell.safeAreaLayoutGuide.centerXAnchor)
        ])
        return tableViewCell
    }

}

// MARK:- `UITextFieldDelegate`
extension UIText2BinaryViewController: UITextFieldDelegate {

    internal func textFieldDidEndEditing(_ textField: UITextField, reason: UITextField.DidEndEditingReason) {
        guard reason == .committed else { return }

        converter[0] = textField.text
        converter[1] = converter[0]?.reduce("") {
            guard let asciiValue = $1.asciiValue else { fatalError() }

            var letter = String(asciiValue, radix: 2)
            letter.insert(contentsOf: String(repeating: "0", count: 8 - letter.count), at: letter.startIndex)

            return "\($0) \(letter)  "
        }.trimmingCharacters(in: .whitespaces)
    }

}
