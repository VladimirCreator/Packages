/* -> History Entry / The Game / Core / Initially Modified: Mon 06 Mar 2023 07:50 PM
    -> History Entry / The Game / Core /      Last Modified: Fri 14 Apr 2023 : PM

    TypeScript: #class, #enum, #function, #interface, #namespace, #type
    Visual Studio Code: #file

    Fri 14 Apr 2023
        : PM / # / `` / ()
*/
type numeral = number
type Optional<T> = T | undefined

function final(constructor: Function): void {
    Object.seal(constructor); Object.seal(constructor.prototype)
}

interface IPublisher<Output = undefined> {
    /** `interface IPublisher<Output>` */
    subscribe(observer: ISubscriber<Output>): void
}

interface ISubscriber<Input = undefined> {
    /** `interface ISubscriber<Input>` */
    receive(input: Input): void
}
