package java02;
import java.util.Scanner;

// ���Ի�ü�������
public class TestScanner {
	public static void main (String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("���������֣�");
		String name = scanner.nextLine();
		System.out.println("��������İ���");
		String favor = scanner.nextLine();
		System.out.println("�������������");
		int age = scanner.nextInt();
		
		System.out.println("#################");
		System.out.println("��������ǣ�" + name);
		System.out.println("��İ�����" + favor);
		System.out.println("���������" + age);
	}
}
