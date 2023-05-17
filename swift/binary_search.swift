fileprivate func search<T: Comparable>(_ value: T, in array: [T]) -> Int? {
    var leadingIndex = Int.zero
    var trailingIndex = array.count

    var middleIndex = Int.zero
    while true {
        middleIndex = (leadingIndex + trailingIndex) / 2
        if array[middleIndex] == value {
            return middleIndex
        }
        else if array[middleIndex] < value {
            leadingIndex = middleIndex
        }
        else if array[middleIndex] > value {
            trailingIndex = middleIndex
        }

        if middleIndex == (leadingIndex + trailingIndex) / 2 {
            break
        }
    }
    return nil
}
