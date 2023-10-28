/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PaidOrderView.swift | Initially Modified: 05:34 PM Tue 5 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | PaidOrderView.swift |      Last Modified: __:__ PM Tue 5 Sep 2023
   /View/General/PaidOrderView.swift
   Tue 5 Sep 2023
     __:__ PM | `` | (+)
     #
   Sun 10 Sep 2023
     04:01 PM | /View/ -> /View/General/ | (~)
     #folder
*/

import SwiftUI

internal struct PaidOrderView: View {
    @Environment(\.shouldPopToRoot) private var shouldPopToRoot

    internal var body: some View {
        VStack(alignment: .center, spacing: 32.0) {
            graphic
            title
            description
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(.white)
        .navigationTitle("Заказ оплачен")
        .toolbar(.visible, for: .bottomBar)
        .toolbarBackground(.red, for: .bottomBar)
        .toolbar {
            ToolbarItem(placement: .bottomBar) {
                Button {
                    shouldPopToRoot.wrappedValue = true
                } label: {
                    Text("Супер!")
                }
                .buttonStyle(.nePridumalNazvanie)
            }
        }
        .environment(\.multilineTextAlignment, .center)
    }

    private var graphic: some View {
        Circle()
            .fill(.xf6f6f9)
            .frame(width: 94, height: 94)
            .overlay(
                Text("🎉")
                    .font(
                        .system(size: 44.0)
                    )
            )
    }

    private var title: some View {
        Text("Ваш заказ принят в работу")
            .textStyle(Issue1TextStyle())
    }

    private var description: some View {
        Text("Подтверждение заказа №\(UInt.random(in: UInt.zero...UInt.max)) может занять некоторое время (от 1 часа до суток).\nКак только мы получим ответ от туроператора, вам на почту придёт уведомление.")
            .textStyle(NePridumalNazvanieTextStyle(color: .x828796))
            .padding(.top, -12.0)
    }
}
