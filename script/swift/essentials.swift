import Foundation

fileprivate func read(atPath subpath: String) -> String {
	guard let contents = FileManager.default.contents(atPath: subpath) else { fatalError() }
	guard let data = String(data: contents, encoding: .utf8) else { fatalError() }
	return data
}

/// - Parameters:
///   - subpaths: An array of subpaths to check if each subpath satisfies some condition.
///   - satisfies: A callback function which determines if a file’s contents satisfies some condition.
/// - Returns: A boolean value which indicates if a commit should be discarded or not.
package func execute(
	for subpaths: [String],
	satisfies: (String) -> Bool,
) -> Bool {
	subpaths.map { subpath in
    let data = read(subpath)

		if !satisfies(data) {
			return false
		}
		return true
	}.allSatisfy(true)
}
