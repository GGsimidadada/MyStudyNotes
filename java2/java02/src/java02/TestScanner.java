package java02;
import java.util.Scanner;

// 测试获得键盘输入
public class TestScanner {
	public static void main (String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("请输入名字：");
		String name = scanner.nextLine();
		System.out.println("请输入你的爱好");
		String favor = scanner.nextLine();
		System.out.println("请输入你的年龄");
		int age = scanner.nextInt();
		
		System.out.println("#################");
		System.out.println("你的姓名是：" + name);
		System.out.println("你的爱好是" + favor);
		System.out.println("你的年龄是" + age);
	}
}
