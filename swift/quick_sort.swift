fileprivate func quick_sort<T: Comparable>(_ array: [T]) -> [T] {
    guard let pivot = array.first else { return array }

    if array.count >= 2 {
        return quick_sort(array.filter { $0 < pivot }) +
                          array.filter { $0 == pivot } +
               quick_sort(array.filter { $0 > pivot })
    }
    return array
}
