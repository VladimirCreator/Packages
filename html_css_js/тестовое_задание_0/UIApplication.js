class UIApplication {

    // MARK: Properties

    applications = [];
    #observers = [];

    #domain = "http://checkstatus.website:8099";
    #headers = { "Content-Type": "application/json;charset=utf-8" };

    // MARK: Constructors

    constructor(flag = true) {
        if (flag) {
            throw new Error();
        }
    }

    // MARK: Methods

    attachObserver(observer) {
        this.#observers.push(observer);
    }

    detachObserver(observer) {
        this.#observers = this.#observers.filter(candidate => candidate !== observer);
    }

    notifyObservers(object) {
        this.#observers.forEach(observer => observer.applicationDidFetch(object));
    }

    download() {
        const body = JSON.stringify("");

        fetch(this.#domain.concat("/Face/App_List/"), { method: "POST", headers: this.#headers, body: body })
            .then(data => data.json())
            .then(data => {
                const applications = [];

                let index = 0;
                for (const value of Object.values(data)[index]) {
                    const application = {};

                    for (const key of Object.keys(data)) {
                        application[key] = data[key][index];
                    }

                    applications.push(new Application(application));
                    index += 1;
                }

                this.applications = applications;
                this.notifyObservers(this.applications);
            })
            .catch(error => console.log(error));
    }

    upload(application) {
        const body = JSON.stringify(application);

        fetch(this.#domain.concat("/Face/New_app"), { method: "POST", headers: { ...this.#headers, "Content-Length": body.length }, body: `'${body}'` })
            .then(response => response.json())
            .then(object => {
                this.notifyObservers(object);

                if (object.error === 0 || object.error === "0") {
                    this.applications.push(application);
                    this.notifyObservers(this.applications);
                }
            });
    }

    update(application) {
        const body = JSON.stringify(application);

        fetch(this.#domain.concat("/Face/Update_app"), { method: "POST", headers: { ...this.#headers, "Content-Length": body.length }, body: `'${body}'` })
            .then(response => response.json())
            .then(object => {
                this.notifyObservers(object);

                this.applications = this.applications.map(candidate => { if (candidate.app_id !== application.app_id) { return candidate; } return application; });
                this.notifyObservers(this.applications);
            });
    }

    // MARK: ...

    /** @type {UIApplication|undefined */

    static #shared = undefined;

    static get shared() {
        if (typeof UIApplication.#shared !== "object") {
            UIApplication.#shared = new UIApplication(false);
        }
        return UIApplication.#shared;
    }

}
