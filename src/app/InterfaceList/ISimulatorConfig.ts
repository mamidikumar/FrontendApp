export class ISimulatorConfig {
    RawSignalFile: string;
    KeepRunning: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.RawSignalFile) || this.isContentEmpty(this.KeepRunning))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.RawSignalFile = data.RawSignalFile;
        this.KeepRunning = data.KeepRunning;
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