package java03;

public class Student {
	
	int id;
	String name;
	int age;
	Computer comd;
	
	void study () {
		System.out.println("��ѧϰ" + comd.brand);
	}
	
	void play () {
		System.out.println("����");
	}
	
	public static void main (String[] args) {
		Student s = new Student();
		s.play();
		s.comd = new Computer("����������");
		s.study();
	}
	
}

class Computer {
	String brand;
	Computer (String brand) {
		this.brand = brand;
	}
}
