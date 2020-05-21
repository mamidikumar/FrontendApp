export class IWaveformPresentationConfig {
    SweepSpeed: string;
    RenderMode: string;
    CursorGap: string;
    LineWidth: string;
    ['Line Smoothening']: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.SweepSpeed) || this.isContentEmpty(this.RenderMode)
            || this.isContentEmpty(this.CursorGap) || this.isContentEmpty(this.LineWidth)
            || this.isContentEmpty(this['Line Smoothening']))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.SweepSpeed = data.SweepSpeed;
        this.RenderMode = data.RenderMode;
        this.CursorGap = data.CursorGap;
        this.LineWidth = data.LineWidth;
        this['Line Smoothening'] = data['Line Smoothening'];
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