class ConfigurationHandlerClass {
    private _configuration: any;
    private _configPath: string;
    private static _instance: ConfigurationHandlerClass | null = null;

    private constructor(configPath: string) {
        this._configPath = configPath;
    }

    public get(key: string): any {
        if (!this._configuration) this.loadConfiguration();
        return this.getNestedValue(this._configuration, key.split(":"));
    }

    private loadConfiguration() {
        this._configuration = require(this._configPath);
    }

    private getNestedValue(obj: any, keys: string[]): any {
        return keys.reduce((acc, key) => acc && acc[key], obj);
    }

    public static getInstance(configPath?: string): ConfigurationHandlerClass {
        // Se l'istanza non esiste, la crea con il configPath fornito.
        if (!this._instance) {
            if (!configPath) {
                throw new Error(
                    "Configuration path is required for the first instance creation."
                );
            }
            this._instance = new ConfigurationHandlerClass(configPath);
        }
        return this._instance;
    }
}

export const ConfigurationHandler = ConfigurationHandlerClass.getInstance();
