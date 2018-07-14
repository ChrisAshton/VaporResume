import Vapor
import Leaf // added
import Routing // added


/// Register your application's routes here.
public func routes(_ router: Router) throws {
    router.get("resume") { req -> Future<View> in
        return try req.view().render("resume")
    }

}
