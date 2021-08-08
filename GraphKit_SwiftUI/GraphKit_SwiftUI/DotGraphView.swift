//
//  DotGraphView.swift
//  GraphKit_SwiftUI
//
//  Created by Taeeun Kim on 07.08.21.
//

import SwiftUI

struct Group {
    let percent: Int
    let color: Color
}

struct CustomCircle: View {
    var body: some View {
        // size of circle
        Circle()
            .frame(width: 20, height: 20)
    }
}

struct DotGraphView: View {
    // Total number of circles
    private let totalDots = 1...100
    private var groups = [Group]()
    
    // Init groups
    // The sum of the group's percent must be equal to that `totalDots`
    // e.g. 15 + 25 + 35 + 25 = 100
    init() {
        groups.append(Group(percent: 15, color: Color.red))
        groups.append(Group(percent: 25, color: Color.blue))
        groups.append(Group(percent: 35, color: Color.yellow))
        groups.append(Group(percent: 25, color: Color.gray))
    }
    
    // Number of columns
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
            
            // Top HStack UI
            HStack {
                CustomCircle()
                    .foregroundColor(groups[0].color)
                Text("Group1 \(groups[0].percent)% ")
                    .font(.caption)
                
                CustomCircle()
                    .foregroundColor(groups[1].color)
                Text("Group2 \(groups[1].percent)%")
                    .font(.caption)
            }
            
            HStack {
                CustomCircle()
                    .foregroundColor(groups[2].color)
                Text("Group3 \(groups[2].percent)%")
                    .font(.caption)
                
                CustomCircle()
                    .foregroundColor(groups[3].color)
                Text("Group4 \(groups[3].percent)%")
                    .font(.caption)
            }
            .padding()
            
            // DotGraph
            // Changeable padding and spacing
            LazyVGrid(columns: columns, spacing: 15) {
                ForEach(groups.indices, id: \.self) { group in
                    ForEach(totalDots, id: \.self) { dot in
                        if dot <= groups[group].percent {
                            CustomCircle()
                                .foregroundColor(groups[group].color)
                        }
                    }
                }
            }
            .padding()
        }
    }
}

struct DotGraphView_Previews: PreviewProvider {
    static var previews: some View {
        DotGraphView()
    }
}
