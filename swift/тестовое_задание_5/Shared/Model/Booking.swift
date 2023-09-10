/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift | Initially Modified: 01:14 AM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking.swift |      Last Modified: 01:31 AM Mon 11 Sep 2023
   /Shared/Model/Booking.swift

   Swift
 - class

   Swift Playgrounds
 - file
 - folder

   Mon 11 Sep 2023
 __:__ PM | `` | (+)
 #
 */

internal struct Booking: Identifiable {
    typealias ID = UInt
    let id: Self.ID

    let label: String
    let address: String

    let rating: UInt
    let rating_description: String

    let departure: String
    let arrival_country: String

    let tour_date_start: String
    let tour_date_stop: String

    let number_of_nights: UInt
    let room: String

    let nutrition: String

    let tour_price: UInt
    let fuel_charge: UInt
    let service_charge: UInt
}

extension Booking: Decodable { // 01:17 AM Mon 11 Sep 2023
    private enum JSONKeys: String, CodingKey {
        case id
        
        case label = "hotel_name"
        case address = "hotel_adress"
        
        case rating = "horating"
        case rating_description = "rating_name"
        
        case departure
        case arrival_country
        
        case tour_date_start
        case tour_date_stop
        
        case number_of_nights
        case room
        
        case nutrition
        
        case tour_price
        case fuel_charge
        case service_charge
    }
    
    init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)
        let id = try? values.decode(UInt.self, forKey: .id)
        let label = try? values.decode(String.self, forKey: .label)
        let address = try? values.decode(String.self, forKey: .address)
        
        let rating = try? values.decode(UInt.self, forKey: .rating)
        let rating_description = try? values.decode(String.self, forKey: .rating_description)
        
        let departure = try? values.decode(String.self, forKey: .departure)
        let arrival_country = try? values.decode(String.self, forKey: .arrival_country)
        
        let tour_date_start = try? values.decode(String.self, forKey: .tour_date_start)
        let tour_date_stop = try? values.decode(String.self, forKey: .tour_date_stop)
        
        let number_of_nights = try? values.decode(UInt.self, forKey: .number_of_nights)
        let room = try? values.decode(String.self, forKey: .room)
        
        let nutrition = try? values.decode(String.self, forKey: .nutrition)
        
        let tour_price = try? values.decode(UInt.self, forKey: .tour_price)
        let fuel_charge = try? values.decode(UInt.self, forKey: .fuel_charge)
        let service_charge = try? values.decode(UInt.self, forKey: .service_charge)
        
        guard let id,
              let label,
              let address,
              let rating,
              let rating_description,
              let departure,
              let arrival_country,
              let tour_date_start,
              let tour_date_stop,
              let number_of_nights,
              let room,
              let nutrition,
              let tour_price,
              let fuel_charge,
              let service_charge
        else {
            fatalError("Booking from decoder")
        }
        self.id = id
        self.label = label
        self.address = address
        
        self.rating = rating
        self.rating_description = rating_description
        
        self.departure = departure
        self.arrival_country = arrival_country
        
        self.tour_date_start = tour_date_start
        self.tour_date_stop = tour_date_stop
        
        self.number_of_nights = number_of_nights
        self.room = room
        
        self.nutrition = nutrition
        
        self.tour_price = tour_price
        self.fuel_charge = fuel_charge
        self.service_charge = service_charge
    }
}
