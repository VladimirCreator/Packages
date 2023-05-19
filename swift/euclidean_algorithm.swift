fileprivate var a = Int.random(in: Int.zero...Int.max)
fileprivate var b = Int.random(in: Int.zero...Int.max)
fileprivate var gcd = Int.zero

while true {
    let remainder = a % b
    guard remainder != 0 else { gcd = b; break }

    a = b
    b = remainder
}
