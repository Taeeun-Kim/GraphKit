//
//  ContentView.swift
//  GraphKit_SwiftUI
//
//  Created by Taeeun Kim on 07.08.21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            ForEach(1...10, id: \.self) { row in
                VStack {
                    CircleRow()
                }
            }
        }
    }
}

struct CircleRow: View {
    var body: some View {
        ForEach(1...10, id: \.self) { col in
            HStack {
                Circle()
                    .frame(width: 15, height: 15)
                    .foregroundColor(.gray)
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
