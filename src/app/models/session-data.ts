export abstract class SessionData {

    public static get AuthToken(): string {
        return localStorage.getItem('token');
    }
    public static set AuthToken(item: string) {
        localStorage.setItem('token', item);
    }

    private static definitionsForm: object;
    public static get definitionForm(): Object {
        return this.definitionsForm;
    }
    public static set definitionForm(item: Object) {
        this.definitionsForm = item;
    }

    public static get hasLoggedIn(): boolean {
        if (this.AuthToken) {
            return true;
        }
        else {
            return false;
        }
    }

    public static get userType(): string {
        return localStorage.getItem('userType');
    }
    public static set userType(item: string) {
        localStorage.setItem('userType', item);
    }

    private static _redirectURL: string;
    public static get redirectURL(): string {
        return this._redirectURL;
    }
    public static set redirectURL(item: string) {
        this._redirectURL = item;
    }
    

    private static triggeraDraft: boolean;
    public static get triggerDraft(): boolean {
        return this.triggeraDraft;
    }
    public static set triggerDraft(item: boolean) {
        this.triggeraDraft = item;
    }

    private static isSubmit: boolean;
    public static get isSubmitForm(): boolean {
        return this.isSubmit;
    }
    public static set isSubmitForm(item: boolean) {
        this.isSubmit = item;
    }

    public static clear(): void {
        localStorage.clear();
    }
}