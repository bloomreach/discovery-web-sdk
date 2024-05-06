export interface TrackingParameters {
  /**
   * First Party cookie that provides unique identifier
   */
  _br_uid_2: string;

  /**
   * ID to track site visitor clicks
   */
  request_id?: number;

  /**
   *
   * Absolute URL of the page where the request initiated
   */
  url: string;

  /**
   * URL of the page or HTTP referrer where request started
   */
  ref_url?: string;

  /**
   * The universal customer ID of the user. You only need to pass this field if your particular integration tracks customers this way.
   * The parameter captures user IDs from the customer side, and reuses the information when powering apps or enhancing cross-device linking. In this way,
   * Bloomreach recognizes users in a way that's aligned with your system. Use an anonymous string. Don't use email or other personally identifiable information.
   * If you do not track users this way, then omit this field.
   */
  user_id?: string;
}

