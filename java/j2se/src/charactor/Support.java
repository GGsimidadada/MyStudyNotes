package charactor;

public class Support extends Hero implements Healer {
	@Override
	public void heal (Hero h) {
		if (h == null) System.out.println(this.name + "���Լ���������");
		else System.out.println(this.name + "��" + h.name + "��������");
	}
}