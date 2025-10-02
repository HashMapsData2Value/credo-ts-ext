// Mock for @credo-ts/cheqd to avoid ES module issues in Jest
module.exports = {
  CheqdModule: class CheqdModule {
    register(dependencyManager) {
      // Empty register method - does nothing but prevents DI errors
    }
  },
  CheqdDidResolver: class CheqdDidResolver {},
  CheqdDidRegistrar: class CheqdDidRegistrar {},
  CheqdAnonCredsRegistry: class CheqdAnonCredsRegistry {},
};