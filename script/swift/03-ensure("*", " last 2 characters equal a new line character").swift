/// A file’s last 2 characters _have to be_ a new line character.
fileprivate let condition: (String) -> Bool = {
	let (character1, character2) = ($0.removeLast(), $0.removeLast())
	return character1.isNewline && character2.isNewline
}

if let subpaths = FileManager.default.subpaths(atPath: ".") {
	execute(for: subpaths, satisfies: condition)
}
