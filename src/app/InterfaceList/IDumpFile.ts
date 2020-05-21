import { stringify } from 'querystring';


export class IDumpFile {
    CreateRawFile: string;
    FileName: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.CreateRawFile) || this.isContentEmpty(this.FileName))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.CreateRawFile = data.CreateRawFile;
        this.FileName = data.FileName;
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