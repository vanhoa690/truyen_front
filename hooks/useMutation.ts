import { Record } from "../interfaces/RecordEntities"

export type Action<T> = (record: T) => Promise<void>
