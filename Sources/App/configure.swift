import Vapor
import Leaf // added
/// Called before your application initializes.
public func configure(
    _ config: inout Config,
    _ env: inout Environment,
    _ services: inout Services
    ) throws {


    /// Register routes to the router
    let router = EngineRouter.default()
    try routes(router)
    services.register(router, as: Router.self)

    /// Register middleware
    var middlewares = MiddlewareConfig() // Create _empty_ middleware config
    middlewares.use(FileMiddleware.self) // Serves files from `Public/` directory
    middlewares.use(ErrorMiddleware.self) // Catches errors and converts to HTTP response
    services.register(middlewares)


    let myService = NIOServerConfig.default(port: 8001)
    services.register(myService)

    // Register the LeafProvider
    let leafProvider = LeafProvider() // added
    try services.register(leafProvider) // added

    // Set LeafRenderer as our preferred ViewRenderer
    config.prefer(LeafRenderer.self, for: ViewRenderer.self) // added

}
