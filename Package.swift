// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "SystemBeep",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "SystemBeep",
            targets: ["SystemBeepPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "SystemBeepPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/SystemBeepPlugin"),
        .testTarget(
            name: "SystemBeepPluginTests",
            dependencies: ["SystemBeepPlugin"],
            path: "ios/Tests/SystemBeepPluginTests")
    ]
)