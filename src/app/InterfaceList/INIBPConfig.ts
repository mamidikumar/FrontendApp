export class INIBPConfig {
    AutoStartTimeInMin: number
    LastReadingClearingTimeInMin: number

    checkStatus(): boolean {
        if (this.isContentEmpty(this.AutoStartTimeInMin) || this.isContentEmpty(this.LastReadingClearingTimeInMin))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.AutoStartTimeInMin = data.AutoStartTimeInMin;
        this.LastReadingClearingTimeInMin = data.LastReadingClearingTimeInMin;
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