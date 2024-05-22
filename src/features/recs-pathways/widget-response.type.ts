export interface MetadataResponse {
  personalized_results: boolean
  fallback: string
  recall: string
}

export interface Widget {
  id: string
  name: string
  description: string
  type: string
  rid: string
}

export interface Metadata {
  widget: Widget
  query: string,
  response: MetadataResponse
}

export interface WidgetResponseDoc {
  price: number
  url: string
  pid: string
  sale_price: number
  thumb_image: string
  title: string
}

export interface WidgetResponseResponse {
  numFound: number
  start: number
  docs: WidgetResponseDoc[]
}

export interface WidgetResponse {
  response: WidgetResponseResponse
  metadata: Metadata
}


