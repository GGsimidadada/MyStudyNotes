package charactor;

public class ADHero extends Hero implements AD {
	@Override
	public void physicAttack () {
		System.out.println(this.name + "����������");
	}
	
	@Override
	public void attack () {
		System.out.println(this.name + "�����˹���");
	}
	
	// ���ظ��ྲ̬����
	public static void battle_win () {
		System.out.println("ADHERO battle win.");
	}
	
	// ���๹�췽��
	public ADHero () {
		//super(null);
		System.out.println("ADHero �Ĺ��췽��");
	}
}