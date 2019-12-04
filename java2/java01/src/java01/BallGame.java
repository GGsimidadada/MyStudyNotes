package java01;

import java.awt.*;
import javax.swing.*;

public class BallGame extends JFrame {
	
	Image ball = Toolkit.getDefaultToolkit().getImage("img/ball.png");
	Image desk = Toolkit.getDefaultToolkit().getImage("img/desk.jpg");
	
	double x = 100; // С��ĺ�����
	double y = 100; // С���������
	
	boolean right = true; // ����
	
	// �����ڵķ���
	public void paint (Graphics g) {
		System.out.println("���ڱ�����һ��");
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
	
	// ���ڼ���
	void launchFrame () {
		// ���ô�С
		setSize(856, 500);
		// ����λ��
		setLocation(1300, 1000);
		// ��ʾ
		setVisible(true);
		
		// �ػ����ڣ�ÿ���ػ�25��
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
