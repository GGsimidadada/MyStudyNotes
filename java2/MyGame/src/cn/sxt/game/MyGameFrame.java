package cn.sxt.game;

import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JFrame;
/**
 * 飞机游戏的主窗口
 * @author 高浩然
 *
 */
public class MyGameFrame extends JFrame {
	@Override
	public void paint (Graphics g) {   // 自动被调用
		g.drawLine(100, 100, 300, 300);
		g.drawRect(100, 100, 300, 300);
	}
	
	/**
	 * 初始化窗口
	 */
	public void launchFrame () {
		this.setTitle("高浩然作品");
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
