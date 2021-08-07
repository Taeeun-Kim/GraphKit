//
//  ContentView.swift
//  GraphKit_SwiftUI
//
//  Created by Taeeun Kim on 07.08.21.
//

import SwiftUI

struct ContentView: View {
    let data = 1...100 // total number of circles
    let group1 = 1...7
    let group2 = 1...15
    let group3 = 1...31
    let group4 = 1...22
    let group5 = 1...18
    
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    
    var body: some View {
        
        let sum1to2 = group1.count + group2.count
        let sum1to3 = group1.count + group2.count + group3.count
        let sum1to4 = group1.count + group2.count + group3.count + group4.count
        let sum1to5 = group1.count + group2.count + group3.count + group4.count + group5.count
        
        LazyVGrid(columns: columns, spacing: 15) {
            ForEach(data, id: \.self) { item in
                if group1.count >= item {
                    CustomCircle()
                        .foregroundColor(.red)
                } else if group1.count < item && sum1to2 >= item {
                    CustomCircle()
                        .foregroundColor(.blue)
                } else if sum1to2 < item && sum1to3 >= item {
                    CustomCircle()
                        .foregroundColor(.yellow)
                } else if sum1to3 < item && sum1to4 >= item {
                    CustomCircle()
                        .foregroundColor(.green)
                } else if sum1to4 < item && sum1to5 >= item {
                    CustomCircle()
                        .foregroundColor(.purple)
                } else {
                    CustomCircle()
                        .foregroundColor(.gray)
                }
            }
        }
        .padding()
    }
}

struct CustomCircle: View {
    var body: some View {
        Circle()
            .frame(width: 20, height: 20)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
