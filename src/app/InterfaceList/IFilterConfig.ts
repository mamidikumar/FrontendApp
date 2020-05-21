export class IFilterConfig {
    LowPassFilter: string;
    HighPassFiltrer: string;
    NotchFilter: string;
    FilerResetOnLeadDissconnect: string;
    DumpFilterData: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.LowPassFilter) || this.isContentEmpty(this.HighPassFiltrer)
            || this.isContentEmpty(this.NotchFilter) || this.isContentEmpty(this.FilerResetOnLeadDissconnect)
            || this.isContentEmpty(this.DumpFilterData))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.LowPassFilter = data.LowPassFilter;
        this.HighPassFiltrer = data.HighPassFiltrer;
        this.NotchFilter = data.NotchFilter;
        this.FilerResetOnLeadDissconnect = data.FilerResetOnLeadDissconnect;
        this.DumpFilterData = data.DumpFilterData;
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