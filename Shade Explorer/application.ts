/* -> History Entry / The Game / Game Application / Initially Modified: Mon 06 Mar 2023 07:50 PM
   -> History Entry / The Game / Game Application /      Last Modified: Fri 14 Apr 2023 : PM

   TypeScript: #class, #enum, #function, #interface, #namespace, #type
   Visual Studio Code: #file

   Fri 14 Apr 2023
       : PM / # / `` / ()
*/
interface MenuDelegate {
    didSelectItem(item: { numbers: number[], radices: radix[], decorators: decorator[], completed: boolean }): void;
}

/** This `class Application` does not exist!
*/
@final class Application implements MenuDelegate {
    // Block
    public Controller: GameModelController;

    // Block
    public timeouts: Array<number> = [];
    public touches: Array<Touch> = [];

    private static readonly_shared: Optional<Application> = undefined;

    // Block
    public static get shared() {
        if (typeof Application.readonly_shared === `undefined`) {
            Application.readonly_shared = new Application();

            window.addEventListener(
                Application.prevent_selectstart[0], Application.prevent_selectstart[1],
                { passive : false }
            );
            window.addEventListener(
                Application.permit_selectstart[0], Application.permit_selectstart[1],
                { passive : false }
            );
            window.addEventListener(
                Application.processing_selectstart[0], Application.processing_selectstart[1],
                { passive : false }
            );
            window.addEventListener(
                Application.completing_selectstart[0], Application.completing_selectstart[1],
                { passive : false }
            );
        }
        return Application.readonly_shared;
    }

    // MARK:- `interface MenuDelegate`

    public didSelectItem(item: { numbers: number[], radices: radix[], decorators: decorator[], completed: boolean }) {
        Application.shared.Controller = new GameModelController(item);
        Application.shared.Controller.GameModel.start();
    }

    public static prevent_selectstart: [`selectstart`, (event: Event) => void] = [
        `selectstart`,
        (event) => {
            if (event.cancelable) { event.preventDefault() }
            event.stopPropagation()
        }
    ];

    public static permit_selectstart: [`touchstart`, (event: TouchEvent) => void] = [
        `touchstart`,
        (event) => {
            if (event.cancelable) { event.preventDefault() }
            event.stopPropagation()

            Application.shared.touches.push(event.touches[0]);
        }
    ];

    public static processing_selectstart: [`touchmove`, (event: TouchEvent) => void] = [
        `touchmove`,
        (event) => {
            if (event.cancelable) { event.preventDefault() }
            event.stopPropagation()
        }
    ];

    public static completing_selectstart: [`touchend`, (event: TouchEvent) => void] = [
        `touchend`,
        (event: TouchEvent) => {
            if (event.cancelable) { event.preventDefault() }
            event.stopPropagation();

            Application.shared.touches.push(event.changedTouches[0]);

            if (Application.shared.touches.length === 2) {
                Application.shared.timeouts.forEach(
                    (timeout) => clearTimeout(timeout)
                );
                Application.shared.timeouts.push(
                    setTimeout(
                        () => {
                            Application.shared.Controller.GameModelView.numeral = null;
                        },
                        30_000
                    )
                );

                const   endTouch = Application.shared.touches.pop()!;
                const startTouch = Application.shared.touches.pop()!;

                const [finalY, initialY] = [endTouch.pageY, startTouch.pageY];
                const [finalX, initialX] = [endTouch.pageX, startTouch.pageX];

                if (event.touches.length == 2) {
                    Application.shared.Controller.GameModel.triumph;
                    return
                }

                if (initialY - finalY > 0) {
                    if (initialY - finalY > 70) {
                        Application.shared.Controller.increase();
                        return;
                    }
                } else if (initialY - finalY < 0) {
                    if (initialY - finalY < -70) {
                        Application.shared.Controller.decrease();
                        return;
                    }
                }

                if (initialX - finalX > 0) {
                    if (initialX - finalX > 70) {
                        Application.shared.Controller.left();
                    }
                } else if (initialX - finalX < 0) {
                    if (initialX - finalX < -70) {
                        Application.shared.Controller.right();
                    }
                }
            }
        }
    ];
}
