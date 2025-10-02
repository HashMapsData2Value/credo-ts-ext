// Mock for @credo-ts/cheqd to avoid ES module issues in Jest
export class CheqdModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public register(_dependencyManager: unknown): void {
    // Empty register method - does nothing but prevents DI errors
  }
}

export class CheqdDidResolver {}
export class CheqdDidRegistrar {}
export class CheqdAnonCredsRegistry {}
