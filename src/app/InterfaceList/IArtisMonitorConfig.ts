export class IArtisMonitorConfig {
    WidthInPixel: string;
    HeightInPixel: string;
    WidthInMM: string;
    HeightInMM: string;
    SegemntWidth: string;
    SegmentHeight: string;
    Header: string;
    FormMaximize: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.WidthInPixel) || this.isContentEmpty(this.HeightInPixel)
            || this.isContentEmpty(this.WidthInMM) || this.isContentEmpty(this.HeightInMM) ||
            this.isContentEmpty(this.SegemntWidth) || this.isContentEmpty(this.SegmentHeight)
            || this.isContentEmpty(this.Header) || this.isContentEmpty(this.FormMaximize))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.WidthInPixel = data.WidthInPixel;
        this.HeightInPixel = data.HeightInPixel;
        this.WidthInMM = data.WidthInMM;
        this.HeightInMM = data.HeightInMM;
        this.WidthInPixel = data.WidthInPixel;
        this.SegemntWidth = data.SegemntWidth;
        this.Header = data.Header;
        this.FormMaximize = data.FormMaximize;
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