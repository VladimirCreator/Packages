// Thu 20 Apr 2023 / https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift

import Foundation

// Наследование от `NSObject` является неотъемлемой частью.
fileprivate final class Battery: NSObject {
    // `@obj` является неотъемлемой частью.
    // `dynamic` является неотъемлемой частью.
    @objc fileprivate dynamic var currentLevel: Int = 100

    fileprivate final func charge(by amount: Int) {
        currentLevel += amount
    }

    fileprivate final func drain(by amount: Int) {
        currentLevel -= amount
    }
}

// Наследование от `NSObject` является неотъемлемой частью.
fileprivate final class BatteryObserver: NSObject {
    @objc private var battery: Battery!
    private var observation: NSKeyValueObservation!

    fileprivate init(for battery: Battery) {
        super.init()

        self.battery = battery
        self.observation = observe(\.self.battery.currentLevel, options: [.old, .new]) { observer, change in
            print("\(change.oldValue!) -> \(change.newValue!)")
        }
    }
}

fileprivate let battery = Battery()
fileprivate let batteryObserver = BatteryObserver(for: battery)

for _ in 1...10 { battery.drain(by: 10) }
for _ in 1...10 { battery.charge(by: 10) }
