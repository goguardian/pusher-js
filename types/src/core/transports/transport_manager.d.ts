import AssistantToTheTransportManager from './assistant_to_the_transport_manager';
import Transport from './transport';
import PingDelayOptions from './ping_delay_options';
export interface TransportManagerOptions extends PingDelayOptions {
    lives?: number;
    transportType?: string;
    reportDeathCallback?: (info: Object) => void;
}
export default class TransportManager {
    options: TransportManagerOptions;
    livesLeft: number;
    reportDeathCallback?: (info: Object) => void;
    constructor(options: TransportManagerOptions);
    getAssistant(transport: Transport): AssistantToTheTransportManager;
    isAlive(): boolean;
    reportDeath(info?: Object): void;
}
