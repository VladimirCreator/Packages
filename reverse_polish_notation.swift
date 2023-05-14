fileprivate let rpn = "7 2 3 * -" // you can read this as 7 - 2 * 3
fileprivate var number = [Int]()

fileprivate let evaluate: [String:(Int, Int) -> Int] = [
    "+":{ $0 + $1 },
    "-":{ $0 - $1 },
    "*":{ $0 * $1 },
    "/":{ $0 / $1 }
]

rpn.split(separator: " ").forEach {
    var proxy = 0

    if let number = Int($0.lowercased()) {
        proxy = number
    }
    else if let evaluate = evaluate[$0.lowercased()] {
        let (lhs, rhs) = (number.removeFirst(), number.removeFirst())
        proxy = evaluate(lhs, rhs)
    }
    number.append(proxy)
}

print(number)
