export class ChatMessage {
    $key?: string;
    id: string;
    email?: string;
    userName?: string;
    message?: string;
    url?: string;
    filename?:string;
    timeSent?: number; //Date = new Date();
}
