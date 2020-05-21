export class IStateManagerConfig {
    ProcessesTobeBooted: string;
    rollSizeKB: string;
    SCU_AE: string;
    SCP_AE: string;
    SCP_IP: string;
    SCP_PORT: string;
    QUERYFILE: string;
    QUERYEXEC: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.ProcessesTobeBooted) || this.isContentEmpty(this.rollSizeKB)
            || this.isContentEmpty(this.SCU_AE) || this.isContentEmpty(this.SCP_AE)
            || this.isContentEmpty(this.SCP_IP) || this.isContentEmpty(this.SCP_PORT)
            || this.isContentEmpty(this.QUERYFILE) || this.isContentEmpty(this.QUERYEXEC)
        )
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.ProcessesTobeBooted = data.ProcessesTobeBooted;
        this.rollSizeKB = data.rollSizeKB;
        this.SCU_AE = data.SCU_AE;
        this.SCP_AE = data.SCP_AE;
        this.SCP_IP = data.SCP_IP;
        this.SCP_PORT = data.SCP_PORT;
        this.QUERYFILE = data.QUERYFILE;
        this.QUERYEXEC = data.QUERYEXEC;
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