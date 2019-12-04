package java03;

public class Student {
	
	int id;
	String name;
	int age;
	Computer comd;
	
	void study () {
		System.out.println("在学习" + comd.brand);
	}
	
	void play () {
		System.out.println("在玩");
	}
	
	public static void main (String[] args) {
		Student s = new Student();
		s.play();
		s.comd = new Computer("联想拯救者");
		s.study();
	}
	
}

class Computer {
	String brand;
	Computer (String brand) {
		this.brand = brand;
	}
}
