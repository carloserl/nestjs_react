
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HitDocument = Hit & Document;

@Schema()
export class Hit {
  @Prop()
  story_id: string;

  @Prop()
  story_title: string;

  @Prop()
  created_at: string;

  @Prop()
  author: string;

  @Prop()
  comment_text: string;

  @Prop()
  story_url: string;

  @Prop()
  delete_state: string;
}

export const HitSchema = SchemaFactory.createForClass(Hit);


// "created_at": "2021-06-07T14:36:03.000Z",
// "author": "stonemetal12",
// "comment_text": "It allows you to connect developer tools to a nodejs instance as if that nodejs instance was running in your browser.<p>On the firefox side there is node-firefox that should accomplish the job. That hasn&#x27;t been updated in like 5 years, so who knows if it actually works.",
// "story_id": 27421724,
// "story_title": "Chrome is faster in M91",
// "story_url": "https://blog.chromium.org/2021/05/chrome-is-faster-in-m91.html",