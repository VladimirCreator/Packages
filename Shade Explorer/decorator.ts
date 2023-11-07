/* -> History Entry / The Game / Decorator / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Decorator /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
enum decorator {
    backwards = "Backwards",
    padding = "Padding",
    arithmetic = "Arithmetic",
    mutating = "Mutating",
    null = "null"
}

interface IGameSequenceDecorator extends IGameSequence, IPublisher<Array<numeral>> {}

abstract class AbstractDecorator implements IGameSequenceDecorator,
                                            IGameSequence,
                                            IPublisher<Array<numeral>>
{
    protected readonly decorated: IGameSequence

    protected constructor(decorated: IGameSequence) { this.decorated = decorated }

    // MARK:- `interface IGameSequence`

    public valueOf(): number { return this.decorated.valueOf() }

    public get radix(): radix { return this.decorated.radix }

    public get numerals(): numeral[] { return this.decorated.numerals }

    public get decorators(): decorator[] { return this.decorated.decorators }

    // MARK:- `interface IPublisher<Output>`

    public subscribe(observer: ISubscriber<Array<numeral>>): void {
        this.decorated.subscribe(observer)
    }
}

@final class BackwardsDecorator extends AbstractDecorator implements IGameSequenceDecorator,
                                                                        IGameSequence,
                                                                        IPublisher<Array<numeral>>
{
    public constructor(decorated: IGameSequence) {
        super(decorated)
        this.decorated.numerals.reverse()
        this.decorated.decorators.push(decorator.backwards)
    }

    // MARK:- `interface IGameSequence`

    public override valueOf(): number {
        this.decorated.valueOf()
        return this.decorated.numerals.reduceRight(
            (number, numeral, exponent, numerals) => {
                return number += numeral * Math.pow(
                    this.decorated.radix,
                    numerals.length - exponent - 1
                )
            }
        )
    }
}

@final class PaddingDecorator extends AbstractDecorator implements IUpgradeable,
                                                                    IGameSequenceDecorator,
                                                                    IGameSequence,
                                                                    IPublisher<Array<numeral>>
{
    readonly #tier: tier = tier.low

    public constructor(decorated: IGameSequence) {
        super(decorated)
        while (this.decorated.numerals.length < this.#maxLength) {
            this.decorated.numerals.push(this.upgrade.numeral)
        }
        decorated.decorators.push(decorator.padding)
    }

    // MARK:- `interface TierHaving`

    public get tier(): tier { return this.#tier }

    // MARK:- `interface UpgradeHaving`

    public get upgrade(): PaddingUpgrade {
        switch (this.#tier) {
            case tier.low: return new PaddingUpgrade(0)
            case tier.medium: return new PaddingUpgrade(0, 1)
            case tier.high: throw new Error()
            case tier.ultra: return new PaddingUpgrade(0, this.decorated.radix)
        }
    }

    // MARK:- ...

    get #maxLength(): number {
        switch (this.decorated.radix) {
        case radix.binary: return 0x20
        case radix.octal: return 0x0B
        case radix.decimal: return 0x0A
        case radix.hexadecimal: return 0x08
        default: return 0x00
        }
    }
}

@final class ArithmeticDecorator extends AbstractDecorator implements IGameSequenceDecorator,
                                                                        IGameSequence,
                                                                        IPublisher<Array<numeral>>
{
    public constructor(decorated: IGameSequence) {
        super(decorated)
        this.decorated.numerals.forEach(
            (numeral, exponent, numerals) => {
                numerals[exponent] = numeral * Math.pow(this.decorated.radix, exponent);
            }
        )
        this.decorators.push(decorator.arithmetic)
    }

    // MARK:- `interface IGameSequence`

    public override valueOf(): number {
        this.decorated.valueOf()
        return this.decorated.numerals.reduce(
            (number, value) => number += value
        )
    }
}

@final class MutatingDecorator extends AbstractDecorator implements IUpgradeable,
                                                                    IGameSequenceDecorator,
                                                                    IGameSequence,
                                                                    IPublisher<Array<numeral>>
{
    readonly #tier: tier = tier.low

    public constructor(decorated: IGameSequence) {
        super(decorated)
        this.upgrade
        this.decorators.push(decorator.mutating)
    }

    // MARK:- `interface TierHaving`

    public get tier(): tier { return this.#tier }

    // MARK:- `interface UpgradeHaving`

    public get upgrade(): MutatingUpgrade {
        switch (this.tier) {
            case tier.low: return new MutatingUpgrade(
                this.decorated,
                1,
                -1, +1,
                60_000
            );
            case tier.medium: return new MutatingUpgrade(
                this.decorated,
                this.decorated.numerals.length / 2,
                -this.decorated.radix / 2, this.decorated.radix / 2,
                60_000
            );
            case tier.high: return new MutatingUpgrade(
                this.decorated,
                this.decorated.numerals.length,
                -(this.decorated.radix - 1), this.decorated.radix - 1,
                45_000
            );
            case tier.ultra: return new MutatingUpgrade(
                this.decorated,
                this.decorated.numerals.length,
                -(this.decorated.radix - 1), this.decorated.radix - 1,
                30_000
            );
        }
    }
}
