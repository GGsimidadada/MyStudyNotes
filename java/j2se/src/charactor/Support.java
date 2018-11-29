package charactor;

public class Support extends Hero implements Healer {
	@Override
	public void heal (Hero h) {
		if (h == null) System.out.println(this.name + "对自己进行治疗");
		else System.out.println(this.name + "对" + h.name + "进行治疗");
	}
}