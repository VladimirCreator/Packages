fileprivate let initialIdentifier = "Vladimir Leonidovich Petrov".reduce("") {
    guard let asciiValue = $1.asciiValue else { fatalError() }
    var letter = String(asciiValue, radix: 2)

    letter.insert(contentsOf: String(repeating: "0", count: 8 - letter.count), at: letter.startIndex)
    return $0 + letter
}

print(initialIdentifier)
