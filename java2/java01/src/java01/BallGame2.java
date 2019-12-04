package java01;

import java.awt.*;
import javax.swing.*;

public class BallGame2 extends JFrame {
	
	Image ball = Toolkit.getDefaultToolkit().getImage("img/ball.png");
	Image desk = Toolkit.getDefaultToolkit().getImage("img/desk.jpg");
	
	double x = 100; // С��ĺ�����
	double y = 100; // С���������
	
	double degree = 3.14 / 3; // �Ƕȴ˴���60��
	
	// �����ڵķ���
	public void paint (Graphics g) {
		System.out.println("���ڱ�����һ��");
		g.drawImage(desk, 0, 0, null);
		g.drawImage(ball, (int)x, (int)y, null);
		
		x = x + 10 * Math.cos(degree);
		y = y + 10 * Math.sin(degree);
		
		// �������±߽磬����x�ᷴת
		if (y > 500 - 40 - 30 || y < 80) {
			degree = -degree;
		}
		// �������±߽磬����y��
		if (x > 856 - 40 - 30 || x < 40) {
			degree = 3.14 - degree;
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
		BallGame2 game = new BallGame2();
		game.launchFrame();
		
		
	}
}
