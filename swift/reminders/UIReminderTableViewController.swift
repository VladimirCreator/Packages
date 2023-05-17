class UIReminderTableViewController: UIViewController {

    // MARK:- ...

    private final lazy var appendItem = UIAction { [weak self] _ in
        guard let self else { return }
        self.present(UIReminderViewController(with: nil), animated: true)
    }

    // MARK:- ...

    internal enum Section: CaseIterable {
        case completed
        case pending
        case `default`

        public init(_ indexPath: IndexPath) {
            self = Section(indexPath.section)
        }

        public init(_ section: Int) {
            switch section {
            case 0:
                self = .pending
            case 1:
                self = .completed
            default:
                self = .default
            }
        }

        public var text: String {
            switch self {
            case .completed:
                return "Completed"
            case .pending:
                return "Pending"
            default:
                return "Default"
            }
        }
    }

    // MARK:- ...

    internal var data = [Section:[Reminder]](grouping: file) { $0.completed ? .completed : .pending }

    // MARK:- ...

    private var collectionView: UICollectionView!

    // MARK:- `UIViewController`

    // MARK: `loadView`
    public final override func loadView() {
        var layoutConfiguration = UICollectionLayoutListConfiguration(appearance: .plain)
        layoutConfiguration.headerMode = .supplementary
        layoutConfiguration.footerMode = .none

        let collectionViewLayout = UICollectionViewCompositionalLayout.list(using: layoutConfiguration)
        collectionView = UICollectionView(frame: .zero, collectionViewLayout: collectionViewLayout)
    }

    // MARK: Life Cycle

    // MARK: `viewDidLoad`
    public final override func viewDidLoad() {
        super.viewDidLoad()
        view = collectionView

        collectionView.dataSource = self
        collectionView.delegate = self

        title = "Reminder Table View Controller"

        navigationController?.delegate = self
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.setRightBarButtonItems([
            UIBarButtonItem(image: UIImage(systemName: "plus"), primaryAction: appendItem)
        ], animated: true
        )
    }

    // MARK: `viewWillAppear`
    public final override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        collectionView.indexPathsForSelectedItems?.forEach { indexPath in
            collectionView.deselectItem(at: indexPath, animated: true)
        }
    }

    // MARK: `viewDidAppear`
    public final override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        collectionView.flashScrollIndicators()
    }
}
