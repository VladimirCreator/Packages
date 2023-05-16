fileprivate func sort<T: Comparable>(_ array: inout [T], using predicate: (T, T) -> Bool) {
    guard array.count >= 2 else { return }

    for elementIndex in Int.zero..<array.count-1 {
        var predicateIndex = elementIndex

        for index in predicateIndex+1..<array.count {
            if predicate(array[predicateIndex], array[index]) {
                predicateIndex = index
            }
        }
        if elementIndex != predicateIndex {
            array.swapAt(elementIndex, predicateIndex)
        }
    }
}
