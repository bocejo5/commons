export class Helper {
    public static isEmpty(value: any): boolean {
        if (Array.isArray(value)) return value.length === 0;
        if (typeof value === "object") return Object.keys(value).length === 0;
        return value === null || value === undefined || value === "" || value;
    }

    public static isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
