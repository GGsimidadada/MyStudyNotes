package cn.sxt.oop;

public abstract class Animal {
	abstract public void shout();
	
	public void run () {
		System.out.println("�ܰ���");
	}
}

class Dog extends Animal {
	@Override
	public void shout () {
		System.out.println("������");
	}
}
