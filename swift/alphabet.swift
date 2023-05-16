fileprivate let words = ["Swift","UIKit","GitHub","Pull Request","Issue","Commit"]

fileprivate let glossary = [String:[String]](grouping: words.sorted()) { word in
    if let firstLetter = word.first {
        return firstLetter.lowercased()
    }
    return "?"
}

for letter in glossary.keys.sorted() {
    print(letter)
    for word in glossary[letter, default:[]] {
        print("    \(word)")
    }
}
