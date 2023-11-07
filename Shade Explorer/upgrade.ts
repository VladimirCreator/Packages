
/* -> History Entry / The Game / Upgrade / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Upgrade /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
type IUpgradeable = TierHaving & UpgradeHaving

enum tier { low, medium, high, ultra }

interface TierHaving { get tier(): tier }

interface UpgradeHaving { get upgrade(): IUpgrade }
// 16 lines
interface IUpgrade {}

@final class PaddingUpgrade implements IUpgrade {
    readonly #minimum: numeral
    readonly #maximum: numeral

    public constructor(minimum: numeral, maximum: numeral = 0) {
        this.#minimum = minimum; this.#maximum = maximum
    }

    public get numeral(): numeral {
        return Math.round(
            Math.random() * (this.#maximum - this.#minimum) + this.#minimum
        )
    }
}

@final class MutatingUpgrade implements IUpgrade {
    readonly #minimum: numeral
    readonly #maximum: numeral

    public constructor(decorated: IGameSequence, count: number, minimum: numeral, maximum: numeral, interval: number) {
        this.#minimum = minimum
        this.#maximum = maximum

        setInterval(
            () => {
                const random_numerals: numeral[] = []
                const final_numerals: numeral[] = []

                for (let i = 0; i < count; ++i) {
                    random_numerals.push(this.#numeral)
                    if (random_numerals.some(numeral => numeral === 0)) {
                        random_numerals.pop()
                        i -= 1
                        continue
                    }

                    final_numerals.push(
                        decorated.numerals[i] + random_numerals[i]
                    )
                    if (final_numerals.some(numeral => numeral < 0 || numeral >= decorated.radix)) {
                        return
                    }
                }
                final_numerals.forEach(
                    (numeral, index) => decorated.numerals[index] = numeral
                )
                decorated.valueOf()
            },
            interval
        )
    }

    get #numeral(): number {
        return Math.round(
            Math.random() * (this.#maximum - this.#minimum) + this.#minimum
        )
    }
}
