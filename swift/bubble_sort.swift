fileprivate func bubble_sort<T: Comparable>(_ array: inout [T], using predicate: (T, T) -> Bool) {
    guard array.count >= 2 else { return }

    var didSwap = true
    for sortedCount in 1..<array.count {
        if didSwap { didSwap = false } else { return }

        for index in Int.zero..<array.count-sortedCount {
            guard predicate(array[index], array[index+1]) else { continue }

            array.swapAt(index, index+1); didSwap = true
        }
    }
}
