class Application {

    app_id;
    app_name;
    policy_id;
    agent_js_config;
    correlations_config;

    // Weird...
    constructor(plain) {
        if (plain instanceof Application) {
            this.agent_js_config = plain.agent_js_config;
            this.app_id = plain.app_id;
            this.correlations_config = plain.correlations_config;
            this.app_name = plain.app_name;
            this.policy_id = plain.policy_id;
        }
        else if (plain instanceof Object) {
            this.agent_js_config = plain.agent_js_configs;
            this.app_id = plain.ids;
            this.correlations_config = plain.correlations_configs;
            this.app_name = plain.names;
            this.policy_id = plain.policy_ids;
        }
    }

}
