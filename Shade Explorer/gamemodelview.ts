/* -> History Entry / The Game / Game Model View / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Game Model View /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
interface GameModelViewDataSource {
    htmlFor(numeral: string, forNumeral: { lhs?: IGameSequence, rhs?: IGameSequence }, atIndex: number): string

    selectorForMount(self: IGameModelView): string
    selectorForLhs(self: IGameModelView): string
    selectorForRhs(self: IGameModelView): string

    classForSelected(self: IGameModelView): string
    classForDeselected(): string

    selectorForLhsModifiers(self: IGameModelView): string
    selectorForRhsModifiers(self: IGameModelView): string
}

interface GameModelViewDelegate {
    gameModelViewDidSelectColumn(didSelectColumnAt: number | undefined): void
    //gameModelView(self: IGameModelView, didSelectModifierColumnAt: number): void
}

interface IGameModelView {
    get mount(): HTMLElement

    get lhs(): HTMLHeadingElement
    get rhs(): HTMLHeadingElement

    get numeral(): HTMLSpanElement | null

    get lhs_modifiers(): HTMLUListElement
    get rhs_modifiers(): HTMLUListElement
}

interface FormattingStrategy { draw(sequence: IGameSequence, atIndex: number): string }

@final class RadixStrategy implements FormattingStrategy {
    public draw(sequence: IGameSequence, atIndex: number): string {
        return `${sequence.numerals[atIndex].toString(sequence.radix)}`
    }
}

@final class WordStrategy implements FormattingStrategy {
    readonly #readonly_numeral_to_string = new Map(
        [
            [0x00,     `zero`],[0x01,      `one`],
            [0x02,      `two`],[0x03,    `three`],
            [0x04,     `four`],[0x05,     `five`],
            [0x06,      `six`],[0x07,    `seven`],
            [0x08,    `eight`],[0x09,     `nine`],
            [0x0A,      `ten`],[0x0B,   `eleven`],
            [0x0C,   `twelve`],[0x0D, `thirteen`],
            [0x0E, `fourteen`],[0x0F,  `fifteen`]
        ]
    );

    #WordFor(numeral: numeral, radix: radix): string {
        if (false) {
            return Array.from(numeral.toString())
                        .reduce(
                            (word, numeral) => word += numeral
                        )
        }
        else return this.#readonly_numeral_to_string.get(numeral)!
    }

    public draw(sequence: IGameSequence, atIndex: number): string {
        return `${this.#WordFor(sequence.numerals[atIndex], sequence.radix)}`
    }
}

class GameModelView implements IGameModelView,
                                ISubscriber<{ lhs?: IGameSequence, rhs?: IGameSequence }>
{
            #datasource: Optional<GameModelViewDataSource> = undefined
    public delegate: Optional<GameModelViewDelegate> = undefined
    public displayStrategy: Optional<FormattingStrategy> = undefined

    public get datasource(): Optional<GameModelViewDataSource> { return this.#datasource }

    public set datasource(datasource: Optional<GameModelViewDataSource>) {
        this.#datasource = datasource

        this.rhs.addEventListener(
            `touchstart`, (event: TouchEvent) => {
                if (event.cancelable) { event.preventDefault() }
                event.stopPropagation()

                this.rhs.dispatchEvent(new TouchEvent(`touchmove`, { touches : Array.from(event.touches) }))
            },
            { passive : false }
        )
        this.rhs.addEventListener(
            `touchmove`, (event: TouchEvent) => {
                if (event.cancelable) { event.preventDefault() }

                let [pageX, pageY] = [event.touches[0].pageX, event.touches[0].pageY]

                const hoveredElement = document.elementFromPoint(pageX, pageY)

                if (!hoveredElement) { this.numeral = null; return }
                else if (hoveredElement.className === this.#datasource?.classForDeselected()) {
                    event.stopPropagation()
                    this.numeral = null
                    hoveredElement.className = this.#datasource?.classForSelected(this) ?? ``
                    this.delegate?.gameModelViewDidSelectColumn(parseInt(hoveredElement.id))

                    Application.shared.timeouts.forEach(
                        (timeout) => clearTimeout(timeout)
                    )
                }
            },
            { passive: false }
        )
        this.rhs.addEventListener(
            `touchend`, (event: TouchEvent) => {
                if (event.cancelable) { event.preventDefault() }
                event.stopPropagation()
            }
        )
    }

    public set numeral(numeral: HTMLSpanElement | null) {
        if (numeral) {
            this.numeral!.className = this.#datasource?.classForDeselected() ?? ``
            numeral.className = this.#datasource?.classForSelected(this) ?? ``
        }
        else Array.from(
            this.rhs.children, child => {
                child.className = this.#datasource?.classForDeselected() ?? ``
            }
        );
        this.delegate?.gameModelViewDidSelectColumn(parseInt(this.numeral?.id ?? `-1`))
    }

    // MARK:- `interface IGameModelView`

    public get mount(): HTMLElement {
        return document.querySelector(
            this.#datasource?.selectorForMount(this) ?? ``
        )!
    }

    public get lhs(): HTMLHeadingElement {
        return document.querySelector(
            this.#datasource?.selectorForLhs(this) ?? ``
        )!
    }

    public get rhs(): HTMLHeadingElement {
        return document.querySelector(
            this.#datasource?.selectorForRhs(this) ?? ``
        )!
    }

    public get lhs_modifiers(): HTMLUListElement {
        return document.querySelector(
            this.#datasource?.selectorForLhsModifiers(this) ?? ``
        )!
    }

    public get rhs_modifiers(): HTMLUListElement {
        return document.querySelector(
            this.#datasource?.selectorForRhsModifiers(this) ?? ``
        )!
    }

    public get numeral(): HTMLSpanElement | null {
        const numeral = Array.from(
            this.rhs.children, child => {
                if (child.className === this.#datasource?.classForSelected(this) ?? ``) {
                    return child
                }
            }
        )
        .filter(numeral => numeral !== undefined)
        if (numeral.length >= 1) {
            return numeral.pop()! as HTMLSpanElement
        }
        return null
    }

    // MARK:- `interface ISubscriber<{ lhs?: IGameSequence, rhs?: IGameSequence }>`

    public receive(sequence: { lhs?: IGameSequence, rhs?: IGameSequence }): void {
        if (sequence.lhs) {
            if (this.lhs.children.length !== 0) {
                Array.from(this.lhs.children)
                        .reverse()
                        .forEach(
                            (child, index) => {
                                child.textContent = this.displayStrategy?.draw(sequence.lhs!, index) ?? null;
                            }
                        )
            } else {
                sequence.lhs.numerals.forEach(
                    (numeral, index) => {
                        this.lhs.insertAdjacentHTML(
                            `afterbegin`,
                            this.#datasource?.htmlFor(
                                this.displayStrategy!.draw(sequence.lhs!, index),
                                { lhs: sequence.lhs },
                                index
                            ) ?? `${numeral}`
                        );
                    }
                )
                sequence.lhs.decorators.forEach(
                    ($0) => this.lhs_modifiers.insertAdjacentHTML(`beforeend`, `<li>${$0}</li>`)
                )
            }
        } else if (sequence.rhs) {
            if (this.rhs.children.length !== 0) {
                Array.from(this.rhs.children)
                        .reverse()
                        .forEach(
                            (child, index) => {
                                child.textContent = this.displayStrategy?.draw(sequence.rhs!, index) ?? null
                            }
                        );
            } else {
                sequence.rhs?.numerals.forEach(
                    (numeral, index) => {
                        this.rhs.insertAdjacentHTML(
                            `afterbegin`,
                            this.#datasource?.htmlFor(
                                this.displayStrategy!.draw(sequence.rhs!, index),
                                { rhs: sequence.rhs },
                                index
                            ) ?? `${numeral}`
                        )
                    }
                )
                sequence.rhs.decorators.forEach(
                    ($0) => this.rhs_modifiers.insertAdjacentHTML(`beforeend`, `<li>${$0}</li>`)
                )
            }
        }
    }
}
