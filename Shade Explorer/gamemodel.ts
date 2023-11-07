/* -> History Entry / The Game / Game Model / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Game Model /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
interface IGameModel {
    /** `interface IGameModel` */
    get triumph(): boolean
}

interface IGameModelDelegate {
    /** `interface IGameModelDelegate` */
    gameDidStart(): void

    /** `interface IGameModelDelegate` */
    gameDidEnd(): void

    /** `interface IGameModelDelegate` */
    gameDidAlterTriumph(didTriumph: boolean): void
}
// 16 lines
interface GameModelDelegate extends IGameModelDelegate {
    /** `interface GameModelDelegate` */
    gameDidSetLhs(lhs: IGameSequence): void

    /** `interface GameModelDelegate` */
    gameDidSetRhs(rhs: IGameSequence): void
}

@final class GameModel implements IGameModel, ISubscriber<Array<numeral>>
{
    public delegate: Optional<GameModelDelegate> = undefined

    /** This `number` is intended to be guessed. */
    readonly #lhs: IGameSequence

    /** This `number` is a player’s try to guess the `number`. */
    readonly #rhs: IGameSequence

    public constructor(lhs: IGameSequence, rhs: IGameSequence) {
        lhs.subscribe(this); rhs.subscribe(this)
        this.#lhs = lhs; this.#rhs = rhs
    }

    // MARK:- ...

    public start(): void {
        this.delegate?.gameDidSetLhs(this.#lhs);
        this.delegate?.gameDidSetRhs(this.#rhs);
        this.delegate?.gameDidStart();
    }

    public finish(): void {
        this.delegate?.gameDidEnd();
    }

    private function(): void {
        // @ts-ignore
        this.#rhs = new GameSequence(
            this.#lhs.radix,
            this.#lhs.valueOf()
        );
    }

    public get lhs(): IGameSequence {
        return this.#lhs;
    }

    public get rhs(): IGameSequence {
        return this.#rhs;
    }

    // MARK:- `interface IGameModel`

    /** This `boolean` reveals if the `number` and the `number` are the same.
    */
    public get triumph(): boolean {
        const didTriumph = this.#lhs.valueOf() === this.#rhs.valueOf();
        this.delegate?.gameDidAlterTriumph(didTriumph);

        if (!didTriumph) {
            return false;
        }
        return true;
    }

    // MARK:- `interface ISubscriber<Input>`

    public receive(input: Array<numeral>): void {
        const [lhsDidValueOf, rhsDidValueOf] = [
            Object.is(this.#lhs.numerals, input),
            Object.is(this.#rhs.numerals, input)
        ];
        if (lhsDidValueOf) { this?.delegate?.gameDidSetLhs(this.#lhs); }
        if (rhsDidValueOf) { this?.delegate?.gameDidSetRhs(this.#rhs); }
    }
}
// 16 lines
interface IGameModelFactory { get GameModel(): IGameModel }

abstract class AbstractGameModelFactory implements IGameModelFactory,
                                                    IGameSequenceFactoryDelegate
{
    protected readonly factory: GameSequenceFactory = new GameSequenceFactory()

    protected constructor() { this.factory.delegate = this }

    // MARK:- `interface IGameModelFactory`

    public get GameModel(): GameModel {
        return new GameModel(this.factory.sequence, this.factory.sequence)
    }

    // MARK:- `interface IGameSequenceFactoryDelegate`

    public abstract get radix(): radix
    public abstract get number(): number
    public abstract get decorators(): Optional<Array<decorator>>
}

@final class RandomGameModelFactory extends AbstractGameModelFactory implements IGameModelFactory,
                                                                                IGameSequenceFactoryDelegate
{
    #radices: Array<radix> = [radix.binary, radix.octal, radix.decimal, radix.hexadecimal]

    public constructor() { super() }

    // MARK:- `interface ISequenceFactoryDelegate`

    public override get radix(): radix {
        return this.#radices[
            Math.trunc(
                Math.random() * this.#radices.length
            )
        ]
    }

    public override get number(): number {
        return Math.round(
            Math.random() * 0xFF_FF_FF_FF
        )
    }

    public override get decorators(): Optional<Array<decorator>> {
        return Array.from(
            Array(4), ($0, $1) => {
                if (Math.round(Math.random()) === 1) {
                    switch ($1) {
                    case 0: return decorator.backwards
                    case 1: return decorator.padding
                    case 2: return decorator.arithmetic
                    case 3: return decorator.mutating
                    }
                }
                return decorator.null
            }
        )
    }
}

@final class ColorGameModelFactory extends AbstractGameModelFactory implements IGameModelFactory,
                                                                                IGameSequenceFactoryDelegate
{
    #radices: Array<radix> = [radix.binary, radix.hexadecimal]
    #radixIndex: number = -1

    public constructor() { super() }

    // MARK:- `interface IGameSequenceFactoryDelegate`

    public override get radix(): radix {
        do {
            const radixIndex = Math.trunc(Math.random() * this.#radices.length);
            if (radixIndex !== this.#radixIndex) {
                this.#radixIndex = radixIndex
            } else {
                continue
            }

            return this.#radices[this.#radixIndex]
        } while (true)
    }

    public override get number(): number {
        return Math.round(
            Math.random() * 0xFF_FF_FF_FF
        )
    }

    public override get decorators(): Optional<Array<decorator>> { return [decorator.padding] }
}

@final class PredefinedGameModelFactory extends AbstractGameModelFactory implements IGameModelFactory,
                                                                                    IGameSequenceFactoryDelegate
{
    readonly #lhs: IGameSequence
    readonly #rhs: IGameSequence

    public constructor(lhs: IGameSequence, rhs: IGameSequence) {
        super()
        this.#lhs = lhs; this.#rhs = rhs
    }

    // MARK:- `interface IGameModelFactory`

    public override get GameModel(): GameModel { return new GameModel(this.#lhs, this.#rhs) }

    // MARK:- `interface IGameSequenceFactoryDelegate`

    public override get radix(): radix { return 0 }

    public override get number(): number { return 0 }

    public override get decorators(): Optional<decorator[]> { return undefined }
}
