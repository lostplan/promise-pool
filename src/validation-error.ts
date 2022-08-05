'use strict'

export class ValidationError extends Error {
  /**
   * Create a new instance for the given `message`.
   *
   * @param message  The error message
   */
  constructor (message?: string) {
    super(message)

    Error.captureStackTrace(this, this.constructor)
  }

  /**
   * Returns a validation error with the given `message`.
   *
   * @deprecated use the `createFromMessage()` method instead
   */
  static createFrom (message: string): ValidationError {
    return this.createFromMessage(message)
  }

  /**
   * Returns a validation error with the given `message`.
   */
  static createFromMessage (message: string): ValidationError {
    return new this(message)
  }
}
