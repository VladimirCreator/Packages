/* -> History Entry / The Game / Game Sequence / Initially Modified: Mon 06 Mar 2023 07:50 PM
	-> History Entry / The Game / Game Sequence /      Last Modified: Fri 14 Apr 2023 : PM

	TypeScript: #class, #enum, #function, #interface, #namespace, #type
	Visual Studio Code: #file

	Fri 14 Apr 2023
		: PM / # / `` / ()
*/
interface IGameSequence extends IPublisher<Array<numeral>> {
	/** `interface IGameSequence` */
	valueOf(): number;

	/** `interface IGameSequence` */
	get radix(): radix

	/** `interface IGameSequence` */
	get numerals(): numeral[]

	/** `interface IGameSequence` */
	get decorators(): decorator[]
}

@final class GameSequence implements IGameSequence, IPublisher<Array<numeral>> {
	readonly #radix: radix
	readonly #numerals: numeral[]
	readonly #decorators: decorator[] = []

	public constructor(radix: radix, number: number) {
		this.#radix = radix
		this.#numerals = Array.from(
			number.toString(radix), numeral => {
				return parseInt(numeral, radix)
			}
		)
		.reverse()
	}

	// MARK:- `interface IGameSequence`

	public valueOf(): number {
		this.#subscribers.forEach(
			(subscriber) => subscriber.receive(this.#numerals)
		);
		return this.#numerals.reduce(
			(number, numeral, exponent) => {
				return number += numeral * Math.pow(this.#radix, exponent);
			}
		)
	}

	public get radix(): radix { return this.#radix }

	public get numerals(): numeral[] { return this.#numerals }

	public get decorators(): decorator[] { return this.#decorators }

	// MARK:- `interface IPublisher<Output>`

	readonly #subscribers: Array<ISubscriber<Array<numeral>>> = []

	public subscribe(observer: ISubscriber<Array<numeral>>): void { this.#subscribers.push(observer) }
}
// 16 lines
interface IGameSequenceFactoryDelegate {
	/** `interface IGameSequenceFactoryDelegate` */
	get radix(): radix

	/** `interface IGameSequenceFactoryDelegate` */
	get number(): number

	/** `interface IGameSequenceFactoryDelegate` */
	get decorators(): Optional<decorator[]>
}

@final class GameSequenceFactory implements IGameSequenceFactoryDelegate {
	public delegate: IGameSequenceFactoryDelegate = this

	public get sequence(): IGameSequence {
		let decorated: IGameSequence = new GameSequence(
			this.delegate.radix, this.delegate.number
		)
		for (const $0 of this.delegate.decorators ?? []) {
			switch ($0) {
			case decorator.backwards:
				decorated = new BackwardsDecorator(decorated);
				continue
			case decorator.padding:
				decorated = new PaddingDecorator(decorated);
				continue
			case decorator.arithmetic:
				decorated = new ArithmeticDecorator(decorated)
				continue
			case decorator.mutating:
				decorated = new MutatingDecorator(decorated)
				continue
			case decorator.null:
				continue
			}
		}
		return decorated
	}

	// MARK: - `interface IGameSequenceFactoryDelegate`

	public get radix(): radix { return 2 }

	public get number(): number { return 0 }

	public get decorators(): Optional<decorator[]> { return undefined }
}
