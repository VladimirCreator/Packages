import Foundation
import Combine

internal protocol FetchViewModel: AnyObject {
    func fetch<T>(_ type: T.Type, from url: String) async throws -> T where T : Decodable
}

extension FetchViewModel {
    func fetch<T>(_ type: T.Type, from url: String) async throws -> T where T : Decodable { //guard false else { return }
        guard let url: URL = .init(string: url) else { return /* I do not know how to handle it gracefully. */ }
        async let (data, _) = try URLSession.shared.data(from: url)

        return try await JSONDecoder().decode(type, from: data)
    }
}

internal class HotelViewModel: ObservableObject {
    @Published
    internal var hotel: Hotel = .zero
}

extension HotelViewModel: FetchViewModel {}
extension RoomViewModel: FetchViewModel {}
extension BookingViewModel: FetchViewModel {}

