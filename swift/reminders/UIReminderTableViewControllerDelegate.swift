import UIKit

// MARK: `UICollectionViewDataSource`

extension UIReminderTableViewController: UICollectionViewDataSource {
    public final func numberOfSections(in collectionView: UICollectionView) -> Int {
        return data.keys.count
    }

    public final func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return data[Section(section)]?.count ?? 0
    }
    
    public final func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        let section = Section(indexPath)

        let registration = UICollectionView.SupplementaryRegistration<UICollectionViewListCell>(elementKind: kind) { supplementaryView, elementKind, indexPath in
            supplementaryView.contentConfiguration = {
                var configuration = supplementaryView.defaultContentConfiguration()
                configuration.text = section.text
                configuration.textProperties.color = .secondaryLabel

                return configuration
            }()
        }
        return collectionView.dequeueConfiguredReusableSupplementary(using: registration, for: indexPath)
    }

    public final func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let reminders = data[Section(indexPath)] else { return UICollectionViewCell(frame: .zero) }

        let registration = UICollectionView.CellRegistration<UICollectionViewListCell, Reminder> { cell, indexPath, item in
            cell.contentConfiguration = {
                var configuration = cell.defaultContentConfiguration()

                configuration.text = item.title
                configuration.secondaryText = item.subtitle
                configuration.textProperties.color = .label
                configuration.secondaryTextProperties.color = .secondaryLabel

                return configuration
            }()
        }
        return collectionView.dequeueConfiguredReusableCell(using: registration, for: indexPath, item: reminders[indexPath.row])
    }
}

// MARK:- `UICollectionViewDelegate`

extension UIReminderTableViewController: UICollectionViewDelegate {

    // MARK:- `UICollectionViewDelegate`

    public final func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let reminder = data[Section(indexPath)]?[indexPath.row] else { return }
        present(UIReminderViewController(with: reminder), animated: true)
    }
}

// MARK:- `UINavigationControllerDelegate`

extension UIReminderTableViewController: UINavigationControllerDelegate {

    // MARK:- `UINavigationControllerDelegate`

    public final func navigationController(_ navigationController: UINavigationController, didShow ViewController: UIViewController, animated: Bool) {
    }
}

// MARK:- `UITabBarDelegate`

extension UIReminderTableViewController: UITabBarDelegate {

    // MARK:- `UITabBarDelegate`

}
