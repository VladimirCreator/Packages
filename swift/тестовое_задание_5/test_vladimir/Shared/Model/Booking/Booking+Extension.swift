/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking+Extension.swift | Initially Modified: 09:23 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Booking+Extension.swift |      Last Modified: 09:31 AM Wed 13 Sep 2023
   /Shared/Model/Booking/Booking+Extension.swift
   Wed 13 Sep 2023
     __:__ AM | `` | ()
     #
*/

internal extension Booking {
    static let zero: Booking = .init(id: .zero, hotel_name: "Имя отеля", hotel_adress: "Адрес отеля", horating: .zero, rating_name: "Оценка отеля", departure: "Вылет из", arrival_country: "Прибытие в", tour_date_start: "Today", tour_date_stop: "Tomorrow", number_of_nights: .zero, room: "Описание номера", nutrition: "Описание питания", tour_price: 1, fuel_charge: .zero, service_charge: .zero)
}

extension Booking: Decodable {
    private enum JSONKeys: String, CodingKey {
        case id
        case hotel_name
        case hotel_adress
        case horating
        case rating_name
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

    internal init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let id = try? values.decode(UInt.self, forKey: .id),
              let hotel_name = try? values.decode(String.self, forKey: .hotel_name),
              let hotel_adress = try? values.decode(String.self, forKey: .hotel_adress),
              let horating = try? values.decode(UInt.self, forKey: .horating),
              let rating_name = try? values.decode(String.self, forKey: .rating_name),
              let departure = try? values.decode(String.self, forKey: .departure),
              let arrival_country = try? values.decode(String.self, forKey: .arrival_country),
              let tour_date_start = try? values.decode(String.self, forKey: .tour_date_start),
              let tour_date_stop = try? values.decode(String.self, forKey: .tour_date_stop),
              let number_of_nights = try? values.decode(UInt.self, forKey: .number_of_nights),
              let room = try? values.decode(String.self, forKey: .room),
              let nutrition = try? values.decode(String.self, forKey: .nutrition),
              let tour_price = try? values.decode(UInt.self, forKey: .tour_price),
              let fuel_charge = try? values.decode(UInt.self, forKey: .fuel_charge),
              let service_charge = try? values.decode(UInt.self, forKey: .service_charge)
        else {
            fatalError("\(#function)")
        }

        self.id = id
        self.hotel_name = hotel_name
        self.hotel_adress = hotel_adress
        self.horating = horating
        self.rating_name = rating_name
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
