let subpaths = FileManager.default.subpaths(atPath: ".") ?? []

/* A file _does not have to_ include a line ~~ending with a space character~~!
*/
let condition: (String) -> Bool = {
	let lines = $0.split(separator: "\n")
	let booleans = lines.map { line in !line.hasSuffix(" ") }
	return !booleans.includes(false)
}

execute(subpaths: subpaths, satisfies: condition) { subpath in
	let suffixes = [".ts", ".tsx"]
	let booleans = suffixes.map { suffix in
		subpath.hasSuffix(suffix)
	}
	return booleans.includes(true)
}
