import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TradeDataStringDocument = TradeDataString & Document;

@Schema()
export class TradeDataString {
  @Prop({ required: true })
  data: string;
}

export const TradeDataStringSchema =
  SchemaFactory.createForClass(TradeDataString);
