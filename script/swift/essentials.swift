#!/usr/bin/env swift
/* initially modified at ??:?? ?M on ??? ?? ??? 2023
       last modified at ??:?? AM on Mon 08 Jan 2024
   imported at 11:02 AN on Mon 8 Jan 2024
*/
import Foundation

/* Mon 8 Jan 2024 10:00 AM...10:39 AM
*/
func execute(for subpaths: [String], satisfies: (String) -> Bool, filter: (String) -> Bool = { _ in true }) -> Bool {
	for subpath in subpaths {
		guard filter(subpath) else { continue }
		guard let contents = FileManager.default.contents(atPath: subpath) else { fatalError() }
		guard let data = String(data: contents, encoding: .utf8) else { fatalError() }
		guard satisfies(data) else { return false }
	}
	return true
}
