package charactor;

public class ADAPHero extends Hero implements AD, AP {
	@Override
	public void physicAttack() {
		System.out.println(this.name + "����������");
	}
	
	@Override
	public void magicAttack () {
		System.out.println(this.name + "����ħ������");
	}
}