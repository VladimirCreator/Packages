#!/usr/bin/env swift
/* last modified at ??:?? AM on Mon 08 Jan 2024
*/
import Foundation

func execute(for subpaths: [String], satisfies: (String) -> Bool, filter: (String) -> Bool = { _ in true }) -> Bool {
	for subpath in subpaths {
		guard filter(subpath) else { continue }
		guard let contents = FileManager.default.contents(atPath: subpath) else { fatalError() }
		guard let data = String(data: contents, encoding: .utf8) else { fatalError() }
		guard satisfies(data) else { return false }
	}
	return true
}
