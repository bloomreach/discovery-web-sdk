/**
 * Metadata response details.
 */
export interface MetadataResponse {
  personalized_results: boolean
  fallback: string
  recall: string
}

/**
 * Widget details.
 */
export interface Widget {
  id: string
  name: string
  description: string
  type: string
  rid: string
}

/**
 * Metadata information.
 */
export interface Metadata {
  widget: Widget
  query: string,
  response: MetadataResponse
}

/**
 * Document details in the widget response.
 */
export interface WidgetResponseDoc {
  price: number
  url: string
  pid: string
  sale_price: number
  thumb_image: string
  title: string
}

/**
 * Response details in the widget response.
 */
export interface WidgetResponseResponse {
  numFound: number
  start: number
  docs: WidgetResponseDoc[]
}

/**
 * Widget response object.
 */
export interface WidgetResponse {
  response: WidgetResponseResponse
  metadata: Metadata
}


