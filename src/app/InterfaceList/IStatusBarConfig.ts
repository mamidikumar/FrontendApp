export class IStatusBarConfig {
    MessageTimeout: number;
    RolloverTime: number;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.MessageTimeout) || this.isContentEmpty(this.RolloverTime))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.MessageTimeout = data.MessageTimeout;
        this.RolloverTime = data.RolloverTime;
    }
    isContentEmpty(data): boolean {
        if (typeof (data) === 'object') {
            if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
                return true;
            } else if (!data) {
                return true;
            }
            return false;
        } else if (typeof (data) === 'string') {
            if (!data.trim()) {
                return true;
            }
            return false;
        } else if (typeof (data) === 'undefined') {
            return true;
        } else {
            return false;
        }
    }
}