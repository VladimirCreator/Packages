/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NavigationViewModel.swift | Initially Modified: 08:54 PM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | NavigationViewModel.swift |      Last Modified: 08:56 PM Mon 11 Sep 2023
   /ViewModel/NavigationViewModel.swift

   Swift
 - class

   Swift Playgrounds
 - file
 - folder
 
   Tue 5 Sep 2023
 __:__ PM | `` | (+)
 #
 */

import SwiftUI

internal class NavigationViewModel: ObservableObject {
    
    @Published internal var path: NavigationPath = .init()

    internal func getToRoot() { // 09:25 PM Mon 11 Sep 2023
        path.removeLast(path.count)
    }

}
