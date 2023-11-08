/* -> History Entry / The Game / Controller / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Controller /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
interface HTMLStrategy {
    forLhs(numeral: string, index: number): string
    forRhs(numeral: string, index: number): string
}

@final class SPANStrategy implements HTMLStrategy {
    public datasource: Optional<GameModelViewDataSource> = undefined

    // MARK:- `interface HTMLStrategy`

    public forLhs(numeral: string, index: number): string { return `<span>${numeral}</span>` }
    public forRhs(numeral: string, index: number): string {
        return `
            <span id='${index}' class='${this.datasource?.classForDeselected()}'>
                ${numeral}
            </span>
        `
    }
}

@final
class GameModelController implements GameModelViewDelegate,
                                        GameModelViewDataSource,
                                        GameModelDelegate,
                                        IPublisher<{ lhs?: IGameSequence, rhs?: IGameSequence }>
{
    public readonly GameModel: GameModel;
    public readonly GameModelView: GameModelView = new GameModelView();

    readonly #htmlStrategy: HTMLStrategy = new SPANStrategy();

    #numeralIndex: number | undefined = undefined;

    public constructor(kotlin: { numbers: number[], radices: radix[], decorators: decorator[], completed: boolean }) {
        const [lhs, rhs] = [
            new GameSequence(kotlin.radices[0], kotlin.numbers[0]),
            new GameSequence(kotlin.radices[1], kotlin.numbers[1])
        ]

        // M
        this.GameModel = new PredefinedGameModelFactory(lhs, rhs).GameModel;
        this.GameModel.delegate = this;
        // V
        this.GameModelView.displayStrategy = new RadixStrategy();
        this.GameModelView.datasource = this;
        this.GameModelView.delegate = this;
        // C
        (this.#htmlStrategy as SPANStrategy).datasource = this;
        this.subscribe(this.GameModelView);
    }

    public increase() {
        if (this.#numeralIndex === undefined || this.#numeralIndex < 0) {
            return;
        }
        if (this.GameModel.rhs.numerals[this.#numeralIndex] + 1 >= this.GameModel.rhs.radix) {
            return;
        }
        this.GameModel.rhs.numerals[this.#numeralIndex] += 1;
        this.GameModel.rhs.valueOf();
    }

    public decrease() {
        if (this.#numeralIndex === undefined || this.#numeralIndex < 0) {
            return;
        }
        if (this.GameModel.rhs.numerals[this.#numeralIndex] - 1 < 0) {
            return;
        }
        this.GameModel.rhs.numerals[this.#numeralIndex] -= 1;
        this.GameModel.rhs.valueOf();
    }

    public left() {
        if (this.#numeralIndex === undefined || this.#numeralIndex < 0) {
            return;
        }
        if (this.#numeralIndex + 1 >= this.GameModel.rhs.numerals.length) {
            return;
        }
        this.#numeralIndex += 1;
        this.GameModelView.numeral = this.GameModelView.numeral?.previousElementSibling as HTMLSpanElement;
    }

    public right() {
        if (this.#numeralIndex === undefined || this.#numeralIndex < 0) {
            return;
        }
        if (this.#numeralIndex - 1 < 0) { return }
        this.#numeralIndex -= 1;
        this.GameModelView.numeral = this.GameModelView.numeral?.nextElementSibling as HTMLSpanElement;
    }

    // MARK:- `interface IGameModelDelegate`

    public gameDidStart(): void {
        console.log(`Игра началась Jokerge`);
        setTimeout(() => {
            this.GameModelView.mount.style.top = `0`;
            this.GameModelView.rhs.style.opacity = `100%`;
        }, 800);

        if (this.GameModel.triumph) {
            (document.querySelector(`section[id='color']`) as HTMLElement).style.background = `#${this.GameModel.lhs.valueOf().toString(radix.hexadecimal)}`;
            (document.querySelector(`section[id='color']`) as HTMLElement).getAnimations()[0].cancel();
            this.GameModelView.mount.style.color = `#${this.GameModel.lhs.valueOf().toString(radix.hexadecimal)}`;
            this.GameModelView.mount.style.filter = `invert()`;
        }
    }

    public gameDidEnd(): void { console.log(`Игра закончилась TrollDespair`) }

    public gameDidAlterTriumph(didTriumph: boolean): void {
        if (didTriumph) {
            this.GameModel.finish();
            (document.querySelector(`section[id='color']`) as HTMLElement).style.background = `#${this.GameModel.lhs.valueOf().toString(radix.hexadecimal)}`;
            (document.querySelector(`section[id='color']`) as HTMLElement).getAnimations().pop()?.play();

            this.GameModelView.mount.style.color = `#${this.GameModel.lhs.valueOf().toString(radix.hexadecimal)}`;
            this.GameModelView.mount.style.filter = `invert()`;
            console.log(`Игрок угадал число!`);
        }
        else {
            console.log(`Игрок не угадал число.`);
        }
    }

    // MARK:- `interface GameModelViewDelegate`

    public gameModelViewDidSelectColumn(didSelectColumnAt: number | undefined): void {
        this.#numeralIndex = didSelectColumnAt;
    }

    // MARK: - `interface GameModelViewDataSource`

    public htmlFor(numeral: string, forNumeral: { lhs?: IGameSequence, rhs?: IGameSequence }, atIndex: number): string {
        if (forNumeral.lhs) {
            return this.#htmlStrategy.forLhs(numeral, atIndex);
        }
        if (forNumeral.rhs) {
            return this.#htmlStrategy.forRhs(numeral, atIndex);
        }
        return `${numeral}`;
    }

    public selectorForMount(self: IGameModelView): string { return `article[id='body']` }

    public selectorForLhs(self: IGameModelView): string { return `h1[id='target']` }
    public selectorForRhs(self: IGameModelView): string { return `h1[id='sequence']` }

    public selectorForLhsModifiers(self: IGameModelView): string { return `section[id='target_modifiers'] > ul` }
    public selectorForRhsModifiers(self: IGameModelView): string { return `section[id='sequence_modifiers'] > ul` }

    public classForSelected(self: IGameModelView): string { return `selected` }
    public classForDeselected(): string { return `deselected` }

    // MARK:- `interface GameModelDelegate`

    public gameDidSetLhs(lhs: IGameSequence): void {
        this.#subscribers.forEach(
            (subscriber) => subscriber.receive({lhs: lhs})
        );
    }

    public gameDidSetRhs(rhs: IGameSequence): void {
        this.#subscribers.forEach(
            (subscriber) => subscriber.receive({rhs: rhs})
        )
    }

    // MARK:- `interface IPublisher<Output>`

    readonly #subscribers: Array<ISubscriber<{ lhs?: IGameSequence, rhs?: IGameSequence }>> = [];

    public subscribe(observer: ISubscriber<{ lhs?: IGameSequence, rhs?: IGameSequence }>): void {
        this.#subscribers.push(observer);
    }
}
