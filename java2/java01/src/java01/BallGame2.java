package java01;

import java.awt.*;
import javax.swing.*;

public class BallGame2 extends JFrame {
	
	Image ball = Toolkit.getDefaultToolkit().getImage("img/ball.png");
	Image desk = Toolkit.getDefaultToolkit().getImage("img/desk.jpg");
	
	double x = 100; // 小球的横坐标
	double y = 100; // 小球的纵坐标
	
	double degree = 3.14 / 3; // 角度此处是60度
	
	// 画窗口的方法
	public void paint (Graphics g) {
		System.out.println("窗口被画了一次");
		g.drawImage(desk, 0, 0, null);
		g.drawImage(ball, (int)x, (int)y, null);
		
		x = x + 10 * Math.cos(degree);
		y = y + 10 * Math.sin(degree);
		
		// 碰到上下边界，基于x轴反转
		if (y > 500 - 40 - 30 || y < 80) {
			degree = -degree;
		}
		// 碰到上下边界，基于y轴
		if (x > 856 - 40 - 30 || x < 40) {
			degree = 3.14 - degree;
		}
	}
	
	// 窗口加载
	void launchFrame () {
		// 设置大小
		setSize(856, 500);
		// 设置位置
		setLocation(1300, 1000);
		// 显示
		setVisible(true);
		
		// 重画窗口，每秒重画25次
		while(true) {
			repaint();
			try {
				Thread.sleep(40);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void main(String[] args) {
		BallGame2 game = new BallGame2();
		game.launchFrame();
		
		
	}
}
