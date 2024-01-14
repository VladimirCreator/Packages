/// A file _does not have to_ include a line ~~starting with a space character~~!
fileprivate let condition: (String) -> Bool = {
	let lines = $0.split(separator: "\n")
	let booleans = lines.map { line in !line.startsWith(" ") }
	return !booleans.includes(false)
}

if let subpaths = FileManager.default.subpaths(atPath: ".") {
	execute(
		subpaths: subpaths.filter { subpath in
			let suffixes = [".ts", ".tsx"]
			let booleans = suffixes.map { suffix in
				subpath.hasSuffix(suffix)
			}
			return booleans.includes(true)
		}
		,
		satisfies: condition
	)
}
