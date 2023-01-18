export interface IObject {
  type: string
  content?: string
  summary?: string
  id?: string
  name?: string
  image?: IObject[]
  inreplyto?: IObject
  attributedTo?: IObject[]
  mediaType?: string
}

export interface IActivity extends IObject {
  actor?: IObject;
  object?: IObject;
  target?: IObject;
  result?: IObject;
  origin?: IObject;
}
