package charactor;

public class ADAPHero extends Hero implements AD, AP {
	@Override
	public void physicAttack() {
		System.out.println(this.name + "进行物理攻击");
	}
	
	@Override
	public void magicAttack () {
		System.out.println(this.name + "进行魔法攻击");
	}
}