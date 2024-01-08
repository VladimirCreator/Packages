/* Initially Modified at 11:31 AM on Mon 8 Jan 2024
        Last Modified at 11:35 AM on Mon 8 Jan 2024
*/
let subpaths = FileManager.default.subpaths(atPath: ".") ?? []

/* A file’s last 2 characters _have to be_ a new line character.
*/
let condition: (String) -> Bool = {
	let (character1, character2) = ($0.removeLast(), $0.removeLast())
	return character1.isNewline && character1 == character2
}

execute(for: subpaths, satisfies: condition)
