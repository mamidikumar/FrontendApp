export class ISignalGroups {
    Type: string;
    SigID: string;
    Label: string;
    Position: string;
    Sensitivity: string;
    Color: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.Type) || this.isContentEmpty(this.SigID)
            || this.isContentEmpty(this.Label) || this.isContentEmpty(this.Position)
            || this.isContentEmpty(this.Sensitivity) || this.isContentEmpty(this.Color))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.Type = data.Type;
        this.SigID = data.SigID;
        this.Label = data.Label;
        this.Position = data.Position;
        this.Sensitivity = data.Sensitivity;
        this.Color = data.Color;
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