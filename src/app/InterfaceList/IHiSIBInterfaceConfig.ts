export class IHiSIBInterfaceConfig {
    IpAddr: string;
    UdpPort: string;
    TcpPort: string;

    checkStatus(): boolean {
        if (this.isContentEmpty(this.IpAddr) || this.isContentEmpty(this.UdpPort)
            || this.isContentEmpty(this.TcpPort))
            return false;
        else
            return true;
    }
    copyContent(data: any): void {
        this.IpAddr = data.IpAddr;
        this.UdpPort = data.UdpPort;
        this.TcpPort = data.TcpPort;
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