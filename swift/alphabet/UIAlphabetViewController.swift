import UIKit

class UIAlphabetViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UITextViewDelegate {

    private var glossary = [String:[Substring]]() {
        didSet {
            guard let tableView = view as? UITableView else { fatalError() }
            tableView.reloadData()
        }
    }

    // MARK:- `UIViewController`

    internal override func loadView() {
        let tableView = UITableView(frame: .zero, style: .plain)
        let textView = UITextView(frame: .zero)

        view = tableView
        tableView.tableHeaderView = textView
    }

    internal override func viewDidLoad() {
        guard let tableView = view as? UITableView else { fatalError() }
        guard let textView = tableView.tableHeaderView as? UITextView else { fatalError() }
        super.viewDidLoad()

        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "UITableViewCell")

        textView.delegate = self

        tableView.scrollsToTop = true
        textView.text = String(repeating: "\n", count: 5)
        textView.sizeToFit()
        textView.text = nil

        title = "UIViewController"
        navigationController?.navigationBar.prefersLargeTitles = true
    }

    // MARK:- `UITableViewDataSource` & `UITableViewDelegate`

    internal func numberOfSections(in tableView: UITableView) -> Int {
        return glossary.keys.count
    }

    internal func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return glossary.keys.sorted()[section]
    }

    internal func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return glossary[glossary.keys.sorted()[section]]?.count ?? 0
    }

    internal func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "UITableViewCell") else { fatalError() }
        var contentConfiguration = UIListContentConfiguration.cell()
        contentConfiguration.text = glossary[glossary.keys.sorted()[indexPath.section]]![indexPath.row].reduce("") { $0 + String($1) }

        cell.contentConfiguration = contentConfiguration
        return cell
    }

    // MARK:- `UITextViewDelegate`

    internal func textViewDidEndEditing(_ textView: UITextView) {
        let words = textView.text.split(separator: /\n/).sorted()

        glossary = [String:[Substring]](grouping: words) {
            $0.first?.uppercased() ?? "."
        }
    }

}
