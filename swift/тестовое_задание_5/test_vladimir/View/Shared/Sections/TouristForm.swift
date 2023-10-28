/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | TouristForm.swift | Initially Modified: 04:23 PM Tue 12 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | TouristForm.swift |      Last Modified: __:__ PM ___ __ Sep 2023
   /View/Shared/Sections/TouristForm.swift
   Tue 12 Sep 2023
 __:__ PM | `` | ()
 #
*/

import SwiftUI

internal struct TouristForm: View {
    @Binding internal var tourist: Tourist

    internal var body: some View {
        Form {
            VStack(alignment: .leading, spacing: 8.0) {
                NePridumalNazvanieTextField(title: Tourist.Field.firstName.rawValue, formatter: nil, text: $tourist.firstName) { EmptyView() }
                NePridumalNazvanieTextField(title: Tourist.Field.lastName.rawValue, formatter: nil, text: $tourist.lastName) { EmptyView() }
                NePridumalNazvanieTextField(title: Tourist.Field.birthDate.rawValue, formatter: nil, text: $tourist.birthDate) { EmptyView() }
                NePridumalNazvanieTextField(title: Tourist.Field.citizenship.rawValue, formatter: nil, text: $tourist.citizenship) { EmptyView() }
                NePridumalNazvanieTextField(title: Tourist.Field.abroadPassportNumber.rawValue, formatter: nil, text: $tourist.abroadPassportNumber) { EmptyView() }
                NePridumalNazvanieTextField(title: Tourist.Field.abroadPassportVailidityDate.rawValue, formatter: nil, text: $tourist.abroadPassportVailidityDate) { EmptyView() }
            }
        }
        .formStyle(.columns)
    }
}
