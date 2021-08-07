//
//  DotGraphView.swift
//  GraphKit_SwiftUI
//
//  Created by Taeeun Kim on 07.08.21.
//

import SwiftUI

struct DotGraphView: View {
    let data = 1...100 // total number of circles
    let group1 = 1...15
    let group2 = 1...25
    let group3 = 1...35
    // group4: The last group is calculated automatically.
    
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
        
        VStack {
            /*
             For the sum, except for the last group
             If there are 4 groups, only until sum1to3
             */
            let sum1to2 = group1.count + group2.count
            let sum1to3 = group1.count + group2.count + group3.count
            
            HStack {
                CustomCircle()
                    .foregroundColor(.red)
                Text("Group1 \(group1.count)% ")
                    .font(.caption)
                
                CustomCircle()
                    .foregroundColor(.blue)
                Text("Group2 \(group2.count)%")
                    .font(.caption)
            }
            
            HStack {
                CustomCircle()
                    .foregroundColor(.yellow)
                Text("Group3 \(group3.count)%")
                    .font(.caption)
                
                CustomCircle()
                    .foregroundColor(.gray)
                Text("Group4 \(100-sum1to3)%")
                    .font(.caption)
            }
            .padding()
            
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
                    } else { // group4
                        CustomCircle()
                            .foregroundColor(.gray)
                    }
                }
            }
            .padding()
        }
    }
}

struct CustomCircle: View {
    var body: some View {
        // size of circle
        Circle()
            .frame(width: 20, height: 20)
    }
}

struct DotGraphView_Previews: PreviewProvider {
    static var previews: some View {
        DotGraphView()
    }
}
