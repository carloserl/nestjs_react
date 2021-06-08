import { Document } from 'mongoose';
export declare type HitDocument = Hit & Document;
export declare class Hit {
    story_id: string;
    story_title: string;
    created_at: string;
    author: string;
    comment_text: string;
    story_url: string;
    delete_state: string;
}
export declare const HitSchema: import("mongoose").Schema<Document<Hit, any>, import("mongoose").Model<any, any, any>, undefined>;
