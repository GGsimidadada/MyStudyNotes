package cn.sxt.game;

import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JFrame;
/**
 * �ɻ���Ϸ��������
 * @author �ߺ�Ȼ
 *
 */
public class MyGameFrame extends JFrame {
	@Override
	public void paint (Graphics g) {   // �Զ�������
		g.drawLine(100, 100, 300, 300);
		g.drawRect(100, 100, 300, 300);
	}
	
	/**
	 * ��ʼ������
	 */
	public void launchFrame () {
		this.setTitle("�ߺ�Ȼ��Ʒ");
		this.setVisible(true);
		this.setSize(500, 500);
		this.setLocation(300, 300);
		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
	
	public static void main (String[] args) {
		MyGameFrame f = new MyGameFrame();
		f.launchFrame();
	}
}
