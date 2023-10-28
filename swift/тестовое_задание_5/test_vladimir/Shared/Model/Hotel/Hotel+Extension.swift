/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel+Extension.swift | Initially Modified: 09:46 AM Wed 13 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Hotel+Extension.swift |      Last Modified: 09:51 AM Wed 13 Sep 2023
   /Shared/Model/Hotel/Hotel+Extension.swift
   Wed 13 Sep 2023
     __:__ AM |  | ()
     #
*/

extension Hotel { // Initially Modified: 03:47 PM Tue 12 Sep 2023
    static let zero: Hotel = .init(
        id: .zero,
        name: "Название отеля",
        adress: "Адрес отеля",
        minimalPrice: .zero,
        priceForIt: "Описание цены",
        rating: .zero,
        ratingName: "Описание рейтинга",
        imageUrls: [
            "https://is4-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1250x703.jpg"
        ],
        aboutTheHotel: .init(
            description: "Описание отеля.",
            peculiarities: [
                "Особенность отеля №1"
            ]
        )
    )
}
