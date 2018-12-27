import { ChatMessage } from "../models/chat-message.model";

export class Group {
    $key?: string;
    id: string;
    groupName?: string;
    groupOwner?: string;
    groupChat?: ChatMessage[];
}
