package java01;

import java.awt.*;
import javax.swing.*;

public class BallGame extends JFrame {
	
	Image ball = Toolkit.getDefaultToolkit().getImage("img/ball.png");
	Image desk = Toolkit.getDefaultToolkit().getImage("img/desk.jpg");
	
	double x = 100; // 小球的横坐标
	double y = 100; // 小球的纵坐标
	
	boolean right = true; // 方向
	
	// 画窗口的方法
	public void paint (Graphics g) {
		System.out.println("窗口被画了一次");
		g.drawImage(desk, 0, 0, null);
		g.drawImage(ball, (int)x, (int)y, null);
		
		if (right) {
			x = x + 10;
		} else {
			x = x - 10;
		}
		if (x > 786) {
			right = false;
		} else if (x < 40) {
			right = true;
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
		BallGame game = new BallGame();
		game.launchFrame();
	}
}
