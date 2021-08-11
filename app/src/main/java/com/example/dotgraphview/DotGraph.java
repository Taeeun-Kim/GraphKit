package com.example.dotgraphview;


import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;

import java.util.LinkedList;
import java.util.Queue;

import androidx.annotation.Nullable;

public class DotGraph extends View {
    private Paint paint;
    private int DotRadius;
    private int Interval;
    private GraphRatio graphRatio;

    public DotGraph(Context context) {
        this(context, null);
    }

    public DotGraph(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);

        DotRadius = 40;
        Interval = 60;
        graphRatio = new GraphRatio(15, 25, 35, 25);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        setMeasuredDimension(Interval * 9 + DotRadius * 20, Interval * 9 + DotRadius * 20);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        DrawDot(canvas, DotRadius, Interval, this.graphRatio);
    }


    private void DrawDot(Canvas canvas, int DotRadius, int interval, GraphRatio graphRatio) {
        paint = new Paint();
        Queue<Integer> ColorDeck = ColorDeck();
        paint.setColor(ColorDeck.poll());
        int x = DotRadius;
        int y = DotRadius;
        int checker = 0;

        for (int i = 0; i < graphRatio.size(); i++) {
            for (int j = 0; j < graphRatio.get(i); j++) {
                canvas.drawCircle(x, y, DotRadius, paint);
                x = x + (DotRadius * 2) + interval;
                checker++;
                if (checker % 10 == 0) {
                    y = y + (DotRadius * 2) + interval;
                    x = DotRadius;
                }

            }
            if (ColorDeck.peek() != null) {
                paint.setColor(ColorDeck.poll());
            }
        }
    }

    private Queue<Integer> ColorDeck() {
        Queue<Integer> Deck = new LinkedList<>();
        Deck.add(Color.RED);
        Deck.add(Color.BLUE);
        Deck.add(Color.GREEN);
        Deck.add(Color.YELLOW);

        return Deck;
    }

}

class GraphRatio {
    static int idx = 0;
    static int max;
    int[] array;

    GraphRatio(int red, int blue) {
        max = 1;
        array = new int[]{red, blue};
    }

    GraphRatio(int red, int blue, int green) {
        max = 2;
        array = new int[]{red, blue, green};
    }

    GraphRatio(int red, int blue, int green, int yellow) {
        max = 3;
        array = new int[]{red, blue, green, yellow};

    }

    int size() {
        return max + 1;
    }

    void next() {
        if (idx < max) {
            idx += 1;
        }
    }

    int getPosition() {
        return idx;
    }

    int get(int position) {
        return array[position];
    }

}
