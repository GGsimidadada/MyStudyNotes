import java.util.Scanner;

public class HelloWorld {
	int i = 1;
	int j = i;
	final int n = 11;
	public void logI (int m) {
		m = 10;
		System.out.println(m);
	}
	public void logJ () {
		System.out.println(j);
	}
	public static void main(String[] args) {
//		Scanner s = new Scanner(System.in);
//		System.out.println("�������һ��ֵ");
//		int a = s.nextInt();
//		System.out.println(a);
//		System.out.println("������ڶ���ֵ");
//		int b = s.nextInt();
//		System.out.println(b);
//		System.out.println(a + b);
//		s.close();
		
//		int i = 1;
//		//       2     2     4     5     5
//		int j = ++i + i++ + ++i + ++i + i++;
//		System.out.println(j);
		
//		Scanner s = new Scanner(System.in);
//		System.out.println("����������");
//		float weight = s.nextFloat();
//		System.out.println("���������");
//		float height = s.nextFloat() / 100;
//		float BMI = weight / (height * height);
//		System.out.println("����BMIָ��Ϊ" + BMI);
		
//		int i = 1;
//		boolean j = !(i++ == 3) ^ (i++ == 2) && (i++ == 3);
//		System.out.println(j);
//		System.out.println(i);
//		i += i++; // �ȼ��� i = i + i++;
//		System.out.println(i);
//		
//		int money = 1;
//		for (int i = 1; i < 10; i++) {
//			System.out.println(money *= 2);
//		}
		
		int[] a = new int[5];
		a[0] = (int) (Math.random() * 100);
		a[1] = (int) (Math.random() * 100);
		a[2] = (int) (Math.random() * 100);
		a[3] = (int) (Math.random() * 100);
		a[4] = (int) (Math.random() * 100);
		int min = 100;
		for (int i = 0; i < a.length; i++) {
			if (a[i] < min) min = a[i];
			System.out.println("��" + i + "��Ϊ��" + a[i]);
		}
		System.out.println("��������Сֵ�ǣ�" + min);
		
		int[] b = { 1, 2, 3, 4, 5, 6 };
		int[] c = new int[3];
		System.arraycopy(b, 0, c, 0, 3);
		System.out.println(c);
		
	}
}